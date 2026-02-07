'use client';
import React from 'react';
import Image from 'next/image';

interface Volume {
  id: number;
  num: string;
  name: string;
  specs: string;
  price: string;
  colors: string[];
  cover: string;
  wcProductId: number;
}

const volumes: Volume[] = [
  {
    id: 1,
    num: 'VOL 1',
    name: 'Cromazoografías Vol. 1',
    specs: 'Amarillo → Rosa\n96 animales · 96 poemas · 200 páginas\n14×17cm · Encuadernación rústica',
    price: '$85.000',
    colors: ['yellow', 'orange', 'red', 'pink'],
    cover: '/1.png',
    wcProductId: 3431,
  },
  {
    id: 2,
    num: 'VOL 2',
    name: 'Cromazoografías Vol. 2',
    specs: 'Púrpura → Blanco\n96 animales · 96 poemas · 200 páginas\n14×17cm · Encuadernación rústica',
    price: '$85.000',
    colors: ['purple', 'blue', 'green', 'white'],
    cover: '/2.png',
    wcProductId: 3432,
  },
];

interface Product {
  name: string;
  price: string;
  productId: number;
}

interface ProductGridProps {
  onPurchase: (product: Product) => void;
}

export default function ProductGrid({ onPurchase }: ProductGridProps) {
  return (
    <section className="section section--products" id="productos">
      <div className="products">
        <div className="products__intro">
          <h2 className="section__title">Elige tu volumen</h2>
          <p className="section__subtitle">
            Cada libro es un viaje cromático por el reino animal. Puedes comprarlos por separado o
            juntos.
          </p>
        </div>

        <div className="products__grid">
          {volumes.map((vol) => (
            <div key={vol.id} className="vol-section">
              <h3 className="vol-section__title">{vol.num}</h3>
              <div className="vol-section__layout">
                <div className="vol-section__specs-box">
                  <div className="vol-section__cover">
                    <Image
                      src={vol.cover}
                      alt={vol.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="vol-section__cover-img"
                    />
                  </div>
                  <div className="vol-section__info">
                    <h4
                      className="u-uppercase u-letter-spacing"
                      style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}
                    >
                      Ficha Técnica
                    </h4>
                    <p className="vol-section__text">{vol.specs}</p>
                  </div>
                  <div>
                    <div className="vol-section__price">{vol.price}</div>
                    <button
                      className="btn btn--buy"
                      onClick={() =>
                        onPurchase({ name: vol.name, price: vol.price, productId: vol.wcProductId })
                      }
                    >
                      <span>Conseguir {vol.num}</span>
                    </button>
                  </div>
                </div>
                <div className="vol-section__colors-box">
                  {vol.colors.map((color) => (
                    <div key={color} className={`vol-section__color-bar strip--${color}`}></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
