import Header from "../../components/Header/Header.jsx";
import ImpactStatsSection from "../../components/ImpactStatsSection/ImpactStatsSection.jsx";
import "./HomePage.css";

export default function HomePage() {
  return (
    <main className="home-page">
      <Header topInfoText="" />
      <ImpactStatsSection />
    </main>
  );
}
