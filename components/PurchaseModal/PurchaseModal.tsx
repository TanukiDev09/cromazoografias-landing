'use client';

interface Product {
  name: string;
  price: string;
}

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function PurchaseModal({ isOpen, onClose, product }: PurchaseModalProps) {
  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Redirigiendo a MercadoPago...');
    onClose();
  };

  return (
    <div
      className={`modal ${isOpen ? 'modal--active' : ''}`}
      onClick={(e) => (e.target as HTMLElement).classList.contains('modal') && onClose()}
    >
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          ×
        </button>

        <div className="modal__header">
          <div className="modal__product">{product.name}</div>
          <div className="modal__price">{product.price}</div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form__field">
            <label className="form__label">Nombre completo *</label>
            <input type="text" className="form__input" required />
          </div>

          <div className="form__field">
            <label className="form__label">Email *</label>
            <input type="email" className="form__input" required />
          </div>

          <div className="form__field">
            <label className="form__label">Teléfono *</label>
            <input type="tel" className="form__input" required />
          </div>

          <div className="form__field">
            <label className="form__label">Dirección completa *</label>
            <input type="text" className="form__input" required />
          </div>

          <div className="form__row">
            <div className="form__field">
              <label className="form__label">Ciudad *</label>
              <input type="text" className="form__input" required />
            </div>
            <div className="form__field">
              <label className="form__label">Departamento *</label>
              <input type="text" className="form__input" required />
            </div>
          </div>

          <div className="form__note">
            Preventa: 8-20 febrero (sin ver portada).
            <br />
            Cover reveal: 21 febrero.
            <br />
            Entrega compradores preventa: 22-23 febrero.
          </div>

          <button type="submit" className="btn btn--submit">
            Continuar al pago
          </button>
        </form>
      </div>
    </div>
  );
}
