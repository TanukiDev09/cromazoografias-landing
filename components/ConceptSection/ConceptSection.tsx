'use client';
import React from 'react';
import './ConceptSection.scss';

export default function ConceptSection() {
  return (
    <section className="concept-section" id="concepto">
      <div className="concept">
        <p className="concept__intro">
          ¿Qué tienen en común
          <br />
          un gecko de Namib y un
          <br />
          cerdo de arena de mar?
        </p>

        <div className="concept__focus-container">
          <h2 className="concept__focus">
            El mismo rosa.
            <br />
            Solo eso.
          </h2>
          <div className="concept__line"></div>
        </div>

        <div className="concept__body">
          <p>
            Cromazoografías ordena 192 animales por color, no por familia ni especie. Un insecto
            microscópico comparte página con un mamífero oceánico. La única lógica es cromática.
          </p>
          <p>
            Cuando el orden deja de ser científico, los animales dejan de ser objetos de estudio. Se
            vuelven espejos.
          </p>
        </div>

        <div className="concept__quote">
          <p>
            El día que fuiste
            <br />
            cangrejo. El día que
            <br />
            fuiste víbora.
            <br />
            El día orangután.
          </p>
        </div>

        <p className="concept__footer">Cada animal es un día diferente de ser humano.</p>
      </div>
    </section>
  );
}
