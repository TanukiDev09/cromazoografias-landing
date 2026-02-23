'use client';
import React from 'react';
import Image from 'next/image';
import './Author.scss';

export default function Author() {
  return (
    <section className="author-section" id="autor">
      <div className="author">
        <div className="author__image-box">
          <Image
            src="/foto-autor.png"
            alt="Juan Dávila — Autor de Cromazoografías"
            width={600}
            height={800}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            className="author__img"
          />
        </div>

        <div className="author__info">
          <h2 className="author__name">Juan Dávila</h2>
          <p className="author__handle">@filozoofi.a</p>

          <div className="author__bio">
            <p>
              Juan Dávila trabaja en la intersección entre naturaleza, filosofía y arte visual.
              Desde 2015 ha construido un lenguaje propio centrado en fauna — cuervos ibéricos,
              aves alpinas, mariposas andaluzas, invertebrados — con ilustraciones que equilibran
              precisión y expresividad.
            </p>
          </div>

          <p className="author__focus">Su obra no describe los animales. Los habita.</p>

          <p className="author__footer">Cromazoografías es su primera publicación editorial.</p>
        </div>
      </div>
    </section>
  );
}
