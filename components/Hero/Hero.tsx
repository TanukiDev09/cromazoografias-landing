'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getTotalSalesAction } from '../../app/actions';

interface Product {
  name: string;
  price: string;
  productId: number;
}

interface HeroProps {
  onPurchase: (product: Product) => void;
}

export default function Hero({ onPurchase }: HeroProps) {
  const [salesCount, setSalesCount] = useState<number>(42);

  useEffect(() => {
    async function fetchSales() {
      try {
        const total = await getTotalSalesAction();
        setSalesCount(total);
      } catch (error) {
        console.error('Failed to fetch sales count:', error);
      }
    }
    fetchSales();
  }, []);

  const setProduct: Product = {
    name: 'Set Completo (Vol. 1 + Vol. 2)',
    price: '$160.000',
    productId: 3440,
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero__impact">
        <h1 className="hero__title hero__title--text">CROMAZOOGRAFÍAS</h1>
        <div className="hero__title hero__title--svg">
          <img src="/cromazoografias-svg.svg" alt="Cromazoografías" className="hero__logo" />
        </div>
        <p className="hero__tagline">Los animales nos devuelven lo humano</p>
      </div>

      <div className="hero__main-concept">
        <div className="hero__illus-box">
          <Image
            src="https://placehold.jp/48/000000/ffffff/800x800.png?text=CROMAZOOGRAFÍA%0ADE%0AMUESTRA"
            alt="Cromazoografía de muestra"
            width={800}
            height={800}
            className="hero__image"
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </div>
        <div className="hero__poem-box">
          <p className="hero__poem-text">
            Tocar con la carne viva,
            <br />
            dejarse afectar,
            <br />
            refugiarse ante el miedo
            <br />y levantar otra coraza.
          </p>
          <div className="hero__poem-meta">
            <span className="hero__poem-animal">SERPIENTE</span>
            <span className="hero__poem-author">Juan Dávila</span>
          </div>
        </div>
      </div>

      <div className="hero__cta-zone">
        <div className="hero__value-prop">
          <div className="hero__stat">
            <span className="hero__stat-number">192</span>
            <span className="hero__stat-label">Poemas</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">2</span>
            <span className="hero__stat-label">Volúmenes</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">7</span>
            <span className="hero__stat-label">Colores</span>
          </div>
        </div>

        <div className="hero__preorder-counter">
          <div className="hero__preorder-display">
            <span className="hero__preorder-number">
              {salesCount.toString().padStart(3, '0')}
            </span>
          </div>
          <p className="hero__preorder-label">EJEMPLARES PEDIDOS EN PREVENTA</p>
        </div>

        <button className="btn btn--hero" onClick={() => onPurchase(setProduct)}>
          <span>COMPRAR SET COMPLETO — $160.000</span>
        </button>

        <p className="hero__cta-note">O elige volúmenes individuales abajo ↓</p>
      </div>
    </section>
  );
}
