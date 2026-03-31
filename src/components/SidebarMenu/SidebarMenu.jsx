import './SidebarMenu.css';

export default function SidebarMenu({ menuLinks }) {
  return (
    <div className="sidebar-menu">
      {menuLinks.map((link) => (
        <button
          key={link.id}
          className="sidebar-menu__item"
        >
          <span className="sidebar-menu__icon">{link.icon}</span>
          {link.label}
        </button>
      ))}
    </div>
  );
}
