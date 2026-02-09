'use server';

import { z } from 'zod';
import {
  createOrder as createOrderApi,
  CreateOrderData,
  WCOrder,
  getPaidOrdersCount,
} from '../lib/wordpress-api';

// Schema for input validation
const OrderSchema = z.object({
  fullName: z.string().min(3, 'El nombre completo debe tener al menos 3 caracteres').max(100),
  email: z.string().email('Email inválido'),
  phone: z.string().min(7, 'El teléfono debe tener al menos 7 números').max(20),
  address: z.string().min(5, 'La dirección es requerida').max(200),
  city: z.string().min(2).max(100),
  state: z.string().min(2).max(100),
  postcode: z.string().min(3, 'El código postal es requerido').max(20),
  productId: z.number().int().positive(),
  utmData: z.record(z.string(), z.string()).optional(),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar la política de privacidad',
  }),
  newsletter: z.boolean().default(false),
});

export type OrderInput = z.infer<typeof OrderSchema>;

/**
 * Server Action to create a WooCommerce order securely with validation
 */
export async function createOrderAction(input: OrderInput): Promise<WCOrder> {
  try {
    // 1. Validate Input
    const validatedData = OrderSchema.parse(input);

    // 2. Process Data (Split name on server for security/consistency)
    const nameParts = validatedData.fullName.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || nameParts[0];

    // 3. Prepare WooCommerce Data
    const orderData: CreateOrderData = {
      billing: {
        first_name: firstName,
        last_name: lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        address_1: validatedData.address,
        city: validatedData.city,
        state: validatedData.state,
        postcode: validatedData.postcode,
        country: 'CO',
      },
      line_items: [
        {
          product_id: validatedData.productId,
          quantity: 1,
        },
      ],
      payment_method: 'woo-mercado-pago-basic',
      payment_method_title: 'MercadoPago',
      meta_data: [
        {
          key: 'Source',
          value: 'Cromazoografías Landing Page',
        },
        {
          key: 'Acepta Política de Privacidad',
          value: validatedData.privacyPolicy ? 'Sí' : 'No',
        },
        {
          key: 'Suscrito al Newsletter',
          value: validatedData.newsletter ? 'Sí' : 'No',
        },
      ],
    };

    // 4. Add UTM Data to meta_data if present
    if (validatedData.utmData) {
      const utmLabels: Record<string, string> = {
        utm_source: 'UTM Source',
        utm_medium: 'UTM Medium',
        utm_campaign: 'UTM Campaign',
        utm_content: 'UTM Content',
        utm_term: 'UTM Term',
        fbclid: 'Facebook Click ID',
      };

      Object.entries(validatedData.utmData).forEach(([key, value]) => {
        if (value) {
          orderData.meta_data?.push({
            key: utmLabels[key] || key,
            value: value,
          });
        }
      });
    }

    // 5. Create in API
    return await createOrderApi(orderData);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors = error.issues.map((e) => e.message).join(', ');
      throw new Error(`Datos inválidos: ${fieldErrors}`);
    }
    console.error('Server Action Error (createOrder):', error);
    throw new Error(
      'Lo sentimos, ocurrió un error procesando tu pedido. Por favor intenta más tarde.'
    );
  }
}

/**
 * Server Action to get total sales for the main products
 */
export async function getTotalSalesAction(): Promise<number> {
  const PRODUCT_IDS = [3440, 3431, 3432]; // Set, Vol 1, Vol 2
  return await getPaidOrdersCount(PRODUCT_IDS);
}
