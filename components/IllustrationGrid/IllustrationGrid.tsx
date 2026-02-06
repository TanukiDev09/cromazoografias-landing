import React from 'react';
import Image from 'next/image';

export default function IllustrationGrid() {
  const illustrations = [
    {
      name: 'CANGREJO FANTASMA',
      src: 'https://placehold.jp/24/000000/ffffff/400x400.png?text=CANGREJO%0AFANTASMA',
      color: 'yellow',
    },
    {
      name: 'VÍBORA DE PESTAÑAS',
      src: 'https://placehold.jp/24/000000/ffffff/400x400.png?text=VÍBORA%0ADEP_ESTAÑAS',
      color: 'orange',
    },
    {
      name: 'MANTIS ORQUÍDEA',
      src: 'https://placehold.jp/24/000000/ffffff/400x400.png?text=MANTIS%0AORQUÍDEA',
      color: 'yellow',
    },
    {
      name: 'CARDENAL NORTEÑO',
      src: 'https://placehold.jp/24/000000/ffffff/400x400.png?text=CARDENAL%0ANORTEÑO',
      color: 'red',
    },
    {
      name: 'ERIZO VERDE',
      src: 'https://placehold.jp/24/000000/ffffff/400x400.png?text=ERIZO%0AVERDE',
      color: 'green',
    },
    {
      name: 'GARCETA AZUL',
      src: 'https://placehold.jp/24/000000/ffffff/400x400.png?text=GARCETA%0AAZUL',
      color: 'red',
    },
  ];

  return (
    <section className="section section--illustrations">
      <div className="illustrations">
        <div className="illustrations__header">
          <h2 className="section__title">
            Técnica de trama
            <br />
            sobre negro
          </h2>
          <p className="section__subtitle">
            192 ilustraciones originales en halftone. Cada animal capturado en su esencia cromática.
          </p>
        </div>

        <div className="illustrations__grid">
          {illustrations.map((illus, idx) => (
            <div key={idx} className={`illustrations__frame illustrations__frame--${illus.color}`}>
              <div className="illustrations__image-wrapper">
                <Image
                  src={illus.src}
                  alt={illus.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="illustrations__image"
                />
              </div>
              <div className="illustrations__label">
                <span className="illustrations__name">{illus.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="illustrations__cta">
          <p className="illustrations__cta-text">
            Estas son solo 6 de las 192 ilustraciones que encontrarás en la colección completa.
          </p>
          <a href="#productos" className="btn btn--secondary">
            <span>Ver volúmenes disponibles</span>
          </a>
        </div>
      </div>
    </section>
  );
}
