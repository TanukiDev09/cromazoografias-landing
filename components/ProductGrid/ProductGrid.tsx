'use client';
import React from 'react';
import Image from 'next/image';

interface VolumeData {
  id: number;
  num: string;
  name: string;
  price: string;
  colors: string[];
  cover: string;
  wcProductId: number;
  specs: {
    label: string;
    value: string;
  }[];
}

const volumes: VolumeData[] = [
  {
    id: 1,
    num: '01',
    name: 'Cromazoografías Vol. 1',
    price: '$85.000',
    colors: ['yellow', 'orange', 'red', 'pink'],
    cover: '/9786289625134.jpg',
    wcProductId: 3431,
    specs: [
      { label: 'Espectro', value: 'Amarillo → Rosa' },
      { label: 'Contenido', value: '96 animales · 96 poemas' },
      { label: 'Formato', value: '200 pág · 14×17cm' },
      { label: 'Papel', value: 'Bond 90g' },
    ],
  },
  {
    id: 2,
    num: '02',
    name: 'Cromazoografías Vol. 2',
    price: '$85.000',
    colors: ['purple', 'blue', 'green', 'white'],
    cover: '/9786289625127.jpg',
    wcProductId: 3432,
    specs: [
      { label: 'Espectro', value: 'Púrpura → Blanco' },
      { label: 'Contenido', value: '96 animales · 96 poemas' },
      { label: 'Formato', value: '200 pág · 14×17cm' },
      { label: 'Papel', value: 'Bond 90g' },
    ],
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
        <div className="products__grid">
          {volumes.map((vol) => (
            <article key={vol.id} className="vol-section" data-vol={vol.num}>
              <div className="vol-section__layout">

                {/* Visual ADN: Technical Grid Lines & Vertical Tag */}
                <div className="vol-section__accent-bar">
                  <div className="vol-section__color-tabs">
                    {vol.colors.map((c) => (
                      <div key={c} className={`vol-section__color-tab strip--${c}`}></div>
                    ))}
                  </div>
                  <span className="vol-section__vertical-tag">VOL_{vol.num}</span>
                </div>

                {/* Cover Showcase (High-End Technical Display) */}
                <div className="vol-section__showcase">
                  <div className="vol-section__serial">TNUKI_{vol.wcProductId}_REV_2.4</div>
                  <div className="vol-section__cover">
                    <Image
                      src={vol.cover}
                      alt={vol.name}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 400px"
                      style={{ objectFit: 'contain' }}
                      priority={true}
                    />
                  </div>
                </div>

                {/* Content Area: Editorial Layout */}
                <div className="vol-section__info">
                  <header className="vol-section__header">
                    <h3 className="vol-section__name">{vol.name}</h3>
                  </header>

                  <div className="vol-section__specs-container">
                    <div className="vol-section__data-sheet">
                      {vol.specs.map((spec, i) => (
                        <div key={i} className="vol-section__data-item">
                          <span className="vol-section__data-label">{spec.label}</span>
                          <span className="vol-section__data-value">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Zone: Locked to Bottom Horizon */}
                  <div className="vol-section__action-zone">
                    <div className="vol-section__price-box">
                      <span className="vol-section__price-label">EST. UNITARIO</span>
                      <div className="vol-section__price">{vol.price}</div>
                    </div>
                    <button
                      className="btn btn--buy"
                      onClick={() =>
                        onPurchase({ name: vol.name, price: vol.price, productId: vol.wcProductId })
                      }
                    >
                      <span>COMPRAR_AHORA</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
