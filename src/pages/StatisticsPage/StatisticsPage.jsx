import ImpactStatsSection from "../../components/ImpactStatsSection/ImpactStatsSection.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
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
      <div className="statistics-page__container statistics-page__breadcrumbs-wrap">
        <Breadcrumbs
          variant="inline"
          items={[
            { label: "Головна", to: "/" },
            { label: "Статистика", current: true },
          ]}
        />
      </div>

      <ImpactStatsSection />

      <ReportsSection reports={reports} />
    </main>
  );
}