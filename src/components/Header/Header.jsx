import "./Header.css";
import { Link } from "react-router";
import LogoIcon from "../../assets/images/logo.svg?react";
import GridIcon from "../../assets/images/catalog_grid.svg?react";
import UserIcon from "../../assets/images/profile_icon.svg?react";
import CartIcon from "../../assets/images/cart_icon.svg?react";
import SearchIcon from "../../assets/images/search_icon.svg?react";

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
  overlay = false,
  onCartOpen = () => {},
}) {
  return (
    <header
      className={`header ${transparent ? "header--transparent" : ""} ${overlay ? "header--overlay" : ""}`.trim()}
    >
      {topInfoText ? <div className="header__top">{topInfoText}</div> : null}

      <div className="header__bar">
        <Link className="header__logo" to="/" aria-label="На головну">
          <LogoIcon className="header__logo-icon" />
        </Link>

        <div className="header__menu">
          <div className="header__main-group">
            <nav className="header__nav" aria-label="Головне меню">
              <Link to="/catalog" className="header__grid-link" aria-label="Каталог">
                <GridIcon className="header__icon-svg" />
              </Link>

              {links.map((link) => (
                <Link key={link.label} to={link.href} className="header__nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="header__utility-icons">
              <Link to="/profile" className="header__icon-btn" aria-label="Профіль">
                <UserIcon className="header__icon-svg" />
              </Link>

              <button
                type="button"
                className="header__icon-btn"
                aria-label="Кошик"
                onClick={onCartOpen}
              >
                <CartIcon className="header__icon-svg" />
              </button>
            </div>
          </div>

          <div className="header__actions">
            <Link to={ctaHref} className="header__cta">
              {ctaText}
            </Link>

            <button type="button" className="header__icon-btn" aria-label="Пошук">
              <SearchIcon className="header__icon-svg" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}