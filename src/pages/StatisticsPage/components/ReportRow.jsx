import "./ReportRow.css";
import downloadIcon from "../images/download_icon.svg";

export default function ReportRow({ title, type }) {
  return (
    <article className="report-row" role="listitem">
      <div className="report-row__content">
        <h3 className="report-row__title">{title}</h3>
        <p className="report-row__type">{type}</p>
      </div>

      <div className="report-row__actions">
        <button type="button" className="report-row__download" aria-label={`Завантажити ${title} ${type}`}>
          <img src={downloadIcon} alt="" aria-hidden="true" className="report-row__download-icon" />
        </button>

        <button type="button" className="report-row__view-button">
          Переглянути
        </button>
      </div>
    </article>
  );
}