import Image from 'next/image';

export default function Author() {
  return (
    <section className="section section--author" id="autor">
      <div className="author">
        <div className="author__header">
          <h2 className="section__title">El autor</h2>
          <p className="section__subtitle">
            Juan Dávila es poeta, ilustrador y diseñador editorial. Cromazoografías es su primera obra publicada.
          </p>
        </div>

        <div className="author__content">
          <div className="author__bio-box">
            <h3 className="author__name">Juan Dávila</h3>
            <p className="author__handle">@juandavila</p>
            <p className="author__bio">
              Poeta colombiano radicado en Bogotá. Su trabajo explora la intersección entre lo humano y lo animal,
              usando el color como taxonomía emocional. Cromazoografías es el resultado de 3 años de trabajo
              meticuloso entre la palabra y la imagen.
            </p>
            <div className="author__credentials">
              <div className="author__credential">
                <span className="author__credential-label">Publicado por</span>
                <span className="author__credential-value">Tanuki Libros</span>
              </div>
              <div className="author__credential">
                <span className="author__credential-label">Año</span>
                <span className="author__credential-value">2024</span>
              </div>
              <div className="author__credential">
                <span className="author__credential-label">Edición</span>
                <span className="author__credential-value">Primera</span>
              </div>
            </div>
          </div>

          <div className="author__image-box">
            <Image
              src="/foto-autor.png"
              alt="Juan Dávila — Autor de Cromazoografías"
              width={600}
              height={800}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              className="author__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
