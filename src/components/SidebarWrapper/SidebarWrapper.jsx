import UserIdentity from '../UserIdentity/UserIdentity.jsx';
import ImpactStats from '../ImpactStats/ImpactStats.jsx';
import Rewards from '../SidebarRewards/SidebarRewards.jsx';
import SidebarMenu from '../SidebarMenu/SidebarMenu.jsx';
import './SidebarWrapper.css';

export default function SidebarWrapper({ userIdentity, impactStats, rewards, menuLinks }) {
  return (
    <aside className="sidebar-wrapper">
      <UserIdentity
        avatarSrc={userIdentity.avatarSrc}
        avatarAlt={userIdentity.avatarAlt}
        name={userIdentity.name}
        username={userIdentity.username}
        levelLabel={userIdentity.levelLabel}
        messageLabel={userIdentity.messageLabel}
      />
      <ImpactStats title={impactStats.title} value={impactStats.value} />
      <Rewards title={rewards.title} levels={rewards.levels} />
      <SidebarMenu menuLinks={menuLinks} />
    </aside>
  );
}
