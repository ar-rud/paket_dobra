import './SidebarRewards.css';

export default function SidebarRewards({ title, levels }) {
  return (
    <div className="sidebar-rewards">
      <div className="sidebar-rewards__header">
        <h3 className="sidebar-rewards__title">{title}</h3>
        <svg 
          className="sidebar-rewards__arrow" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>

      <div className="sidebar-rewards__levels">
        {levels.map((level) => (
          <div key={level.id} className="sidebar-rewards__level">
            <div 
              className={`sidebar-rewards__badge
                ${level.unlocked 
                  ? 'sidebar-rewards__badge--unlocked' 
                  : 'sidebar-rewards__badge--locked'
                }`}
            >
              {level.icon}
            </div>

            <span className="sidebar-rewards__label">
              {level.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}