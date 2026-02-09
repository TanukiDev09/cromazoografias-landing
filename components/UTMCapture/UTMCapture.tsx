'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

/**
 * UTMCapture Component
 * 
 * Captures UTM parameters from the URL and stores them in sessionStorage
 * to be included as metadata in WooCommerce orders.
 */
function UTMTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const utmParams = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term',
      'fbclid'
    ];

    const capturedData: Record<string, string> = {};
    let hasData = false;

    utmParams.forEach((param) => {
      const value = searchParams.get(param);
      if (value) {
        capturedData[param] = value;
        hasData = true;
      }
    });

    if (hasData) {
      // Check if we already have some UTM data stored to merge
      const existingDataRaw = sessionStorage.getItem('utm_metadata');
      const existingData = existingDataRaw ? JSON.parse(existingDataRaw) : {};
      
      const newData = { ...existingData, ...capturedData };
      sessionStorage.setItem('utm_metadata', JSON.stringify(newData));
      console.log('UTM Metadata captured:', newData);
    }
  }, [searchParams]);

  return null;
}

export default function UTMCapture() {
  return (
    <Suspense fallback={null}>
      <UTMTracker />
    </Suspense>
  );
}
