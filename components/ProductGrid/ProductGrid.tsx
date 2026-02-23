'use client';
import React from 'react';
import Image from 'next/image';
import './ProductGrid.scss';

interface Volume {
  id: number;
  num: string;
  name: string;
  palette: string;
  colors: string;
  price: string;
  cover: string;
  wcProductId: number;
}

const volumes: Volume[] = [
  {
    id: 1,
    num: 'Vol. 1',
    name: 'Cromazoografías Vol. 1',
    palette: 'Cálido',
    colors: 'Amarillo · Naranja · Rojo · Rosa',
    price: '$85.000',
    cover: '/9786289625134.jpg',
    wcProductId: 3431,
  },
  {
    id: 2,
    num: 'Vol. 2',
    name: 'Cromazoografías Vol. 2',
    palette: 'Frío',
    colors: 'Púrpura · Azul · Verde · Blanco',
    price: '$85.000',
    cover: '/9786289625127.jpg',
    wcProductId: 3432,
  },
];

interface Product {
  name: string;
  price: string;
  productId: number;
}

interface ProductGridProps {
  onPurchase: (product: Product) => void;
}

export default function ProductGrid({ onPurchase }: ProductGridProps) {
  return (
    <section className="product-section" id="productos">
      <div className="product-grid-container">
        <h2 className="product-section__title">Elige tu volumen.</h2>

        <div className="product-grid">
          {volumes.map((vol) => (
            <div key={vol.id} className="product-card">
              <div className="product-card__image-box">
                <Image
                  src={vol.cover}
                  alt={vol.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="product-card__img"
                />
              </div>
              <div className="product-card__info">
                <h3 className="product-card__num">{vol.num}</h3>
                <p className="product-card__palette">{vol.palette}</p>
                <p className="product-card__colors">{vol.colors}</p>
                <div className="product-card__price">{vol.price}</div>
                <button
                  className="btn btn--outline"
                  onClick={() =>
                    onPurchase({ name: vol.name, price: vol.price, productId: vol.wcProductId })
                  }
                >
                  <span>Comprar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="product-section__shipping">
          Bogotá $10.000 · Resto de Colombia $20.000
        </div>
      </div>
    </section>
  );
}
