import React from 'react';
import { Arvo, Lato } from 'next/font/google';
import '../styles/main.scss';

const arvo = Arvo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-arvo',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
});

export const metadata = {
  title: 'Cromazoografías — Juan Dávila × Tanuki Libros',
  description:
    'Los animales nos devuelven lo humano. 192 poemas e ilustraciones organizados por espectro cromático.',
  openGraph: {
    title: 'Conversación con Juan Dávila · Cromazoografías',
    description: 'En vivo el 25 de febrero · 19:00 COT · @tanuki_libros en Instagram',
    url: 'https://cromazoografias.tanukilibros.com',
    siteName: 'Cromazoografías',
    images: [
      {
        url: 'https://cromazoografias.tanukilibros.com/cangrejo-fantasma.jpg',
        width: 1200,
        height: 630,
        alt: 'Juan Dávila — Cromazoografías',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cromazoografias.tanukilibros.com',
  },
};

import UTMCapture from '../components/UTMCapture/UTMCapture';
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${arvo.variable} ${lato.variable}`} suppressHydrationWarning>
      <body>
        <div className="grain"></div>
        <UTMCapture />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
