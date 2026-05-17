import './ImpactStats.css';
import defaultHelpAmountPlot from '../../images/help_amount_plot.svg';

const DEFAULT_CHART_LINE_PATH = 'M0,34 C20,34 30,15 50,20 C70,25 80,5 100,0';
const DEFAULT_CHART_AREA_PATH = 'M0,34 C20,34 30,15 50,20 C70,25 80,5 100,0 L100,40 L0,40 Z';

export default function ImpactStats({
  title,
  value,
  arrowIconSrc,
  chartImageSrc = defaultHelpAmountPlot,
  chartLinePath = DEFAULT_CHART_LINE_PATH,
  chartAreaPath = DEFAULT_CHART_AREA_PATH,
}) {
  return (
    <div className="profile-impact-stats">
      <button type="button" className="profile-impact-stats__header">
        <h3 className="profile-impact-stats__title">{title}</h3>
        {arrowIconSrc ? (
          <img src={arrowIconSrc} alt="" aria-hidden="true" className="profile-impact-stats__arrow" />
        ) : null}
      </button>

      <div className="profile-impact-stats__body">
        <span className="profile-impact-stats__value">{value}</span>

        <div className="profile-impact-stats__chart">
          {chartImageSrc ? (
            <img
              src={chartImageSrc}
              alt=""
              aria-hidden="true"
              className="profile-impact-stats__chart-image"
            />
          ) : (
            <svg
              viewBox="0 0 100 40"
              className="profile-impact-stats__chart-svg"
              preserveAspectRatio="none"
            >
              <path d={chartAreaPath} fill="#e5efb6" opacity="0.85" />
              <path d={chartLinePath} fill="none" stroke="#bfcd2d" strokeWidth="2" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
