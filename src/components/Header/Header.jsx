import "./Header.css";
import logo from "../../assets/images/logo.png";
import gridIcon from "../../assets/images/grid.png";
import userIcon from "../../assets/images/account_circle.png";
import cartIcon from "../../assets/images/Shopping cart.png";
import searchIcon from "../../assets/images/search.png";

const defaultLinks = [
  { label: "Про нас", href: "/" },
  { label: "Збори", href: "/donations" },
  { label: "Статистика", href: "/statistics" },
  { label: "Блог", href: "/" },
];

export default function Header({
  links = defaultLinks,
  ctaText = "Додати оголошення",
  ctaHref = "/create-announcement",
  topInfoText = "Профіль/Замовлення",
  transparent = true,
  onCartOpen = () => {},
}) {
  return (
    <header className={`header ${transparent ? "header--transparent" : ""}`.trim()}>
      {topInfoText ? <div className="header__top">{topInfoText}</div> : null}

      <div className="header__bar">
        <a className="header__logo" href="/" aria-label="На головну">
          <img src={logo} alt="Пакет добра" className="header__logo-img" />
        </a>

        <nav className="header__nav" aria-label="Головне меню">
          <a href="/catalog" className="header__grid-link" aria-label="Каталог">
            <img src={gridIcon} alt="" className="header__icon-img" />
          </a>

          {links.map((link) => (
            <a key={link.label} href={link.href} className="header__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href="/profile" className="header__icon-btn" aria-label="Профіль">
            <img src={userIcon} alt="" className="header__icon-img" />
          </a>

          <button type="button" className="header__icon-btn" aria-label="Кошик" onClick={onCartOpen}>
            <img src={cartIcon} alt="" className="header__icon-img" />
          </button>

          <a href={ctaHref} className="header__cta">
            {ctaText}
          </a>

          <button type="button" className="header__icon-btn" aria-label="Пошук">
            <img src={searchIcon} alt="" className="header__icon-img" />
          </button>
        </div>
      </div>
    </header>
  );
}
