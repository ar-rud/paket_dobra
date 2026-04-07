import React from "react";
import "./Checkout.css";

const Checkout = ({ onNext, onBack }) => {
  return (
    <div className="page-wrapper">
      <div className="checkout-container">

        <div className="back-link" onClick={onBack}>
          &lt; Повернутись
        </div>

        <h1 className="page-title">Оформлення замовлення</h1>

        <div className="checkout-content">

          {/* LEFT */}
          <div className="checkout-left">

            {/* DELIVERY */}
            <div className="delivery-card">
              <h3>Служба доставки</h3>
              <p>Оберіть спосіб отримання замовлення</p>

              <div className="delivery-option">
                <div>
                  <strong>Укрпошта</strong> Безкоштовно
                  <p>Доставка протягом 2-5 днів</p>
                </div>
              </div>

              <div className="delivery-option">
                <div>
                  <strong>Відділення Нова пошта</strong> Від 60 грн
                  <p>Доставка протягом 1-3 днів</p>
                </div>
              </div>

              <div className="delivery-option">
                <div>
                  <strong>Курʼєр Нова пошта</strong> Від 95 грн
                  <p>Доставка протягом 1-3 днів</p>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="contact-card">
              <h3>Контактні дані</h3>
              <p>Заповніть контактні дані отримувача</p>

              <div className="form-row">
                <input placeholder="Вкажіть імʼя" />
                <input placeholder="Вкажіть прізвище" />
              </div>

              <div className="form-group">
                <input placeholder="Вкажіть по-батькові" />
              </div>

              <div className="form-group">
                <input placeholder="+380 XX XXX XX XX" />
              </div>

              <div className="form-group">
                <input placeholder="Email address" />
              </div>

              <div className="form-row">
                <input placeholder="Область" />
                <input placeholder="Місто" />
              </div>

              <div className="form-group">
                <input placeholder="Відділення" />
              </div>
            </div>

            {/* FOOTER */}
            <div className="checkout-footer">
              <button className="btn-cancel" onClick={onBack}>
                Скасувати
              </button>
              <button className="btn-next" onClick={onNext}>
                Перейти до оплати
              </button>
            </div>

          </div>

          {/* RIGHT */}
          <div className="checkout-right">
            {[460, 700].map((price, idx) => (
              <div key={idx} className="product-summary-card">
                <span className="badge">100% донату</span>
                <h4>Рюкзак для походів NEO tools 30L</h4>
                <p className="price">{price} грн</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;