import MoreButton from "../MoreButton/MoreButton.jsx";
import heartLarge from "../../assets/images/Group 1000005847.svg";
import heartMedium from "../../assets/images/Group 1000005844.svg";
import heartSmall from "../../assets/images/Group 1000005848.svg";
import "./ImpactStatsSection.css";

export default function ImpactStatsSection({ detailsHref = "/statistics" } = {}) {
  return (
    <section className="impact-stats">
      <div className="impact-stats__inner">
        <div className="impact-stats__intro">
          <h2 className="impact-stats__title">І допомагай тим, кому дуже потрібно</h2>
          <MoreButton className="impact-stats__details-btn" onClick={() => { window.location.href = detailsHref; }}>
            Детальніше →
          </MoreButton>
        </div>

        <div className="impact-stats__white-card">
          <p className="impact-stats__label">За період війни донати виросли більше ніж на</p>
          <p className="impact-stats__value">50%</p>
          <div className="impact-stats__stairs" aria-hidden="true" />
        </div>

        <div className="impact-stats__rate-wrap">
          <div className="impact-stats__rate-card">
            <p className="impact-stats__label">Відсоток донатів, які надходять з онлайн-системи</p>
            <p className="impact-stats__value impact-stats__value--highlight">60%</p>
          </div>
          <div className="impact-stats__joined-card">
            <p className="impact-stats__label impact-stats__label--light">До методу донатів "купуй-продавай" доєдналось понад</p>
            <p className="impact-stats__value impact-stats__value--light">2450</p>
          </div>
        </div>

        <div className="impact-stats__heart-card">
          <p className="impact-stats__label impact-stats__label--light">
            З початку війни українці переказали на потреби ЗСУ понад
          </p>
          <img src={heartLarge} alt="" className="impact-stats__heart-image" aria-hidden="true" />
          <p className="impact-stats__money">
            98.9 <span>млрд</span>
          </p>
        </div>

        <div className="impact-stats__bar-card">
          <p className="impact-stats__label impact-stats__label--light">Малі внески, складають понад</p>
          <div className="impact-stats__bar-bottom">
            <div className="impact-stats__mini-hearts" aria-hidden="true">
              <img src={heartSmall} alt="" />
              <img src={heartMedium} alt="" />
              <img src={heartLarge} alt="" />
            </div>
            <p className="impact-stats__big-value">80%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
