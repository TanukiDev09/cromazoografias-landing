import React from 'react';
import Image from 'next/image';
import './ProductGrid.scss';

interface Product {
  name: string;
  price: string;
  productId: number;
}

interface ProductGridProps {
  onPurchase: (product: Product) => void;
}

export default function ProductGrid({ onPurchase }: ProductGridProps) {
  const volumes = [
    {
      id: 3431,
      title: 'Vol. 1',
      subtitle: 'Cálido',
      colors: 'Amarillo, Naranja, Rojo, Rosa',
      price: '$85.000',
      cover: '/9786289625134.jpg',
    },
    {
      id: 3432,
      title: 'Vol. 2',
      subtitle: 'Frío',
      colors: 'Púrpura, Azul, Verde, Blanco',
      price: '$85.000',
      cover: '/9786289625127.jpg',
    },
  ];

  return (
    <section className="product-section" id="productos">
      <div className="product-section__container">
        <h2 className="product-section__heading">Elige tu volumen.</h2>

        <div className="product-section__volumes">
          {volumes.map((vol) => (
            <article key={vol.id} className="product-vol">
              <div className="product-vol__image">
                <Image src={vol.cover} alt={vol.title} fill style={{ objectFit: 'contain' }} sizes="300px" />
              </div>
              <div className="product-vol__info">
                <h3 className="product-vol__title">{vol.title}</h3>
                <p className="product-vol__subtitle">{vol.subtitle}</p>
                <div className="product-vol__colors">
                  {vol.colors.split(', ').map((c, i) => (
                    <span key={i}>{c}</span>
                  ))}
                </div>
                <div className="product-vol__price">{vol.price}</div>
                <button
                  className="product-vol__btn"
                  onClick={() =>
                    onPurchase({ name: `Cromazoografías ${vol.title}`, price: vol.price, productId: vol.id })
                  }
                >
                  Comprar
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="product-set">
          <div className="product-set__content">
            <h3 className="product-set__title">Set completo</h3>
            <p className="product-set__subtitle">Vol. 1 + Vol. 2</p>
            <div className="product-set__price">$160.000</div>
            <button
              className="product-set__btn"
              onClick={() => onPurchase({ name: 'Set Completo (Vol. 1 + Vol. 2)', price: '$160.000', productId: 0 })}
            >
              Comprar el set
            </button>
            <div className="product-set__meta">Bogotá $10.000 · Resto de Colombia $20.000</div>
          </div>
        </div>
      </div>
    </section>
  );
}
