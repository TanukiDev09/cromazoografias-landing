/**
 * WordPress/WooCommerce API Service
 * Handles all communication with the WordPress backend
 */

// WooCommerce Product Interface
export interface WCProduct {
  id: number;
  name: string;
  slug: string;
  price: string;
  regular_price: string;
  sale_price: string;
  description: string;
  short_description: string;
  images: Array<{
    id: number;
    src: string;
    alt: string;
  }>;
  meta_data: Array<{
    key: string;
    value: any;
  }>;
  stock_status: 'instock' | 'outofstock' | 'onbackorder';
}

// Order Billing Information
export interface OrderBilling {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address_1: string;
  address_2?: string;
  city: string;
  state: string;
  postcode?: string;
  country: string;
}

// Order Line Item
export interface OrderLineItem {
  product_id: number;
  quantity: number;
}

// Create Order Data
export interface CreateOrderData {
  billing: OrderBilling;
  line_items: OrderLineItem[];
  payment_method?: string;
  payment_method_title?: string;
  set_paid?: boolean;
}

// WooCommerce Order Response
export interface WCOrder {
  id: number;
  status: string;
  total: string;
  billing: OrderBilling;
  line_items: any[];
  payment_url?: string;
  meta_data?: Array<{
    key: string;
    value: any;
  }>;
}

/**
 * Get all products from WooCommerce
 */
export async function getProducts(): Promise<WCProduct[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_WC_API_URL;
    if (!apiUrl?.startsWith('https://')) {
      throw new Error('API URL must be secure (HTTPS)');
    }
    const consumerKey = process.env.WC_CONSUMER_KEY;
    const consumerSecret = process.env.WC_CONSUMER_SECRET;

    if (!apiUrl || !consumerKey || !consumerSecret) {
      throw new Error('Missing WooCommerce API configuration');
    }

    const response = await fetch(`${apiUrl}/products?per_page=100`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch products: ${response.status} - ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Get a single product by ID
 */
export async function getProduct(productId: number): Promise<WCProduct> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_WC_API_URL;
    const consumerKey = process.env.WC_CONSUMER_KEY;
    const consumerSecret = process.env.WC_CONSUMER_SECRET;

    if (!apiUrl || !consumerKey || !consumerSecret) {
      throw new Error('Missing WooCommerce API configuration');
    }

    const response = await fetch(`${apiUrl}/products/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch product: ${response.status} - ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

/**
 * Create a new order in WooCommerce
 */
export async function createOrder(orderData: CreateOrderData): Promise<WCOrder> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_WC_API_URL;
    if (!apiUrl?.startsWith('https://')) {
      throw new Error('API URL must be secure (HTTPS)');
    }
    const consumerKey = process.env.WC_CONSUMER_KEY;
    const consumerSecret = process.env.WC_CONSUMER_SECRET;

    if (!apiUrl || !consumerKey || !consumerSecret) {
      throw new Error('Missing WooCommerce API configuration');
    }

    const response = await fetch(`${apiUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to create order: ${response.status} - ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

/**
 * Get order by ID
 */
export async function getOrder(orderId: number): Promise<WCOrder> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_WC_API_URL;
    const consumerKey = process.env.WC_CONSUMER_KEY;
    const consumerSecret = process.env.WC_CONSUMER_SECRET;

    if (!apiUrl || !consumerKey || !consumerSecret) {
      throw new Error('Missing WooCommerce API configuration');
    }

    const response = await fetch(`${apiUrl}/orders/${orderId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch order: ${response.status} - ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
}
