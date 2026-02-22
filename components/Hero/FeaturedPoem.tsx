'use client';
import React from 'react';
import Image from 'next/image';
import './FeaturedPoem.scss';

export default function FeaturedPoem() {
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  if (hasError) return null;

  return (
    <section className={`featured-poem ${isLoading ? 'featured-poem--loading' : ''}`}>
      <div className="featured-poem__container">
        <div className="featured-poem__main-concept">
          <div className="featured-poem__illus-box">
            <Image
              src="/cangrejo-fantasma.jpg"
              alt="Cromazoografía de Cangrejo Fantasma"
              width={800}
              height={800}
              className="featured-poem__image"
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              onLoad={() => setIsLoading(false)}
              onError={() => setHasError(true)}
              priority
            />
            {isLoading && <div className="featured-poem__skeleton"></div>}
          </div>
          <div className="featured-poem__poem-box">
            <p className="featured-poem__poem-text">
              Tocar con la carne viva,
              <br />
              dejarse afectar,
              <br />
              refugiarse ante el miedo
              <br />y levantar otra coraza.
            </p>
            <div className="featured-poem__poem-meta">
              <span className="featured-poem__poem-animal">CANGREJO FANTASMA</span>
              <span className="featured-poem__poem-author">Juan Dávila</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
