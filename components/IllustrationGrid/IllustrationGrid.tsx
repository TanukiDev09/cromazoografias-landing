import React from 'react';
import Image from 'next/image';

interface Product {
  name: string;
  price: string;
  productId: number;
}

interface IllustrationGridProps {
  onPurchase: (product: Product) => void;
}

export default function IllustrationGrid({ onPurchase }: IllustrationGridProps) {
  const illustrations = [
    {
      name: 'CANGREJO FANTASMA',
      src: '/cangrejo-fantasma.jpg',
      color: 'yellow',
    },
    {
      name: 'SERPIENTE DEL MAÍZ',
      src: '/serpiente-maiz.jpg',
      color: 'orange',
    },
    {
      name: 'MANZANA DE MAR',
      src: '/manzana-mar.jpg',
      color: 'red',
    },
    {
      name: 'CACATÚA GALAH',
      src: '/cacatua-galah.jpg',
      color: 'pink',
    },
    {
      name: 'NUDIBRANQUIO BULLOCKII',
      src: '/nudibranquio-bullockii.jpg',
      color: 'purple',
    },
    {
      name: 'MORFO AZUL',
      src: '/morfo-azul.jpg',
      color: 'blue',
    },
    {
      name: 'PEZ LIMÓN',
      src: '/pez-limon.jpg',
      color: 'green',
    },
    {
      name: 'ARMIÑO',
      src: '/armino.jpg',
      color: 'white',
    },
  ];

  return (
    <section className="section section--illustrations">
      <div className="illustrations">
        <div className="illustrations__header">
          <h2 className="section__title">
            Técnica de trama
            <br />
            sobre negro
          </h2>
          <p className="section__subtitle">
            192 ilustraciones originales en halftone. Cada animal capturado en su esencia cromática.
          </p>
        </div>

        <div className="illustrations__grid">
          {illustrations.map((illus, idx) => (
            <div key={idx} className={`illustrations__frame illustrations__frame--${illus.color}`}>
              <div className="illustrations__image-wrapper">
                <Image
                  src={illus.src}
                  alt={illus.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="illustrations__image"
                  sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={idx < 3}
                />
              </div>
              <div className="illustrations__label">
                <span className="illustrations__name">{illus.name}</span>
              </div>
            </div>
          ))}
          {/* Fill the remaining grid slots to maintain the 3-column structure at wide screens */}
          <div className="illustrations__frame illustrations__frame--filler"></div>
        </div>

        <div className="illustrations__cta">
          <p className="illustrations__cta-text">
            Estas son solo 8 de las 192 ilustraciones que encontrarás en ambos volúmenes.
          </p>
          <div className="illustrations__cta-group">
            <button
              className="btn btn--buy-mini"
              onClick={() =>
                onPurchase({
                  name: 'Cromazoografías Vol. 1',
                  price: '$85.000',
                  productId: 3431,
                })
              }
            >
              <span>COMPRAR VOL.1 — $85.000</span>
            </button>
            <button
              className="btn btn--buy-mini"
              onClick={() =>
                onPurchase({
                  name: 'Cromazoografías Vol. 2',
                  price: '$85.000',
                  productId: 3432,
                })
              }
            >
              <span>COMPRAR VOL.2 — $85.000</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
