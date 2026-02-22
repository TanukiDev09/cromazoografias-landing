import React, { useEffect, useRef, useState } from 'react';
import './ConceptSection.scss';

export default function ConceptSection() {
  const [isRosaVisible, setIsRosaVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRosaVisible(true);
          }, 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="concept" ref={sectionRef}>
      <div className="concept__container">
        <h2 className="concept__intro">
          ¿Qué tienen en común
          <br />
          un gecko de Namib y un
          <br />
          cerdo de arena de mar?
        </h2>

        <div className={`concept__focus ${isRosaVisible ? 'concept__focus--visible' : ''}`}>
          <p>El mismo rosa.</p>
          <p>Solo eso.</p>
        </div>

        <div className="concept__divider"></div>

        <div className="concept__body">
          <p>
            Cromazoografías ordena 192 animales por color, no por familia ni especie. Un insecto microscópico comparte
            página con un mamífero oceánico. La única lógica es cromática.
          </p>
          <p>
            Cuando el orden deja de ser científico, los animales dejan de ser objetos de estudio. Se vuelven espejos.
          </p>
        </div>

        <div className="concept__poetic">
          <p>El día que fuiste</p>
          <p>cangrejo. El día que</p>
          <p>fuiste víbora.</p>
          <p>El día orangután.</p>
        </div>

        <p className="concept__footer">Cada animal es un día diferente de ser humano.</p>
      </div>
    </section>
  );
}
