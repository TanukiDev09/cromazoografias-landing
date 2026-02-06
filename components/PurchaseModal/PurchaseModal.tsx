'use client';
import React, { useState } from 'react';
import { createOrderAction } from '../../app/actions';

interface Product {
  name: string;
  price: string;
  productId: number;
}

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function PurchaseModal({ isOpen, onClose, product }: PurchaseModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!product) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);

      // Prepare simple input for the Server Action
      const orderInput = {
        fullName: formData.get('fullName') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        address: formData.get('address') as string,
        city: formData.get('city') as string,
        state: formData.get('state') as string,
        postcode: formData.get('postcode') as string,
        productId: product.productId,
      };

      // Create order in WooCommerce via Server Action (which now validates)
      const order = await createOrderAction(orderInput);

      // If order was created successfully, redirect to payment page
      if (order.id) {
        // MercadoPago plugin should provide a payment URL
        const paymentUrl =
          order.payment_url || order.meta_data?.find((meta) => meta.key === '_payment_url')?.value;

        if (paymentUrl) {
          window.location.href = paymentUrl;
        } else {
          alert(
            `¡Pedido creado exitosamente! ID: ${order.id}\n\nPor favor contacta con nosotros para completar el pago.`
          );
          onClose();
        }
      }
    } catch (err) {
      console.error('Error creating order:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'No se pudo crear el pedido. Por favor intenta nuevamente.'
      );
      setLoading(false);
    }
  };

  return (
    <div
      className={`modal ${isOpen ? 'modal--active' : ''}`}
      onClick={(e) => (e.target as HTMLElement).classList.contains('modal') && onClose()}
    >
      <div className="modal__content">
        <button className="modal__close" onClick={onClose} disabled={loading}>
          ×
        </button>

        <div className="modal__header">
          <div className="modal__product">{product.name}</div>
          <div className="modal__price">{product.price}</div>
        </div>

        {error && (
          <div
            style={{
              padding: '1rem',
              marginBottom: '1rem',
              backgroundColor: '#f8d7da',
              color: '#721c24',
              borderRadius: '4px',
              border: '1px solid #f5c6cb',
            }}
          >
            {error}
          </div>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <div className="form__field">
            <label className="form__label">Nombre completo *</label>
            <input
              type="text"
              name="fullName"
              className="form__input"
              required
              disabled={loading}
            />
          </div>

          <div className="form__field">
            <label className="form__label">Email *</label>
            <input type="email" name="email" className="form__input" required disabled={loading} />
          </div>

          <div className="form__field">
            <label className="form__label">Teléfono *</label>
            <input type="tel" name="phone" className="form__input" required disabled={loading} />
          </div>

          <div className="form__field">
            <label className="form__label">Dirección completa *</label>
            <input type="text" name="address" className="form__input" required disabled={loading} />
          </div>

          <div className="form__row">
            <div className="form__field">
              <label className="form__label">Ciudad *</label>
              <input type="text" name="city" className="form__input" required disabled={loading} />
            </div>
            <div className="form__field">
              <label className="form__label">Departamento *</label>
              <input type="text" name="state" className="form__input" required disabled={loading} />
            </div>
          </div>

          <div className="form__field">
            <label className="form__label">Código Postal *</label>
            <input
              type="text"
              name="postcode"
              className="form__input"
              required
              disabled={loading}
              placeholder="e.g. 110111"
            />
          </div>

          <div className="form__note">Entrega a compradores: 1-7 de marzo.</div>

          <button type="submit" className="btn btn--submit" disabled={loading}>
            {loading ? 'Procesando...' : 'Continuar al pago'}
          </button>
        </form>
      </div>
    </div>
  );
}
