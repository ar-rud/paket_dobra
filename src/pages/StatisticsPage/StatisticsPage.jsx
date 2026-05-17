import { useEffect, useState } from "react";
import ImpactStatsSection from "../../components/ImpactStatsSection/ImpactStatsSection.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import ReportsSection from "./components/ReportsSection.jsx";
import "./StatisticsPage.css";
import { getReports } from "../../services/reports.js";

export default function StatisticsPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    let isActive = true;

    async function loadReports() {
      try {
        const nextReports = await getReports();
        if (isActive) {
          setReports(Array.isArray(nextReports) ? nextReports : []);
        }
      } catch {
        if (isActive) {
          setReports([]);
        }
      }
    }

    loadReports();

    return () => {
      isActive = false;
    };
  }, []);

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