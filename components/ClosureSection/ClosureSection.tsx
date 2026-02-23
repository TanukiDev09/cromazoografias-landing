'use client';
import React from 'react';
import './ClosureSection.scss';

interface Product {
  name: string;
  price: string;
  productId: number;
}

interface ClosureSectionProps {
  onPurchase: (product: Product) => void;
}

export default function ClosureSection({ onPurchase }: ClosureSectionProps) {
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
    <section className="closure-section" id="cierre">
      <div className="closure">
        <h2 className="closure__title">Los animales nos devuelven lo humano.</h2>
        <p className="closure__description">Elige tu volumen y comienza la lectura.</p>

        <div className="closure__actions">
          <button className="btn btn--hero" onClick={() => onPurchase(vol1)}>
            <span>Comprar Vol. 1 — $85.000</span>
          </button>
          <button className="btn btn--hero" onClick={() => onPurchase(vol2)}>
            <span>Comprar Vol. 2 — $85.000</span>
          </button>
        </div>

        <div className="closure__footer">
          <p className="closure__signature">Cromazoografías.</p>
        </div>
      </div>
    </section>
  );
}
