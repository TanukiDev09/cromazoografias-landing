'use client';
import React from 'react';
import './ProcessSection.scss';

export default function ProcessSection() {
  return (
    <section className="process-section" id="proceso">
      <div className="process-section__container">
        <div className="process-section__header">
          <div className="process-section__log-badge">PROCESS LOG // 02-2026</div>
          <h2 className="process-section__title">De la mancha al espectro</h2>
          <p className="process-section__subtitle">
            Tres años capturando la esencia animal a través del halftone y la palabra.
          </p>
        </div>

        <div className="process-section__video-container">
          <div className="process-section__video-frame">
            <video
              src="/video-cangrejo.mp4"
              className="process-section__video"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="process-section__video-overlay">
              <div className="process-section__corner process-section__corner--tl"></div>
              <div className="process-section__corner process-section__corner--tr"></div>
              <div className="process-section__corner process-section__corner--bl"></div>
              <div className="process-section__corner process-section__corner--br"></div>
              <div className="process-section__rec-indicator">
                <span className="process-section__rec-dot"></span>
                REC
              </div>
            </div>
          </div>
          <div className="process-section__caption">
            <span className="process-section__step">REF: CANGREJO FANTASMA</span>
            <span className="process-section__detail">Técnica: Halftone sobre fondo negro</span>
          </div>
        </div>
      </div>
    </section>
  );
}
