'use server';

import { createOrder as createOrderApi, CreateOrderData, WCOrder } from '../lib/wordpress-api';

/**
 * Server Action to create a WooCommerce order securely
 */
export async function createOrderAction(orderData: CreateOrderData): Promise<WCOrder> {
  try {
    return await createOrderApi(orderData);
  } catch (error) {
    console.error('Server Action Error (createOrder):', error);
    throw error;
  }
}
