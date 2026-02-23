'use client';
import React from 'react';
import Image from 'next/image';

export default function IllustrationGrid() {
  const illustrations = [
    { name: 'CANGREJO FANTASMA', src: '/cangrejo-fantasma.jpg' },
    { name: 'SERPIENTE DEL MAÍZ', src: '/serpiente-maiz.jpg' },
    { name: 'MANZANA DE MAR', src: '/manzana-mar.jpg' },
    { name: 'CACATÚA GALAH', src: '/cacatua-galah.jpg' },
    { name: 'NUDIBRANQUIO BULLOCKII', src: '/nudibranquio-bullockii.jpg' },
    { name: 'MORFO AZUL', src: '/morfo-azul.jpg' },
  ];

  return (
    <section className="gallery-section" id="galeria">
      <div className="gallery">
        <div className="gallery__grid">
          {illustrations.map((illus, idx) => (
            <div key={idx} className="gallery__item">
              <div className="gallery__image-wrapper">
                <Image
                  src={illus.src}
                  alt={illus.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="gallery__image"
                />
              </div>
              <span className="gallery__name">{illus.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
