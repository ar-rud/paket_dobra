import './AddListingButton.css';

export default function AddListingButton({ label, icon }) {
  return (
    <button type="button" className="add-listing-button">
      {icon ? (
        <span className="add-listing-button__icon" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className="add-listing-button__label">{label}</span>
    </button>
  );
}