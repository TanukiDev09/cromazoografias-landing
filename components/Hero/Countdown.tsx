'use client';
import React, { useState, useEffect } from 'react';
import './Countdown.scss';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    // If current time is after target date, we are either LIVE or POST-EVENT
    // Let's assume the live lasts 1 hour (3600000ms)
    const LIVE_DURATION = 3600000;
    const now = +new Date();
    const target = +new Date(targetDate);
    const isPostEvent = now > target + LIVE_DURATION;

    if (isPostEvent) {
      return (
        <a
          href="https://www.instagram.com/tanuki_libros/"
          target="_blank"
          rel="noopener noreferrer"
          className="countdown countdown--finished"
        >
          <span className="countdown__archived">Mira la conversación completa →</span>
        </a>
      );
    }

    return (
      <a
        href="https://www.instagram.com/tanuki_libros/"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown countdown--live"
      >
        <div className="countdown__live-indicator">
          <span className="countdown__live-dot"></span>
          <span className="countdown__live-label">🔴 EN VIVO AHORA</span>
        </div>
      </a>
    );
  }

  return (
    <div className="countdown">
      <div className="countdown__item">
        <span className="countdown__number">{timeLeft.days}</span>
        <span className="countdown__label">Días</span>
      </div>
      <div className="countdown__divider">:</div>
      <div className="countdown__item">
        <span className="countdown__number">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span className="countdown__label">Horas</span>
      </div>
      <div className="countdown__divider">:</div>
      <div className="countdown__item">
        <span className="countdown__number">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span className="countdown__label">Mins</span>
      </div>
      <div className="countdown__divider">:</div>
      <div className="countdown__item">
        <span className="countdown__number">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span className="countdown__label">Segs</span>
      </div>
    </div>
  );
}
