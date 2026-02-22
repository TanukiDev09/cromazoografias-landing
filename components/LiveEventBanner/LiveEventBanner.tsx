'use client';
import React from 'react';
import './LiveEventBanner.scss';

export default function LiveEventBanner() {
  return (
    <section className="live-event">
      <div className="live-event__container">
        <div className="live-event__content">
          <header className="live-event__header">
            <h2 className="live-event__title">CONVERSACIÓN CON JUAN DÁVILA</h2>
            <p className="live-event__subtitle">
              Una conversación abierta sobre el proceso detrás de Cromazoografías: tres años ilustrando animales como estados emocionales humanos.
            </p>
          </header>

          <footer className="live-event__meta">
            <div className="live-event__item">
              <span className="live-event__label">CUÁNDO</span>
              <span className="live-event__value">Miércoles 25 de febrero · 19:00 COT</span>
            </div>
            <div className="live-event__item">
              <span className="live-event__label">DÓNDE</span>
              <span className="live-event__value">En vivo por @tanuki_libros en Instagram</span>
            </div>
          </footer>

          <div className="live-event__actions">
            <a
              href="https://www.instagram.com/tanuki_libros/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--hero"
            >
              <span>SEGUIR @tanuki_libros</span>
            </a>
            <a href="#productos" className="btn btn--hero-secondary">
              <span>VER EL LIBRO — desde $85.000</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
