import './Tabs.css';

export default function Tabs({ tabs }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tabs__button ${tab.isActive ? 'tabs__button--active' : 'tabs__button--inactive'}`}
        >
          {tab.label}
          {tab.isActive && (
            <span className="tabs__indicator"></span>
          )}
        </button>
      ))}
    </div>
  );
}