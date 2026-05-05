import Header from "../../components/Header/Header.jsx";
import ImpactStatsSection from "../../components/ImpactStatsSection/ImpactStatsSection.jsx";
import ReportsSection from "./components/ReportsSection.jsx";
import "./StatisticsPage.css";

const reports = [
  {
    id: 1,
    title: "Грудень 2024",
    type: "Таблиця",
  },
  {
    id: 2,
    title: "Грудень 2024",
    type: "Фотозвіт",
  },
  {
    id: 3,
    title: "Грудень 2024",
    type: "Квитанції",
  },
  {
    id: 4,
    title: "Листопад 2024",
    type: "Таблиця",
  },
  {
    id: 5,
    title: "Листопад 2024",
    type: "Фотозвіт",
  },
  {
    id: 6,
    title: "Листопад 2024",
    type: "Квитанції",
  },
];

export default function StatisticsPage() {
  return (
    <main className="statistics-page">
      <Header topInfoText="" />

      <div className="statistics-page__container statistics-page__breadcrumbs-wrap">
        <nav className="statistics-page__breadcrumbs" aria-label="breadcrumb">
          <span className="statistics-page__breadcrumb">Головна</span>
          <span className="statistics-page__breadcrumb-separator" aria-hidden="true">
            &gt;
          </span>
          <span className="statistics-page__breadcrumb statistics-page__breadcrumb--current">
            Статистика
          </span>
        </nav>
      </div>

      <ImpactStatsSection />

      <ReportsSection reports={reports} />
    </main>
  );
}