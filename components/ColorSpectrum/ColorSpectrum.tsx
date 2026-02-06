export default function ColorSpectrum() {
  const vol1 = [
    { color: 'yellow', animal: 'VÍBORA DE PESTAÑAS' },
    { color: 'orange', animal: 'AVISPA ARAÑA NARANJA' },
    { color: 'red', animal: 'CARDENAL NORTEÑO' },
    { color: 'pink', animal: 'MANTIS ORQUÍDEA' },
  ];

  const vol2 = [
    { color: 'purple', animal: 'ERIZO VERDE DE MAR' },
    { color: 'blue', animal: 'GARCETA AZUL' },
    { color: 'green', animal: 'PEZ LIMÓN' },
    { color: 'gray', animal: 'CEBRA' },
  ];

  return (
    <section className="section">
      <h2 className="section__title">
        Organizados por color,
        <br />
        no por zoología
      </h2>

      <p className="section__intro">
        192 animales en dos volúmenes. Un recorrido cromático completo del amarillo al blanco. No
        por familia. No por hábitat. Por espectro de color.
      </p>

      <div className="strips">
        <div className="strips__vol">
          <div className="strips__header">
            <div className="strips__num">VOLUMEN 1</div>
            <div className="strips__range">Paleta Cálida</div>
          </div>
          {vol1.map((item, idx) => (
            <div key={idx} className={`strips__item strip--${item.color}`}>
              <div className="strips__label">Día</div>
              <div className="strips__animal">{item.animal}</div>
            </div>
          ))}
        </div>

        <div className="strips__vol">
          <div className="strips__header">
            <div className="strips__num">VOLUMEN 2</div>
            <div className="strips__range">Paleta Fría</div>
          </div>
          {vol2.map((item, idx) => (
            <div
              key={idx}
              className={`strips__item strips__item--${item.color} strip--${item.color}`}
            >
              <div className="strips__label">Día</div>
              <div className="strips__animal">{item.animal}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
