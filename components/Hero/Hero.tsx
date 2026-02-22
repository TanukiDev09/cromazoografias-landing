'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getTotalSalesAction } from '../../app/actions';
import Counter from '../Counter/Counter';
import Countdown from './Countdown';
import './Hero.scss';


interface HeroProps {
  initialSalesCount?: number;
}

export default function Hero({ initialSalesCount = 0 }: HeroProps) {
  const [salesCount, setSalesCount] = useState<number>(initialSalesCount);
  const TARGET_DATE = '2026-02-25T19:00:00-05:00'; // 25 de Febrero, 7 PM COT

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

  return (
    <section className="hero" id="inicio">
      {/* 1. Visual Anchor: The Author */}
      <div className="hero__visual">
        <Image
          src="/foto-autor.png"
          alt="Juan Dávila - El Autor"
          fill
          className="hero__visual-img"
          priority
        />
        <div className="hero__visual-overlay"></div>
      </div>

      {/* 2. Content Area: Guaranteed Contrast */}
      <div className="hero__content">
        <div className="hero__content-container">
          <header className="hero__header">
            <div className="hero__branding-box">
              <img src="/cromazoografias-svg.svg" alt="Cromazoografías" className="hero__main-logo" />
            </div>

            <div className="hero__status-badge">
              <span className="hero__live-dot"></span>
              EN VIVO · INSTAGRAM
            </div>
          </header>

          <main className="hero__event">
            <h1 className="hero__title">
              Conversación con <br />
              <strong>Juan Dávila</strong>
            </h1>

            <div className="hero__countdown-box">
              <Countdown targetDate={TARGET_DATE} />
            </div>

            <div className="hero__meta">
              <div className="hero__meta-data">
                <span className="hero__meta-label">MIE 25 FEB</span>
                <span className="hero__meta-value">19:00 COT</span>
              </div>
              <div className="hero__meta-data">
                <span className="hero__meta-label">DÓNDE</span>
                <span className="hero__meta-value">@tanuki_libros</span>
              </div>
            </div>

            <div className="hero__cta-group">
              <a
                href="https://www.instagram.com/tanuki_libros?upcoming_event_id=17929765824192906"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--hero"
              >
                <span>SEGUIR @tanuki_libros</span>
              </a>
            </div>
          </main>

          <footer className="hero__quick-status">
            <div className="hero__sales-mini">
              <Counter value={salesCount} variant="hero-mini" />
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
