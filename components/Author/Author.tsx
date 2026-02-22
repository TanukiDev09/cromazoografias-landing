import React from 'react';
import Image from 'next/image';
import './Author.scss';

export default function Author() {
  return (
    <section className="author" id="autor">
      <div className="author__container">
        <div className="author__visual">
          <div className="author__image-wrapper">
            <Image
              src="/foto-autor.png"
              alt="Juan Dávila"
              fill
              style={{ objectFit: 'cover', filter: 'contrast(1.5) grayscale(1) brightness(0.6)' }}
              className="author__img"
            />
          </div>
        </div>

        <div className="author__content">
          <header className="author__header">
            <h2 className="author__name">Juan Dávila</h2>
            <p className="author__handle">@filozoofi.a</p>
          </header>

          <div className="author__bio">
            <p>
              Juan Dávila trabaja en la intersección entre naturaleza, filosofía y arte visual. Desde 2015 ha construido
              un lenguaje propio centrado en fauna — cuervos ibéricos, aves alpinas, mariposas andaluzas, invertebrados —
              con ilustraciones que equilibran precisión y expresividad.
            </p>
            <p className="author__quote">Su obra no describe los animales. Los habita.</p>
            <p className="author__footnote">Cromazoografías es su primera publicación editorial.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
