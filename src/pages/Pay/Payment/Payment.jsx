import React, { useState } from 'react';
import './Payment.css';

const Payment = ({ onNext, onBack }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className="page-wrapper">
      <div className="payment-container">
        <div className="back-link" onClick={onBack}>&lt; Повернутись</div>
        <h1 className="page-title">Оплата товару</h1>

        <div className="payment-content">
          <div className="payment-left">
            <div className="payment-method-card">
              <h3>Спосіб оплати</h3>
              <p>Оберіть спосіб оплати</p>

              <div className="methods-grid">
                <div
                  className={`method-item ${selectedMethod === 'gpay' ? 'selected' : ''}`}
                  onClick={() => setSelectedMethod('gpay')}
                >
                  <img src="/gpay.svg" />
                </div>
                <div
                  className={`method-item ${selectedMethod === 'applepay' ? 'selected' : ''}`}
                  onClick={() => setSelectedMethod('applepay')}
                >
                  <img src="/applepay.svg" />
                </div>
                <div
                  className={`method-item ${selectedMethod === 'visamaestro' ? 'selected' : ''}`}
                  onClick={() => setSelectedMethod('visamaestro')}
                >
                  <img src="/visamaestro.svg" />
                </div>
              </div>
            </div>

            <div className="payment-footer">
              <button className="btn-cancel" onClick={onBack}>Скасувати</button>
              <button
                className="btn-pay"
                disabled={!selectedMethod}
                onClick={() => selectedMethod && onNext()}
              >
                Оплатити
              </button>
            </div>
          </div>

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