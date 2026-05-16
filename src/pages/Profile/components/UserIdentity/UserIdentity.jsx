import { useEffect, useState } from 'react';
import './UserIdentity.css';
import defaultAvatar from '../../images/default_avatar.svg';

export default function UserIdentity({
  avatarSrc,
  avatarAlt,
  name,
  username,
  levelLabel,
}) {
  const [src, setSrc] = useState(avatarSrc || defaultAvatar);

  useEffect(() => {
    setSrc(avatarSrc || defaultAvatar);
  }, [avatarSrc]);

  return (
    <div className="user-identity">
      <div className="user-identity__avatar-frame">
        <img
          src={src}
          alt={avatarAlt}
          className="user-identity__avatar"
          onError={(e) => {
            console.warn('UserIdentity: avatar failed to load, falling back to default:', e.currentTarget.src);
            setSrc(defaultAvatar);
          }}
        />
      </div>

      <h2 className="user-identity__name">{name}</h2>
      <div className="user-identity__meta">
        <span className="user-identity__username">{username}</span>
        <span className="user-identity__level">{levelLabel}</span>
      </div>
    </div>
  );
}