import "./Header.css";
import logo from "../../assets/images/logo.png";
import gridIcon from "../../assets/images/grid.png";
import userIcon from "../../assets/images/account_circle.png";
import cartIcon from "../../assets/images/Shopping cart.png";
import searchIcon from "../../assets/images/search.png";

const defaultLinks = [
  { label: "Про нас", href: "#" },
  { label: "Збори", href: "#" },
  { label: "Статистика", href: "#" },
  { label: "Блог", href: "#" },
];

export default function Header({
  links = defaultLinks,
  ctaText = "Додати оголошення",
  topInfoText = "Профіль/Замовлення",
  transparent = true,
}) {
  return (
    <header className={`header ${transparent ? "header--transparent" : ""}`.trim()}>
      <div className="header__top">{topInfoText}</div>

      <div className="header__bar">
        <a className="header__logo" href="/" aria-label="На головну">
          <img src={logo} alt="Пакет добра" className="header__logo-img" />
        </a>

        <nav className="header__nav" aria-label="Головне меню">
          <a href="#" className="header__grid-link" aria-label="Каталог">
            <img src={gridIcon} alt="" className="header__icon-img" />
          </a>

          {links.map((link) => (
            <a key={link.label} href={link.href} className="header__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="header__icon-btn" aria-label="Профіль">
            <img src={userIcon} alt="" className="header__icon-img" />
          </button>

          <button type="button" className="header__icon-btn" aria-label="Кошик">
            <img src={cartIcon} alt="" className="header__icon-img" />
          </button>

          <button type="button" className="header__cta">
            {ctaText}
          </button>

          <button type="button" className="header__icon-btn" aria-label="Пошук">
            <img src={searchIcon} alt="" className="header__icon-img" />
          </button>
        </div>
      </div>
    </header>
  );
}
