import "./Footer.css";
import { Link } from "react-router";

export default function Footer(props) {
  // Функція для пустих посилань, яка блокує перехід і скрол вгору
  const handleEmptyLink = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="Footer-wrapper">
      <div className="Footer-top">
        <section className="Footer-top-logo">
          <Link to="/">
            <img
              className="Footer-logo-img"
              src="/src/assets/images/logo-white.png"
              alt="logo"
            />
          </Link>

          <p className="Footer-moto">Підтримуй добро купуй та змінюй!</p>
          <div className="Footer-social-media-wrapper">
            <a className="Footer-social-media-item" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                className="Footer-social-media-img Footer-facebook"
                src="/src/assets/images/facebook-icon.png"
                alt="facebook"
              />
            </a>
            <a className="Footer-social-media-item" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                className="Footer-social-media-img Footer-instagram"
                src="/src/assets/images/instagram-icon.png"
                alt="instagram"
              />
            </a>
            <a className="Footer-social-media-item" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img
                className="Footer-social-media-img Footer-youtube"
                src="/src/assets/images/youtube-icon.png"
                alt="youtube"
              />
            </a>
          </div>
        </section>

        <section className="Footer-top-menu">
          <h4 className="Footer-top-menu-heading Footer-heading">Меню</h4>
          <ul className="Footer-top-menu-list">
            <li className="Footer-top-menu-item">
              {/* Пусте посилання */}
              <a className="Footer-top-menu-item-link" href="#" onClick={handleEmptyLink}>
                Про нас
              </a>
            </li>
            <li className="Footer-top-menu-item">
              <Link className="Footer-top-menu-item-link" to="/donations">
                Збори
              </Link>
            </li>
            <li className="Footer-top-menu-item">
              <Link className="Footer-top-menu-item-link" to="/statistics">
                Статистика
              </Link>
            </li>
            <li className="Footer-top-menu-item">
              {/* Пусте посилання */}
              <a className="Footer-top-menu-item-link" href="#" onClick={handleEmptyLink}>
                Блог
              </a>
            </li>
            <li className="Footer-top-menu-item">
              <Link className="Footer-top-menu-item-link" to="/profile">
                Профіль
              </Link>
            </li>
          </ul>
        </section>

        <section className="Footer-top-service">
          <h4 className="Footer-top-service-heading Footer-heading">Сервіс</h4>
          <ul className="Footer-top-service-list">
            <li className="Footer-top-service-item">
              <a className="Footer-top-service-item-link" href="#" onClick={handleEmptyLink}>
                Рекламні умови
              </a>
            </li>
            <li className="Footer-top-service-item">
              <a className="Footer-top-service-item-link" href="#" onClick={handleEmptyLink}>
                Правила співпраці
              </a>
            </li>
            <li className="Footer-top-service-item">
              <a className="Footer-top-service-item-link" href="#" onClick={handleEmptyLink}>
                Для преси
              </a>
            </li>
          </ul>
        </section>

        <section className="Footer-top-other">
          <h4 className="Footer-top-other-heading Footer-heading">Інше</h4>
          <ul className="Footer-top-other-list">
            <li className="Footer-top-other-item">
              <a className="Footer-top-other-item-link" href="#" onClick={handleEmptyLink}>
                FAQ
              </a>
            </li>
            <li className="Footer-top-other-item">
              <a className="Footer-top-other-item-link" href="#" onClick={handleEmptyLink}>
                Підтримка
              </a>
            </li>
          </ul>
        </section>
      </div>

      <ul className="Footer-bottom">
        <li className="Footer-bottom-item Footer-bottom-copyright">Copyright © 2025</li>
        <li className="Footer-bottom-item">
          <a className="Footer-bottom-item-link" href="#" onClick={handleEmptyLink}>
            Умови користування
          </a>
        </li>
        <li className="Footer-bottom-item">
          <a className="Footer-bottom-item-link" href="#" onClick={handleEmptyLink}>
            Політика конфіденційності
          </a>
        </li>
        <li className="Footer-bottom-item">
          <a className="Footer-bottom-item-link" href="#" onClick={handleEmptyLink}>
            Правила безпеки
          </a>
        </li>
      </ul>
    </footer>
  );
}