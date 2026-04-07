import "./Footer.css";

export default function Footer(props) {
  return (
    <footer className="Footer-wrapper">
      <div className="Footer-top">
        <section className="Footer-top-logo">
          <img
            className="Footer-logo-img"
            src="/src/assets/images/logo.png"
            alt="logo"
          />

          <p className="Footer-moto">Підтримуй добро купуй та змінюй!</p>
          <div className="Footer-social-media-wrapper">
            <a className="Footer-social-media-item" href="">
              <img
                className="Footer-social-media-img Footer-facebook"
                src="/src/assets/images/facebook-icon.png"
                alt="facebook"
              />
            </a>
            <a className="Footer-social-media-item" href="">
              <img
                className="Footer-social-media-img Footer-instagram"
                src="/src/assets/images/instagram-icon.png"
                alt="instagram"
              />
            </a>
            <a className="Footer-social-media-item" href="">
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
              <a className="Footer-top-menu-item-link" href="">
                Про нас
              </a>
            </li>
            <li className="Footer-top-menu-item">
              <a className="Footer-top-menu-item-link" href="">
                Збори
              </a>
            </li>
            <li className="Footer-top-menu-item">
              <a className="Footer-top-menu-item-link" href="">
                Статистика
              </a>
            </li>
            <li className="Footer-top-menu-item">
              <a className="Footer-top-menu-item-link" href="">
                Блог
              </a>
            </li>
            <li className="Footer-top-menu-item">
              <a className="Footer-top-menu-item-link" href="">
                Профіль
              </a>
            </li>
          </ul>
        </section>

        <section className="Footer-top-service">
          <h4 className="Footer-top-service-heading Footer-heading">Сервіс</h4>
          <ul className="Footer-top-service-list">
            <li className="Footer-top-service-item">
              <a className="Footer-top-service-item-link" href="">
                Рекламні умови
              </a>
            </li>
            <li className="Footer-top-service-item">
              <a className="Footer-top-service-item-link" href="">
                Правила співпраці
              </a>
            </li>
            <li className="Footer-top-service-item">
              <a className="Footer-top-service-item-link" href="">
                Для преси
              </a>
            </li>
          </ul>
        </section>

        <section className="Footer-top-other">
          <h4 className="Footer-top-other-heading Footer-heading">Інше</h4>
          <ul className="Footer-top-other-list">
            <li className="Footer-top-other-item">
              <a className="Footer-top-other-item-link" href="">
                FAQ
              </a>
            </li>
            <li className="Footer-top-other-item">
              <a className="Footer-top-other-item-link" href="">
                Підтримка
              </a>
            </li>
          </ul>
        </section>
      </div>

      <ul className="Footer-bottom">
        <li className="Footer-bottom-item Footer-bottom-copyright">Copyright © 2025</li>
        <li className="Footer-bottom-item">
          <a className="Footer-bottom-item-link" href="">
            Умови користування
          </a>
        </li>
        <li className="Footer-bottom-item">
          <a className="Footer-bottom-item-link" href="">
            Політика конфіденційності
          </a>
        </li>
        <li className="Footer-bottom-item">
          <a className="Footer-bottom-item-link" href="">
            Правила безпеки
          </a>
        </li>
      </ul>
    </footer>
  );
}
