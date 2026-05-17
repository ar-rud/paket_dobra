import "./ReportRow.css";
import downloadIcon from "../images/download_icon.svg";

export default function ReportRow({ title, type, downloadUrl }) {
  return (
    <article className="report-row" role="listitem">
      <div className="report-row__content">
        <h3 className="report-row__title">{title}</h3>
        <p className="report-row__type">{type}</p>
      </div>

      <div className="report-row__actions">
        <a
          href={downloadUrl}
          download
          className="report-row__download"
          aria-label={`Завантажити ${title} ${type}`}
        >
          <img src={downloadIcon} alt="" aria-hidden="true" className="report-row__download-icon" />
        </a>

        <a href={downloadUrl} className="report-row__view-button" target="_blank" rel="noreferrer">
          Переглянути
        </a>
      </div>
    </article>
  );
}