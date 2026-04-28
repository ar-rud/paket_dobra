import './SidebarMenu.css';

export default function SidebarMenu({ menuLinks }) {
  return (
    <div className="sidebar-menu">
      {menuLinks.map((link) => (
        <button key={link.id} type="button" className="sidebar-menu__item">
          <img src={link.iconSrc} alt={link.iconAlt || ''} className="sidebar-menu__icon" />
          <span className="sidebar-menu__label">{link.label}</span>
        </button>
      ))}
    </div>
  );
}
