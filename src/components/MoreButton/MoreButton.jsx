import "./MoreButton.css";

export default function MoreButton({ children, onClick, disabled = false }) {
  return (
    <button className="MoreButton-button" onClick={onClick} disabled={disabled} type="button">
      {children}
    </button>
  );
}
