'use client';
import React from 'react';
import Image from 'next/image';
import './TechniqueSection.scss';

export default function TechniqueSection() {
  return (
    <section className="technique-section" id="tecnica">
      <div className="technique">
        <div className="technique__content">
          <h2 className="technique__title">Trama sobre negro.</h2>
          <div className="technique__text">
            <p>
              Cada ilustración está construida en halftone: puntos de distintos tamaños que, vistos
              de cerca, revelan la imagen fragmentada.
            </p>
            <p>
              Las imágenes no aspiran a ser ventanas. Son superficies que te recuerdan el acto de
              mirar.
            </p>
          </div>
        </div>

        <div className="technique__images">
          <div className="technique__image-wrapper">
            <Image
              src="/cangrejo-fantasma.jpg"
              alt="Detalle de trama 1"
              fill
              style={{ objectFit: 'cover' }}
              className="technique__image"
            />
          </div>
          <div className="technique__image-wrapper">
            <Image
              src="/serpiente-maiz.jpg"
              alt="Detalle de trama 2"
              fill
              style={{ objectFit: 'cover' }}
              className="technique__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
