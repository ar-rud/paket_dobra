import './SidebarRewards.css';

export default function SidebarRewards({ title, levels, arrowIconSrc }) {
  return (
    <div className="sidebar-rewards">
      <div className="sidebar-rewards__header">
        <h3 className="sidebar-rewards__title">{title}</h3>
        {arrowIconSrc ? (
          <img src={arrowIconSrc} alt="" aria-hidden="true" className="sidebar-rewards__arrow" />
        ) : null}
      </div>

      <div className="sidebar-rewards__levels">
        {levels.map((level) => (
          <div key={level.id} className="sidebar-rewards__level">
            <div className={`sidebar-rewards__badge ${level.unlocked ? 'sidebar-rewards__badge--unlocked' : 'sidebar-rewards__badge--locked'}`}>
              <img
                src={level.iconSrc}
                alt={level.iconAlt}
                className="sidebar-rewards__badge-icon"
              />
            </div>

            <span className="sidebar-rewards__label">{level.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}