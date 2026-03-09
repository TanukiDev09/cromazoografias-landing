'use client';
import React from 'react';
import Image from 'next/image';
import './IllustrationGrid.scss';

export default function IllustrationGrid() {
  const illustrations = [
    { name: 'CANGREJO FANTASMA', src: '/cangrejo-fantasma.jpg', variant: 'regular' },
    { name: 'SERPIENTE DEL MAÍZ', src: '/serpiente-maiz.jpg', variant: 'tall' },
    { name: 'MANZANA DE MAR', src: '/manzana-mar.jpg', variant: 'regular' },
    { name: 'CACATÚA GALAH', src: '/cacatua-galah.jpg', variant: 'regular' },
    { name: 'NUDIBRANQUIO BULLOCKII', src: '/nudibranquio-bullockii.jpg', variant: 'regular' },
    { name: 'MORFO AZUL', src: '/morfo-azul.jpg', variant: 'featured' },
    { name: 'ARMIÑO', src: '/armino.jpg', variant: 'regular' },
    { name: 'PEZ LIMÓN', src: '/pez-limon.jpg', variant: 'regular' },
  ];

  return (
    <section className="gallery-section" id="galeria">
      <div className="gallery__container">
        <header className="gallery__header">
          <h2 className="gallery__title">CATÁLOGO SELECCIONADO</h2>
          <p className="gallery__subtitle">COMPENDIO TÉCNICO DE LA OBRA</p>
        </header>

        <div className="gallery__editorial-grid">
          {illustrations.map((illus, idx) => (
            <div key={idx} className={`gallery__item gallery__item--${illus.variant}`}>
              <div className="gallery__card">
                <div className="gallery__image-wrapper">
                  <Image
                    src={illus.src}
                    alt={illus.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="gallery__image"
                  />
                  <div className="gallery__overlay">
                    <div className="gallery__info">
                      <span className="gallery__spec">ESPECIE</span>
                      <h4 className="gallery__item-name">{illus.name}</h4>
                      <span className="gallery__artist">ARTISTA: JUAN DÁVILA</span>
                    </div>
                  </div>
                </div>
                <div className="gallery__footer">
                  <span className="gallery__index">[{String(idx + 1).padStart(3, '0')}]</span>
                  <span className="gallery__caption">{illus.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
