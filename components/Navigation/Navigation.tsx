'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './Navigation.scss';

interface NavigationProps {
  onPurchase: () => void;
}

export default function Navigation({ onPurchase }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav only after scrolling past the Hero (e.g., 80% of viewport height)
      const threshold = window.innerHeight * 0.8;
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePurchase = () => {
    onPurchase();
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__container">
        {/* LOGO AREA */}
        <div className="nav__brand">
          <a href="#inicio" className="nav__logo-link" aria-label="Inicio">
            <Image
              src="/cromazoografias-svg.svg"
              alt="Cromazoografías"
              width={160}
              height={32}
              className="nav__logo"
              priority
            />
          </a>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="nav__actions">
          <div className="nav__links">
            <a href="#concepto" className="nav__item">
              OBRA
            </a>
            <a href="#productos" className="nav__item">
              LIBROS
            </a>
          </div>

          <div className="nav__cta-wrapper">
            <button
              onClick={handlePurchase}
              className="btn btn--nav-buy"
              aria-label="Comprar ambos tomos"
              type="button"
            >
              <span>ADQUIRIR COMBO</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
