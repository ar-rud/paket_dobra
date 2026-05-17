import Header from "../../components/Header/Header.jsx";
import HomeHeroSection from "../../components/HomeHeroSection/HomeHeroSection.jsx";
import ImpactStatsSection from "../../components/ImpactStatsSection/ImpactStatsSection.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import CampaignCard from "../../components/CampaignCard/CampaignCard.jsx";
import MoreButton from "../../components/MoreButton/MoreButton.jsx";
import LogoIcon from "../../assets/images/logo.svg?react";
import { Link } from "react-router";
import "./HomePage.css";

import Footer from "../../components/Footer/Footer.jsx";

import CatalogOverview from "../Catalog/CatalogOverview/CatalogOverview.jsx";

const featuredProducts = [
  {
    id: 1,
    imgUrl: "/src/assets/images/backpack.png",
    name: "Рюкзак для походів NEO tools 30L",
    price: "450",
  },
  {
    id: 2,
    imgUrl: "/src/assets/images/thermal-underwear.png",
    name: "Комплект термобілизни ESDY чорний",
    price: "700",
  },
  {
    id: 3,
    imgUrl: "/src/assets/images/weights.png",
    name: "Обтяжувачі для рук та ніг Sister's Aroma",
    price: "400",
  },
  {
    id: 4,
    imgUrl: "/src/assets/images/stickers.jpg",
    name: "Дитячі кеди Liverpool Manchester фіолетові",
    price: "350",
  },
];

const supportCampaigns = [
  {
    id: 1,
    title: "Рій помсти 24/7: б'ємо ворога вдень та вночі",
    category: "Термінове забезпечення",
    foundation: 'Фонд "Сергія Притули"',
    collected: 7568879,
    goal: 8000000,
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Зброєносці",
    category: "Термінове забезпечення",
    foundation: 'Фонд "Повернись живим"',
    collected: 7568879,
    goal: 9000000,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HomePage() {
  return (
    <main className="home-page">
      <HomeHeroSection />
      <CatalogOverview />
      <ImpactStatsSection detailsHref="/statistics" />

      <section className="home-page__products">
        <div className="home-page__container">
          <div className="home-page__section-head">
            <h2 className="home-page__section-title">Товари для тебе</h2>
            <Link to="/catalog" className="home-page__section-link">
              Переглянути більше
            </Link>
          </div>

          <div className="home-page__products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-page__support">
        <div className="home-page__support-inner">
          <div className="home-page__support-copy">
            <h2 className="home-page__support-title">
              Потрібна ваша допомога, щоб завершити збори!
            </h2>
            <p className="home-page__support-text">
              Обери збір, який терміново потребує уваги, та долучись хоча б
              невеликим внеском.
            </p>
            <MoreButton className="home-page__support-btn">
              Переглянути всі
            </MoreButton>
          </div>

          <div className="home-page__support-grid">
            {supportCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} {...campaign} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}