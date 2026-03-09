'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getTotalSalesAction } from '../../app/actions';
import Counter from '../Counter/Counter';
import './hero-styles.scss';

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

  const comboProduct: Product = {
    name: 'Cromazoografías Vol. 1 + 2',
    price: '$170.000',
    productId: 0,
  };

  const scrollToConcept = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('concepto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero__grid-container">
        {/* Left Column (Content) */}
        <div className="hero__content">
          {/* ZONE A: THE HOOK */}
          <header className="hero__header">
            <h1 className="hero__headline">NO TODOS LOS DÍAS ERES LA MISMA PERSONA.</h1>
            <p className="hero__subheadline">
              Explora la taxonomía imposible a través de dos volúmenes de arte coleccionable. Una
              obra indispensable para creativos, artistas y diseñadores.
            </p>
          </header>

          {/* ZONE B: TECHNICAL SPECS */}
          <div className="hero__specs">
            <div className="hero__spec-item">
              <span className="hero__spec-label">COLECCIÓN</span>
              <span className="hero__spec-value">2 VOLÚMENES</span>
            </div>
            <div className="hero__spec-item">
              <span className="hero__spec-label">CATÁLOGO</span>
              <span className="hero__spec-value">192 ANIMALES</span>
            </div>
            <div className="hero__spec-item">
              <span className="hero__spec-label">ARTISTA</span>
              <span className="hero__spec-value">JUAN DÁVILA</span>
            </div>
          </div>
          {/* ZONE D: PRIMARY CTA */}
          <div className="hero__cta-group">
            <div className="hero__main-action">
              <button
                className="btn btn--hero btn--commercial"
                onClick={() => onPurchase(comboProduct)}
              >
                <span>ADQUIRIR OBRA COMPLETA — $170.000</span>
              </button>
              <p className="hero__cta-note">INCLUYE VOL. 1 + VOL. 2 · ENVÍO NO INCLUIDO</p>
            </div>
            <a href="#concepto" className="hero__nav-link" onClick={scrollToConcept}>
              EXPLORAR LA OBRA ↓
            </a>
          </div>
        </div>

        {/* Right Column (Visual) */}
        <div className="hero__product-visual">
          <Image
            src="/cromazoografias-two-volumes.png"
            alt="Cromazoografías Vol. 1 y 2"
            width={800}
            height={1000}
            priority
            className="hero__books-img"
          />
          {/* ZONE C: SOCIAL PROOF / COUNTER */}
          <div className="hero__status">
            <div className="hero__counter-display">
              <div className="hero__counter-wrapper">
                <Counter value={salesCount} />
              </div>
              <p className="hero__counter-desc">EJEMPLARES EN MANOS DE LECTORES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
