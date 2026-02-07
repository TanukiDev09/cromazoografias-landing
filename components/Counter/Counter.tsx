import React from 'react';
import './Counter.scss';

interface CounterProps {
  value: number;
}

const Digit = ({ value }: { value: string }) => {
  const parsedValue = parseInt(value, 10);

  return (
    <div className="counter-digit">
      <div
        className="counter-digit__track"
        style={{ transform: `translateY(-${parsedValue * 10}%)` }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <span key={num} className="counter-digit__num">
            {num}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Counter({ value }: CounterProps) {
  // Pad with zeros to 3 digits (e.g., 42 -> 042)
  const digits = value.toString().padStart(3, '0').split('');

  return (
    <div className="counter">
      {digits.map((digit, index) => (
        <Digit key={index} value={digit} />
      ))}
    </div>
  );
}
