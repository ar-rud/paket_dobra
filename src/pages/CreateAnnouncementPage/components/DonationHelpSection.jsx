import SectionCard from "./SectionCard.jsx";
import alertCircleIcon from "../../../assets/images/alert-circle.svg";
import "./DonationHelpSection.css";

export default function DonationHelpSection({ donateToFund, onDonateToFundChange }) {
  return (
    <SectionCard
      title=""
      className="donation-help"
      bodyClassName="donation-help__body"
    >
      <div className="donation-help__title-row">
        <h3 className="donation-help__heading">Спрямуйте допомогу</h3>
        <img src={alertCircleIcon} alt="" aria-hidden="true" className="donation-help__icon" />
      </div>

      <div className="donation-help__stack">
        <p className="donation-help__hint">Чи бажаєте обрати фонд для донату?</p>
        <label className="donation-help__checkbox-row">
          <input
            type="checkbox"
            checked={donateToFund}
            onChange={(event) => onDonateToFundChange(event.target.checked)}
            className="donation-help__checkbox-input"
          />
          <span className="donation-help__checkbox-custom" aria-hidden="true" />
          <span className="donation-help__checkbox-label">Так, бажаю</span>
        </label>
      </div>
    </SectionCard>
  );
}
