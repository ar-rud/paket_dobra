import './SidebarMessage.css';

export default function SidebarMessage({ label, iconSrc }) {
  return (
    <div className="sidebar-message">
      <button type="button" className="sidebar-message__button">
        {iconSrc ? (
          <img src={iconSrc} alt="" aria-hidden="true" className="sidebar-message__icon" />
        ) : null}
        <span className="sidebar-message__label">{label}</span>
      </button>
    </div>
  );
}