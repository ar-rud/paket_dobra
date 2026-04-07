import React from 'react';
import './Payment.css';

const Payment = ({ onNext, onBack }) => {
  return (

<div className="page-wrapper">

  <div className="payment-container">
    <div className="back-link" onClick={onBack}>&lt; Повернутись</div>
    <h1 className="page-title">Оплата товару</h1>

    <div className="payment-content">
      {/* ЛІВА КОЛОНКА */}
      <div className="payment-left">
        <div className="payment-method-card">
          <h3>Спосіб оплати</h3>
          <p>Оберіть спосіб оплати</p>
          
          <div className="methods-grid">
            <div className="method-item"><img src="./public/gpay.svg"/></div>
            <div className="method-item"><img src="./public/applepay.svg"/></div>
            <div className="method-item"><img src="./public/visamaestro.svg"/></div>
          </div>
        </div>

        <div className="payment-footer">
          <button className="btn-cancel" onClick={onBack}>Скасувати</button>
          <button className="btn-pay">Оплатити</button>
        </div>
      </div>

      {/* ПРАВА КОЛОНКА (Товари) */}
      <div className="payment-right">
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

export default Payment;