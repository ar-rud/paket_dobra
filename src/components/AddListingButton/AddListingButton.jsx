import './AddListingButton.css';

export default function AddListingButton({ label }) {
  return (
    <button className="add-listing-button">
      <svg className="add-listing-button__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
      </svg>
      {label}
    </button>
  );
}