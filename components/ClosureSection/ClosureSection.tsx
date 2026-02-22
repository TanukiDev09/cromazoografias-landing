import React from 'react';
import './ClosureSection.scss';

export default function ClosureSection() {
  const scrollToProducts = () => {
    const products = document.getElementById('productos');
    if (products) {
      products.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="closure" id="cierre">
      <div className="closure__container">
        <h2 className="closure__title">
          No todos los días
          <br />
          eres la misma
          <br />
          persona.
        </h2>

        <p className="closure__copy">Alguno de los 192 es tuyo.</p>

        <button className="closure__cta" onClick={scrollToProducts}>
          Comprar Cromazoografías
        </button>

        <footer className="closure__footer">
          <p>Tanuki Libros · 2026</p>
        </footer>
      </div>
    </section>
  );
}
