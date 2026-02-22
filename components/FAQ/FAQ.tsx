import React from 'react';

interface Product {
  name: string;
  price: string;
  productId: number;
}

interface FAQProps {
  onPurchase: (product: Product) => void;
}

export default function FAQ({ onPurchase }: FAQProps) {
  const faqs = [
    {
      q: '¿Puedo comprar solo un volumen?',
      a: 'Sí, puedes comprar Vol. 1 o Vol. 2 por separado a $85.000 cada uno.',
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
      q: '¿Cuándo llega mi libro?',
      a: 'Los envíos se realizan de 2 a 5 días hábiles después de tu compra. Recibirás un número de guía para rastrear tu pedido.',
    },
    {
      q: '¿Hay stock disponible?',
      a: 'Sí, hay ejemplares disponibles de ambos volúmenes.',
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
          <div className="faq__cta-group">
            <button
              className="btn btn--buy-mini"
              onClick={() =>
                onPurchase({
                  name: 'Cromazoografías Vol. 1',
                  price: '$85.000',
                  productId: 3431,
                })
              }
            >
              <span>COMPRAR VOL.1 — $85.000</span>
            </button>
            <button
              className="btn btn--buy-mini"
              onClick={() =>
                onPurchase({
                  name: 'Cromazoografías Vol. 2',
                  price: '$85.000',
                  productId: 3432,
                })
              }
            >
              <span>COMPRAR VOL.2 — $85.000</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
