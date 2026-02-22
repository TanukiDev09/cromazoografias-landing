import React from 'react';
import HomeClient from './HomeClient';
import { getPaidOrdersCount } from '../lib/wordpress-api';

export default async function Home() {
  const PRODUCT_IDS = [3431, 3432]; // Vol 1, Vol 2
  const salesCount = await getPaidOrdersCount(PRODUCT_IDS);

  return (
    <main>
      <HomeClient initialSalesCount={salesCount} />
    </main>
  );
}
