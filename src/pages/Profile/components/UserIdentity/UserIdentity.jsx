import './UserIdentity.css';

export default function UserIdentity({ avatarSrc, avatarAlt, name, username, levelLabel, messageLabel }) {
  return (
    <div className="user-identity">
      <div className="user-identity__avatar-ring">
        <svg className="user-identity__ring-svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="transparent" stroke="#f3f4f6" strokeWidth="4" />
          <circle 
            cx="50" 
            cy="50" 
            r="48" 
            fill="transparent" 
            stroke="#badd2b" 
            strokeWidth="4" 
            strokeDasharray="200 300" 
            strokeLinecap="round" 
          />
        </svg>
        <img 
          src={avatarSrc}
          alt={avatarAlt}
          className="user-identity__avatar"
        />
      </div>

      <h2 className="user-identity__name">{name}</h2>
      <div className="user-identity__meta">
        <span className="user-identity__username">{username}</span>
        <span className="user-identity__level">{levelLabel}</span>
      </div>

      <div className="user-identity__divider"></div>

      <button className="user-identity__message-button">
        <svg className="user-identity__message-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="user-identity__message-label">{messageLabel}</span>
      </button>
    </div>
  );
}