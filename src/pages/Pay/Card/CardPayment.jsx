import React, { useState } from 'react'
import '../Payment/Payment.css'
import '../Payment/Payment.jsx'
import './CardPayment.css'
import { useNavigate } from 'react-router'

const CardPayment = ({ onNext, onBack }) => {
  const navigate = useNavigate()

  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')

  const handleCardNumber = (e) => {
    const v = e.target.value.replace(/\D/g, '').slice(0, 16)
    setCardNumber(v.match(/.{1,4}/g)?.join(' ') || v)
  }

  const handleCardKeyDown = (e) => {
    if (e.key === 'Backspace' && cardNumber.endsWith(' ')) {
      e.preventDefault()
      setCardNumber((prev) => prev.slice(0, -2))
    }
  }

  const handleExpiry = (e) => {
    let raw = e.target.value.replace(/\D/g, '').slice(0, 4)
    if (!raw) {
      setExpiry('')
      return
    }
    let mm = raw.slice(0, 2)
    if (parseInt(mm[0]) > 1) mm = '0' + mm[0]
    if (mm.length === 2 && parseInt(mm) > 12) mm = '12'
    setExpiry(raw.length > 2 ? mm + '/' + raw.slice(2) : mm)
  }

  const handleExpiryKeyDown = (e) => {
    if (e.key === 'Backspace' && expiry.endsWith('/')) {
      e.preventDefault()
      setExpiry((prev) => prev.slice(0, -1))
    }
  }

  const isFormValid =
    cardNumber.replace(/\s/g, '').length === 16 && expiry.length === 5 && cvv.length === 3

  return (
    <div className="page-wrapper">
      <div className="payment-container">
        <div className="back-link" onClick={onBack}>
          &lt; Повернутись
        </div>

        <h1 className="page-title">Оплата товару</h1>

        <div className="payment-content">
          {/* LEFT SIDE */}
          <div className="payment-left">
            <div className="card-form">
              <h3>Інформація про платіжну картку</h3>
              <p>Заповніть поля нижче, щоб завершити операцію</p>

              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9101 1121"
                  value={cardNumber}
                  onChange={handleCardNumber}
                  onKeyDown={handleCardKeyDown}
                  maxLength={19}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expiration Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={handleExpiry}
                    onKeyDown={handleExpiryKeyDown}
                    maxLength={5}
                  />
                </div>

                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                    maxLength={3}
                  />
                </div>
              </div>

              <div className="checkbox">
                <input type="checkbox" id="save" />
                <label htmlFor="save">Save card details</label>
              </div>
            </div>

            <div className="payment-footer">
              <button className="btn-cancel" onClick={() => navigate('/payment')}>
                Скасувати
              </button>
              <button
                className="btn-pay"
                disabled={!isFormValid}
                onClick={() => navigate('/success')}
              >
                Оплатити
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
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
  )
}

export default CardPayment
