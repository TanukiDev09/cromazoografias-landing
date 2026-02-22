'use client';
import React from 'react';
import './Counter.scss';

interface CounterProps {
  value: number;
  variant?: 'default' | 'mini' | 'hero-mini';
}

const Digit = ({ value }: { value: string }) => {
  const num = parseInt(value, 10);

  return (
    <div className="counter-digit">
      <div
        className="counter-digit__track"
        style={{ transform: `translateY(-${num * 10}%)` }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="counter-digit__num">{n}</span>
        ))}
      </div>
    </div>
  );
};

export default function Counter({ value, variant = 'default' }: CounterProps) {
  const digits = value.toString().padStart(3, '0').split('');
  const isMini = variant === 'mini';
  const isHeroMini = variant === 'hero-mini';

  return (
    <div className={`counter-v2 ${isMini ? 'counter-v2--mini' : ''} ${isHeroMini ? 'counter-v2--hero-mini' : ''}`}>
      <div className="counter-v2__wrapper">
        {isHeroMini && <div className="counter-v2__badge counter-v2__badge--top">PRIMERA EDICIÓN · EJEMPLARES VENDIDOS</div>}

        <div className="counter-v2__ticker">
          {(!isMini && !isHeroMini) && <div className="counter-v2__badge">EDICIÓN ACTUAL</div>}
          <div className="counter-v2__digits">
            {digits.map((d, i) => (
              <Digit key={i} value={d} />
            ))}
          </div>
        </div>
      </div>

      {!isMini && !isHeroMini && (
        <div className="counter-v2__footer">
          <span className="counter-v2__label">PRIMERA EDICIÓN · EJEMPLARES VENDIDOS</span>
          <span className="counter-v2__sublabel">Actualización en tiempo real</span>
        </div>
      )}
    </div>
  );
}
