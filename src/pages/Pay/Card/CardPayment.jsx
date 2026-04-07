import React from "react";
import "../Payment/Payment.css";
import "./CardPayment.css";

const CardPayment = ({ onBack }) => {
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
                <input type="text" placeholder="1234 5678 9101 1121" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expiration Date</label>
                  <input type="text" placeholder="MM/YY" />
                </div>

                <div className="form-group">
                  <label>CVV</label>
                  <input type="text" placeholder="123" />
                </div>
              </div>

              <div className="checkbox">
                <input type="checkbox" id="save" />
                <label htmlFor="save">Save card details</label>
              </div>
            </div>

            <div className="payment-footer">
              <button className="btn-cancel" onClick={onBack}>
                Скасувати
              </button>
              <button className="btn-pay">Оплатити</button>
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
  );
};

export default CardPayment;