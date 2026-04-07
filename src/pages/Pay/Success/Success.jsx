import React from "react";
import "./Success.css";

const Success = () => {
  return (
    <div className="page">
      <div className="background-pattern" />

      <div className="success-card">
        <h1 className="success-title">Оплата пройшла успішно!</h1>

        <p className="success-message">
          Ми щиро вдячні вам за підтримку. Кожна гривня важлива та сприяє змінам!
        </p>

        <p className="email-label">
          Введіть пошту, якщо бажаєте отримати звіт з цієї покупки
        </p>

        <div className="email-section">
          <input
            type="email"
            placeholder="Email address"
            className="email-input"
          />
          <button className="email-button">Отримати</button>
        </div>

        <p className="footer-text">
          Підтримуй добро — купуй та змінюй!
        </p>
      </div>
    </div>
  );
};

export default Success;