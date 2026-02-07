import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: '¿Puedo comprar solo un volumen?',
      a: 'Sí, puedes comprar Vol. 1 o Vol. 2 por separado a $85.000 cada uno, o el set completo a $160.000 (ahorro de $10.000).',
    },
    {
      q: '¿Cuánto cuesta el envío?',
      a: 'Bogotá: $10.000. Resto de Colombia: $20.000. El costo exacto se calcula al finalizar tu compra.',
    },
    {
      q: '¿Cuál es el formato físico?',
      a: 'Cada volumen mide 14×17cm. Encuadernación rústica. 200 páginas a todo color con papel de alta calidad.',
    },
    {
      q: '¿Qué volumen compro primero?',
      a: 'El que te llame más. Vol. 1 es paleta cálida (amarillo → rosa), Vol. 2 es paleta fría (púrpura → blanco). Ambos funcionan independientes.',
    },
    {
      q: '¿Hacen envíos?',
      a: 'Sí, enviamos a toda Colombia. El costo de envío se calcula al finalizar la compra según tu ciudad.',
    },
    {
      q: '¿Necesito leer en orden?',
      a: 'No. Cada animal es una doble página independiente. Abre donde quieras y lee.',
    },
    {
      q: '¿Es libro infantil?',
      a: 'Es poesía ilustrada para adultos. Los animales funcionan como espejos de estados emocionales humanos. Los poemas son contemplativos y filosóficos, diseñados para lectura nocturna o momentos de pausa.',
    },
  ];

  return (
    <section className="section section--faq" id="faq">
      <div className="faq">
        <div className="faq__header">
          <h2 className="section__title">Preguntas frecuentes</h2>
          <p className="section__subtitle">Todo lo que necesitas saber antes de comprar.</p>
        </div>

        <div className="faq__list">
          {faqs.map((f, idx) => (
            <div key={idx} className="faq__item">
              <div className="faq__q">{f.q}</div>
              <div className="faq__a">{f.a}</div>
            </div>
          ))}
        </div>

        <div className="faq__final-cta">
          <h3 className="faq__final-title">Elige tu volumen</h3>
          <a href="#productos" className="btn btn--hero">
            <span>Ver opciones de compra</span>
          </a>
        </div>
      </div>
    </section>
  );
}
