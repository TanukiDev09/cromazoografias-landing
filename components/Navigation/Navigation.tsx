'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavigationProps {
  onPurchase: () => void;
}

export default function Navigation({ onPurchase }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__container">
        <a href="#inicio" className="nav__logo-link">
          <Image
            src="/cromazoografias-svg.svg"
            alt="Cromazoografías"
            width={150}
            height={30}
            className="nav__logo"
          />
        </a>

        <div className="nav__menu">
          <a href="#productos" className="nav__link">
            Libros
          </a>
          <button onClick={onPurchase} className="btn btn--buy nav__cta">
            <span>Comprar ambos</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
