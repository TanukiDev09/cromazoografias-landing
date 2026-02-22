'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './IllustrationGrid.scss';

export default function IllustrationGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const images = [
    { name: 'CANGREJO FANTASMA', src: '/cangrejo-fantasma.jpg' },
    { name: 'SERPIENTE DEL MAÍZ', src: '/serpiente-maiz.jpg' },
    { name: 'CACATÚA GALAH', src: '/cacatua-galah.jpg' },
    { name: 'MORFO AZUL', src: '/morfo-azul.jpg' },
    { name: 'NUDIBRANQUIO BULLOCKII', src: '/nudibranquio-bullockii.jpg' },
    { name: 'PEZ LIMÓN', src: '/pez-limon.jpg' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="gallery" id="galeria" ref={sectionRef}>
      <div className="gallery__grid">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="gallery__item"
            style={{
              transitionDelay: isVisible ? `${idx * 100}ms` : '0ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <div className="gallery__image-container">
              <Image
                src={img.src}
                alt={img.name}
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 480px) 50vw, (max-width: 1024px) 33vw, 33vw"
              />
            </div>
            <span className="gallery__name">{img.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
