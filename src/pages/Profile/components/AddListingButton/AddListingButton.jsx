import './AddListingButton.css';

export default function AddListingButton({ label, iconSrc }) {
  return (
    <button type="button" className="add-listing-button">
      {iconSrc ? <img src={iconSrc} alt="" aria-hidden="true" className="add-listing-button__icon" /> : null}
      <span className="add-listing-button__label">{label}</span>
    </button>
  );
}