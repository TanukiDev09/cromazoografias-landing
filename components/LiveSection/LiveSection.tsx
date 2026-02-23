'use client';
import React from 'react';
import './LiveSection.scss';

export default function LiveSection() {
  return (
    <section className="live-section" id="live">
      <div className="live-band"></div>
      <div className="live">
        <h2 className="live__title">Juan Dávila en vivo.</h2>
        <div className="live__info">
          <p className="live__date">Martes 25 de febrero</p>
          <p className="live__time">7:00 pm</p>
          <a
            href="https://www.instagram.com/filozoofi.a/"
            target="_blank"
            rel="noopener noreferrer"
            className="live__handle"
          >
            @filozoofi.a
          </a>
        </div>
        <p className="live__description">
          Habla sobre Cromazoografías
          <br />
          los animales y el proceso.
        </p>
        <a
          href="https://www.instagram.com/filozoofi.a/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline"
        >
          <span>Ir a @filozoofi.a</span>
        </a>
      </div>
      <div className="live-band"></div>
    </section>
  );
}
