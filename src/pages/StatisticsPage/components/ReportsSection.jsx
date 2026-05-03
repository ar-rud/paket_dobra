import ReportRow from "./ReportRow.jsx";
import arrowIcon from "../images/arrow_icon.svg";
import "./ReportsSection.css";

export default function ReportsSection({ reports }) {
  return (
    <section className="reports-section statistics-page__reports">
      <div className="statistics-page__container">
        <div className="reports-section__header">
          <h2 className="reports-section__title">Звітність</h2>

          <a className="reports-section__link" href="/" aria-label="Перейти на диск">
            Перейти на диск
            <img src={arrowIcon} alt="" aria-hidden="true" className="reports-section__link-icon" />
          </a>
        </div>

        <div className="reports-section__list" role="list" aria-label="Звіти">
          {reports.map((report) => (
            <ReportRow key={report.id} {...report} />
          ))}
        </div>
      </div>
    </section>
  );
}