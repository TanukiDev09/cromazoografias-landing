import React from 'react';
import Image from 'next/image';
import './TechniqueSection.scss';

export default function TechniqueSection() {
  return (
    <section className="technique">
      <div className="technique__container">
        <div className="technique__content">
          <h2 className="technique__title">Trama sobre negro.</h2>
          <div className="technique__text">
            <p>
              Cada ilustración está construida en halftone: puntos de distintos tamaños que, vistos de cerca, revelan la
              imagen fragmentada.
            </p>
            <p>
              Las imágenes no aspiran a ser ventanas. Son superficies que te recuerdan el acto de mirar.
            </p>
          </div>
        </div>

        <div className="technique__visuals">
          <div className="technique__crop-wrapper">
            <Image
              src="/cangrejo-fantasma.jpg"
              alt="Detalle trama 1"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center', filter: 'contrast(1.2) grayscale(1)' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="technique__crop-wrapper">
            <Image
              src="/serpiente-maiz.jpg"
              alt="Detalle trama 2"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center', filter: 'contrast(1.2) grayscale(1)' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
