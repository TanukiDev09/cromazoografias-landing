'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  name: string;
  price: string;
  productId: number;
}

interface NavigationProps {
  onPurchase: (product: Product) => void;
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
          <button
            className="btn btn--buy nav__cta"
            onClick={() =>
              onPurchase({ name: 'Cromazoografías Vol. 1', price: '$85.000', productId: 3431 })
            }
          >
            <span>Tomo 1</span>
          </button>
          <button
            className="btn btn--buy nav__cta"
            onClick={() =>
              onPurchase({ name: 'Cromazoografías Vol. 2', price: '$85.000', productId: 3432 })
            }
          >
            <span>Tomo 2</span>
          </button>
          <button
            className="btn btn--buy nav__cta btn--set"
            onClick={() =>
              onPurchase({
                name: 'Combo: Tomo 1 + Tomo 2',
                price: '$170.000',
                productId: 0,
              })
            }
          >
            <span>Set Completo</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
