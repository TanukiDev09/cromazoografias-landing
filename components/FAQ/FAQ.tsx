'use client';
import React from 'react';
import './FAQ.scss';

export default function FAQ() {
  const faqs = [
    {
      q: '¿Hacen envíos?',
      a: 'Sí, enviamos a toda Colombia. Bogotá $10.000, resto del país $20.000. Los libros viajan muy protegidos.',
    },
    {
      q: '¿Necesito leer en orden?',
      a: 'No. Cada animal es una doble página independiente. Abre el libro en cualquier lugar, contempla la ilustración y lee el poema. Es un libro de consulta emocional.',
    },
    {
      q: '¿Es un libro infantil?',
      a: 'Es poesía ilustrada para adultos. Aunque a los niños les atraen las ilustraciones, los poemas están escritos para ser habitados desde la experiencia adulta.',
    },
    {
      q: '¿Qué volumen compro primero?',
      a: 'No hay un orden. El Vol. 1 explora el espectro cálido (amarillo a rosa) y el Vol. 2 el espectro frío (púrpura a blanco). Compra el que primero te llame por el color.',
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq">
        <h2 className="faq__title">Preguntas.</h2>
        <p className="faq__subtitle">Todo lo que necesitas saber.</p>

        <div className="faq__list">
          {faqs.map((f, idx) => (
            <details key={idx} className="faq__item">
              <summary className="faq__q">{f.q}</summary>
              <div className="faq__a">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
