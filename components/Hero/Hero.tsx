'use client';
import React, { useEffect, useState } from 'react';
import { getTotalSalesAction } from '../../app/actions';
import Counter from '../Counter/Counter';

interface Product {
  name: string;
  price: string;
  productId: number;
}

interface HeroProps {
  onPurchase: (product: Product) => void;
  initialSalesCount?: number;
}

export default function Hero({ onPurchase, initialSalesCount = 0 }: HeroProps) {
  const [salesCount, setSalesCount] = useState<number>(initialSalesCount);

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

  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero__container">
        <h1 className="hero__headline">
          No todos los días
          <br />
          eres la misma
          <br />
          persona.
        </h1>

        <p className="hero__signature">Cromazoografías.</p>

        <p className="hero__description">
          192 animales organizados
          <br />
          por color, no por
          <br />
          zoología.
        </p>

        <div className="hero__separator">· · · · · · · · ·</div>

        <div className="hero__counter-box">
          <span className="hero__counter-number">
            <Counter value={salesCount} />
          </span>
          <p className="hero__counter-label">ejemplares en manos de lectores.</p>
        </div>

        <div className="hero__actions">
          <div className="hero__purchase-buttons">
            <button className="btn btn--hero" onClick={() => onPurchase(vol1)}>
              <span>Comprar Vol. 1 — $85.000</span>
            </button>
            <button className="btn btn--hero" onClick={() => onPurchase(vol2)}>
              <span>Comprar Vol. 2 — $85.000</span>
            </button>
          </div>
          <a href="#productos" className="hero__scroll-link" onClick={scrollToProducts}>
            <span>Ver el libro ↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
