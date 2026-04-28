import './UserIdentity.css';

export default function UserIdentity({
  avatarSrc,
  avatarAlt,
  name,
  username,
  levelLabel,
}) {
  return (
    <div className="user-identity">
      <div className="user-identity__avatar-frame">
        <img src={avatarSrc} alt={avatarAlt} className="user-identity__avatar" />
      </div>

      <h2 className="user-identity__name">{name}</h2>
      <div className="user-identity__meta">
        <span className="user-identity__username">{username}</span>
        <span className="user-identity__level">{levelLabel}</span>
      </div>
    </div>
  );
}