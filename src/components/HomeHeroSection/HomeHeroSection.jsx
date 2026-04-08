import MoreButton from "../MoreButton/MoreButton.jsx";
import PixelHeart from "../PixelHeart/PixelHeart.jsx";
import "./HomeHeroSection.css";

const campaignCards = [
  {
    title: "Зимовий збір на такмед",
    collected: "7 658 879$",
    goal: "7 658 879$",
  },
  {
    title: "Почуй своїх: збір на радіозв'язок",
    collected: "7 658 879$",
    goal: "7 658 879$",
  },
  {
    title: "Рій помсти 24/7: б'ємо ворога вдень та вночі",
    collected: "7 100 879$",
    goal: "7 658 879$",
  },
];

export default function HomeHeroSection() {
  return (
    <section className="home-hero">
      <div className="home-hero__inner">
        <div className="home-hero__content">
          <h1 className="home-hero__title">Підтримуй добро,купуй та змінюй!</h1>
          <p className="home-hero__description">
            Кожна покупка на нашій платформі - це донат тому, кому справді потрібно!
          </p>

          <p className="home-hero__hint">Переглянь інші збори, які чекають на твою допомогу</p>
          <MoreButton className="home-hero__button">Переглянути інші</MoreButton>
        </div>

        <div className="home-hero__visual">
          <PixelHeart className="home-hero__mosaic" />

          <div className="home-hero__cards">
            {campaignCards.map((card) => (
              <article key={card.title} className="home-hero__card">
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
                <MoreButton className="home-hero__card-btn">Підтримати</MoreButton>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
