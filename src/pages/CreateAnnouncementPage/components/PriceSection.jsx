import SectionCard from "./SectionCard.jsx";
import chevronDown from "../../../assets/images/chevron-down.svg";
import "./PriceSection.css";

const donationValues = [15, 25, 50, 75, 100];
const conditionValues = ["Нове", "Вживане", "Відновлене"];

export default function PriceSection({
  price,
  donationPercent,
  condition,
  onPriceChange,
  onDonationPercentChange,
  onConditionChange,
}) {
  return (
    <SectionCard
      title="Дайте ціну товару"
      className="price-section"
      titleClassName="price-section__title"
      bodyClassName="price-section__body"
    >
      <div className="price-section__stack">
        <div className="price-section__group">
          <label className="price-section__label" htmlFor="price-input">
            Вкажіть мінімальну ціну
          </label>
          <div className="price-section__price-row">
            <input
              id="price-input"
              className="price-section__price-input"
              value={price}
              onChange={(event) => onPriceChange(event.target.value)}
              placeholder="$ 1,000.00"
            />
            <span className="price-section__currency">
              грн
              <img src={chevronDown} alt="" aria-hidden="true" className="price-section__currency-icon" />
            </span>
          </div>
        </div>

        <div className="price-section__group">
          <label className="price-section__label">Вкажіть відсоток донату</label>
          <div className="price-section__chips">
            {donationValues.map((value) => (
              <button
                key={value}
                type="button"
                className={
                  donationPercent === value
                    ? "price-section__chip price-section__chip--active"
                    : "price-section__chip"
                }
                onClick={() => onDonationPercentChange(value)}
              >
                {value}%
              </button>
            ))}
          </div>
        </div>

        <div className="price-section__group">
          <label className="price-section__label">Вкажіть стан</label>
          <div className="price-section__chips price-section__chips--condition">
            {conditionValues.map((value) => (
              <button
                key={value}
                type="button"
                className={
                  condition === value
                    ? "price-section__chip price-section__chip--active"
                    : "price-section__chip"
                }
                onClick={() => onConditionChange(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
