import './ImpactStats.css';

export default function ImpactStats({ title, value }) {
  return (
    <div className="impact-stats">
      <div className="impact-stats__header">
        <h3 className="impact-stats__title">{title}</h3>
        <svg className="impact-stats__arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>

      <div className="impact-stats__body">
        <span className="impact-stats__value">{value}</span>

        <div className="impact-stats__chart">
          <svg viewBox="0 0 100 40" className="impact-stats__chart-svg" preserveAspectRatio="none">
            <path d="M0,35 C20,35 30,15 50,20 C70,25 80,5 100,0" fill="none" stroke="#badd2b" strokeWidth="2" />
            <path d="M0,35 C20,35 30,15 50,20 C70,25 80,5 100,0 L100,40 L0,40 Z" fill="#eaf4c4" opacity="0.6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
