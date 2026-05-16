import MoreButton from "../MoreButton/MoreButton.jsx";
import PixelHeart from "../PixelHeart/PixelHeart.jsx";
import { useNavigate } from "react-router";
import "./HomeHeroSection.css";

const campaignCards = [
  {
    id: "winter",
    className: "home-hero__card home-hero__card--top",
    title: "Зимовий збір на такмед",
    collected: "7 658 879$",
    goal: "7 658 879$",
  },
  {
    id: "radio",
    className: "home-hero__card home-hero__card--middle",
    title: "Почуй своїх: збір на радіозв'язок",
    collected: "7 658 879$",
    goal: "7 658 879$",
  },
  {
    id: "revenge",
    className: "home-hero__card home-hero__card--bottom",
    title: "Рій помсти 24/7: б'ємо ворога вдень та вночі",
    collected: "7 100 879$",
    goal: "7 658 879$",
  },
];

function HomeHeroTitle() {
  return (
    <h1 className="home-hero__title">
      <span className="home-hero__title-line">Підтримуй</span>
      <span className="home-hero__title-line">добро,купуй</span>
      <span className="home-hero__title-line">та змінюй!</span>
    </h1>
  );
}

export default function HomeHeroSection() {
  const navigate = useNavigate();
  const goToDonations = () => navigate("/donations");

  return (
    <section className="home-hero">
      <div className="home-hero__layout">
        <div className="home-hero__content">
          <div className="home-hero__intro">
            <HomeHeroTitle />
            <p className="home-hero__description">
              Кожна покупка на нашій
              <br />
              платформі - це донат тому,
              <br />
              кому справді потрібно!
            </p>
          </div>

          <div className="home-hero__cta">
            <p className="home-hero__hint">
              Переглянь інші збори, які чекають на твою допомогу
            </p>
            <MoreButton className="home-hero__button" onClick={goToDonations}>
              Переглянути інші
            </MoreButton>
          </div>
        </div>

        <div className="home-hero__stage">
          <div className="home-hero__bg" aria-hidden="true">
            <PixelHeart className="home-hero__mosaic" variant="hero-figma" />
          </div>
          <div className="home-hero__cards">
            {campaignCards.map((card) => (
              <article key={card.id} className={card.className}>
                <h3 className="home-hero__card-title">{card.title}</h3>

                <div className="home-hero__numbers">
                  <p>
                    Зібрано:
                    <br />
                    {card.collected}
                  </p>
                  <p>
                    Ціль:
                    <br />
                    {card.goal}
                  </p>
                </div>

                <div className="home-hero__progress" />
                <MoreButton className="home-hero__card-btn" onClick={goToDonations}>
                  Підтримати
                </MoreButton>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
