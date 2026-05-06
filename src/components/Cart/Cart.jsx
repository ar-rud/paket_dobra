import { useState } from "react";
import "./Cart.css";

const initialItems = [
  {
    id: 1,
    name: "Рюкзак для походів NEO tools 30L",
    price: 450,
    donation: 10,
    note: "*При оформленні цього товару вам буде потрібно обрати фонд на який піде донат.",
    image: null, // замінити: import img from "../../assets/images/backpack.png"
  },
  {
    id: 2,
    name: "Бездротова протативна Bluetooth колонка",
    price: 450,
    donation: 10,
    note: null,
    image: null, // замінити: import img from "../../assets/images/speaker.png"
  },
];

export default function Cart({ onClose, onCheckout }) {
  const [items, setItems] = useState(initialItems);
  const [ordered, setOrdered] = useState(false);

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const total = items.reduce((sum, i) => sum + i.price, 0);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (ordered) {
    return (
      <div className="cart-overlay" onClick={handleOverlay}>
        <div className="cart-modal">
          <button className="cart-close" onClick={onClose}>✕</button>
          <div className="cart-success">
            <div className="cart-success__icon">✓</div>
            <p className="cart-success__title">Замовлення прийнято!</p>
            <p className="cart-success__sub">Дякуємо за покупку</p>
            <button
              className="cart-back-btn"
              onClick={() => { setOrdered(false); setItems(initialItems); }}
            >
              ← Повернутись
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-overlay" onClick={handleOverlay}>
      <div className="cart-modal">

        <div className="cart-modal__inner">
          <div className="cart-top">
            <span className="cart-title">У вашій корзині:</span>
            <button className="cart-close" onClick={onClose}>✕</button>
          </div>

          <div className="cart-items">
            {items.length === 0 && <p className="cart-empty">Кошик порожній</p>}
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item__row">
                  <div className="cart-item__thumb">
                    {item.image
                      ? <img src={item.image} alt={item.name} />
                      : <span>📦</span>}
                  </div>
                  <div className="cart-item__info">
                    <p className="cart-item__name">{item.name}</p>
                    <div className="cart-item__pricing">
                      <span className="cart-item__price">{item.price} грн</span>
                      <span className="cart-item__donation">+{item.donation} грн</span>
                    </div>
                  </div>
                  <button className="cart-item__del" onClick={() => removeItem(item.id)} aria-label="Видалити">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                      <path d="M1 4.5h16M6 4.5V3a1 1 0 011-1h4a1 1 0 011 1v1.5M7 9v6M11 9v6M2.5 4.5l1 13a1 1 0 001 .9h9a1 1 0 001-.9l1-13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                {item.note && <p className="cart-item__note">{item.note}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span className="cart-total__label">Сума до сплати:</span>
            <span className="cart-total__value">{total} грн</span>
          </div>
          <button
            className="cart-checkout"
            disabled={items.length === 0}
            onClick={() => { setOrdered(true); onCheckout?.(); }}
          >
            Оформити замовлення
          </button>
        </div>

      </div>
    </div>
  );
}
