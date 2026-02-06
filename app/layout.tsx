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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${arvo.variable} ${lato.variable}`} suppressHydrationWarning>
      <body>
        <div className="grain"></div>
        {children}
      </body>
    </html>
  );
}
