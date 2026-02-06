import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo-box">
              <Image
                src="/cromazoografias-svg.svg"
                alt="Cromazoografías"
                width={200}
                height={40}
                className="footer__logo"
              />
            </div>
            <p className="footer__tagline">
              Una obra editorial que explora la taxonomía emocional de los animales a través del
              espectro cromático.
            </p>
          </div>

          <div className="footer__nav">
            <div className="footer__column">
              <h4 className="footer__title">Colección</h4>
              <ul className="footer__list">
                <li>
                  <a href="#productos" className="footer__link">
                    Volumen 1
                  </a>
                </li>
                <li>
                  <a href="#productos" className="footer__link">
                    Volumen 2
                  </a>
                </li>
                <li>
                  <a href="#productos" className="footer__link">
                    Set Completo
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <h4 className="footer__title">Compañía</h4>
              <ul className="footer__list">
                <li>
                  <a
                    href="https://tanukilibros.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    Tanuki Libros
                  </a>
                </li>
                <li>
                  <a href="#autor" className="footer__link">
                    Sobre el Autor
                  </a>
                </li>
                <li>
                  <a href="#faq" className="footer__link">
                    Ayuda / FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <h4 className="footer__title">Contacto</h4>
              <ul className="footer__list">
                <li>
                  <a href="mailto:hola@tanukilibros.com" className="footer__link">
                    hola@tanukilibros.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/tanukilibros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/573000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Cromazoografías. Todos los derechos reservados.
          </p>
          <div className="footer__credits">
            <span>Juan Dávila × Tanuki Libros</span>
            <span className="footer__divider">|</span>
            <span>Diseño Brutalista Editorial</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
