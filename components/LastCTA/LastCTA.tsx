'use client';
import React from 'react';
import './LastCTA.scss';

interface Product {
  name: string;
  price: string;
  productId: number;
}

interface LastCTAProps {
  onPurchase: (product: Product) => void;
}

export default function LastCTA({ onPurchase }: LastCTAProps) {
  const comboProduct: Product = {
    name: 'Volumen 1 + Volumen 2',
    price: '$170.000',
    productId: 0, // 0 represents the combo in this logic
  };

  const vol1: Product = {
    name: 'Cromazoografías Vol. 1',
    price: '$85.000',
    productId: 3431,
  };

  const vol2: Product = {
    name: 'Cromazoografías Vol. 2',
    price: '$85.000',
    productId: 3432,
  };

  return (
    <section className="last-cta">
      <div className="last-cta__container">
        <span className="last-cta__label">Edición Limitada</span>

        <h2 className="last-cta__title">
          Completa tu <span>Colección.</span>
        </h2>

        <p className="last-cta__description">
          Asegura ambos volúmenes y descubre el espectro completo de la taxonomía emocional animal.
        </p>

        <div className="last-cta__actions">
          <div className="last-cta__main-btn">
            <button
              className="btn btn--hero"
              onClick={() => onPurchase(comboProduct)}
              style={{ width: '100%' }}
            >
              <span>Comprar Colección Completa — $170.000</span>
            </button>
          </div>

          <div className="last-cta__secondary-actions">
            <span className="last-cta__secondary-label">O adquiere por separado:</span>
            <div className="last-cta__individual-btns">
              <button className="last-cta__small-btn" onClick={() => onPurchase(vol1)}>
                Vol. 1
              </button>
              <button className="last-cta__small-btn" onClick={() => onPurchase(vol2)}>
                Vol. 2
              </button>
            </div>
          </div>
        </div>

        <div className="last-cta__benefit">Envío asegurado a toda Colombia.</div>
      </div>
    </section>
  );
}
