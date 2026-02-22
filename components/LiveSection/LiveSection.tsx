import React from 'react';
import './LiveSection.scss';

export default function LiveSection() {
  return (
    <section className="live">
      <div className="live__band"></div>
      <div className="live__container">
        <h2 className="live__title">Juan Dávila en vivo.</h2>
        <div className="live__info">
          <p className="live__date">Martes 25 de febrero</p>
          <p className="live__time">7:00 pm</p>
          <a href="https://instagram.com/filozoofi.a" target="_blank" rel="noopener noreferrer" className="live__handle">
            @filozoofi.a
          </a>
        </div>
        <div className="live__description">
          <p>Habla sobre Cromazoografías los animales y el proceso.</p>
        </div>
        <a
          href="https://instagram.com/filozoofi.a"
          target="_blank"
          rel="noopener noreferrer"
          className="live__cta"
        >
          Ir a @filozoofi.a
        </a>
      </div>
      <div className="live__band"></div>
    </section>
  );
}
