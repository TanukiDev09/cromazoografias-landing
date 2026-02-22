'use client';
import React, { useEffect, useState } from 'react';
import './Hero.scss';
import { getTotalSalesAction } from '../../app/actions';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [salesCount, setSalesCount] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    // Fetch real sales count
    getTotalSalesAction()
      .then((count) => setSalesCount(count))
      .catch(() => setSalesCount(0));
  }, []);

  const scrollToGallery = () => {
    const gallery = document.getElementById('galeria');
    if (gallery) {
      gallery.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`hero ${isVisible ? 'hero--visible' : ''}`} id="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          No todos los días
          <br />
          eres la misma
          <br />
          persona.
        </h1>

        <div className="hero__signature">
          <p>Cromazoografías.</p>
        </div>

        <div className="hero__description">
          <p>
            192 animales organizados
            <br />
            por color, no por zoología.
          </p>
        </div>

        <div className="hero__separator">· · · · · · · · ·</div>

        {salesCount !== null && (
          <div className="hero__counter">
            <p>
              {salesCount} ejemplares
              <br />
              en manos de lectores.
            </p>
          </div>
        )}

        <button className="hero__cta" onClick={scrollToGallery}>
          Ver el libro ↓
        </button>
      </div>
    </section>
  );
}
