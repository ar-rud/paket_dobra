import React, { useState } from 'react'
import './Payment.css'

import { useNavigate } from 'react-router'

import gpay from './img/gpay.svg'
import applepay from './img/applepay.svg'
import visamaestro from './img/visamaestro.svg'

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="page-wrapper">
      <div className="payment-container">
        {/* <div className="back-link" onClick={onBack}>&lt; Повернутись</div> */}
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
                  <img src={gpay} />
                </div>
                <div
                  className={`method-item ${selectedMethod === 'applepay' ? 'selected' : ''}`}
                  onClick={() => setSelectedMethod('applepay')}
                >
                  <img src={applepay} />
                </div>
                <div
                  className={`method-item ${selectedMethod === 'visamaestro' ? 'selected' : ''}`}
                  onClick={() => setSelectedMethod('visamaestro')}
                >
                  <img src={visamaestro} />
                </div>
              </div>
            </div>

            <div className="payment-footer">
              <button className="btn-cancel" onClick={() => navigate('/checkout')}>
                Скасувати
              </button>
              <button
                className="btn-pay"
                disabled={!selectedMethod}
                onClick={() => navigate('/card')}
              >
                Оплатити
              </button>
            </div>
          </div>

          <div className="payment-right">
            {[500, 700].map((price, idx) => (
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
  )
}

export default Payment
