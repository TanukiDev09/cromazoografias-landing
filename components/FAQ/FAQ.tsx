import React, { useState } from 'react';
import './FAQ.scss';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Es un libro infantil?',
      a: 'No. Es poesía existencial ilustrada para adultos. Los animales no son personajes — son espejos.',
    },
    {
      q: '¿Cuál volumen compro primero?',
      a: 'El que te llame más: cálido o frío. Cada uno funciona solo. El set completo tiene sentido como obra total.',
    },
    {
      q: '¿Qué es el halftone?',
      a: 'Una técnica que construye la imagen a partir de puntos de distintos tamaños. Sobre fondo negro genera una textura densa y profunda. No se parece a la ilustración digital convencional.',
    },
    {
      q: '¿Cuándo llega mi pedido?',
      a: 'Los pedidos se despachan en los 5 días hábiles siguientes a la compra.',
    },
    {
      q: '¿Solo envían a Colombia?',
      a: 'Por ahora sí. Estamos trabajando en envíos internacionales.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-section__container">
        <div className="faq-section__list">
          {faqs.map((f, idx) => (
            <div key={idx} className={`faq-section__item ${activeIndex === idx ? 'faq-section__item--open' : ''}`}>
              <button className="faq-section__question" onClick={() => toggleFAQ(idx)}>
                <span className="faq-section__symbol">{activeIndex === idx ? '−' : '+'}</span>
                {f.q}
              </button>
              <div className="faq-section__answer">
                <div className="faq-section__answer-inner">
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
