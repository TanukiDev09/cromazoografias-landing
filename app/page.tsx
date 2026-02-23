import React from 'react';
import HomeClient from './HomeClient';
import { getTotalSalesAction } from './actions';

export default async function Home() {
  const initialSalesCount = await getTotalSalesAction();

  return (
    <main>
      <HomeClient initialSalesCount={initialSalesCount} />
    </main>
  );
}
