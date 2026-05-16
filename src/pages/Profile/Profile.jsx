import { useState, useEffect } from "react";
import "./Profile.css";
import HeroBanner from "../../components/HeroBanner/HeroBanner.jsx";
import SidebarWrapper from "./components/SidebarWrapper/SidebarWrapper.jsx";
import ListingsFeed from "./components/ListingsFeed/ListingsFeed.jsx";

import addPlusIcon from "./images/add_plus_icon.svg";
import binIcon from "./images/bin_icon.svg";
import leaveIcon from "./images/leave_icon.svg";
import messagesIcon from "./images/messages_icon.svg";
import rightArrowIcon from "./images/right_arrow_icon.svg";
import settingsIcon from "./images/settings_icon.svg";
import supportIcon from "./images/support_icon.svg";
import defaultAvatar from "./images/default_avatar.svg";

import { getCurrentUserId } from "/src/services/session";
import { getProfileData } from "./services/profile";

const PROFILE_TABS = [
  { id: "announcements", label: "Оголошення" },
  { id: "drafts", label: "Чернетки" },
  { id: "orders", label: "Замовлення" },
];

const MENU_LINKS = [
  { id: "support", label: "Підтримка", iconSrc: supportIcon, iconAlt: "Підтримка" },
  {
    id: "settings",
    label: "Налаштування",
    iconSrc: settingsIcon,
    iconAlt: "Налаштування",
  },
  { id: "logout", label: "Вийти", iconSrc: leaveIcon, iconAlt: "Вийти" },
];

export default function Profile() {
  const [activeTabId, setActiveTabId] = useState(PROFILE_TABS[0].id);

  const [userIdentity, setUserIdentity] = useState({
    avatarSrc: defaultAvatar,
    avatarAlt: "Користувач",
    name: "Завантаження...",
    username: "",
    levelLabel: "",
    messageLabel: "Повідомлення",
    messageIconSrc: messagesIcon,
  });

  const [impactStats, setImpactStats] = useState({
    title: "Ваша допомога:",
    value: "0 грн",
    arrowIconSrc: rightArrowIcon,
  });

  const [rewards, setRewards] = useState(null);
  const [listingsByTab, setListingsByTab] = useState({
    announcements: [],
    drafts: [],
    orders: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (mounted) {
        setIsLoading(true);
        setError(null);
      }

      try {
        const userId = getCurrentUserId();
        const profileData = await getProfileData(userId);
        if (!mounted || !profileData) return;

        setUserIdentity({
          avatarSrc: profileData.userIdentity.avatarSrc || defaultAvatar,
          avatarAlt: profileData.userIdentity.avatarAlt,
          name: profileData.userIdentity.name,
          username: profileData.userIdentity.username,
          levelLabel: profileData.userIdentity.levelLabel,
          messageLabel: "Повідомлення",
          messageIconSrc: messagesIcon,
        });

        setImpactStats({
          title: profileData.impactStats.title,
          value: profileData.impactStats.value,
          arrowIconSrc: rightArrowIcon,
        });
        setRewards(
          profileData.rewards
            ? { ...profileData.rewards, arrowIconSrc: rightArrowIcon }
            : null,
        );
        setListingsByTab(profileData.listingsByTab);
      } catch (err) {
        if (mounted) {
          setError(err);
        }
        console.error("Failed to load profile data", err);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    })();
    return () => (mounted = false);
  }, []);

  const sidebarBreadcrumbs = (
    <nav className="profile-breadcrumbs profile-page__sidebar-breadcrumbs" aria-label="breadcrumb">
      <span className="profile-breadcrumbs__item">Головна</span>
      <span className="profile-breadcrumbs__separator">&gt;</span>
      <span className="profile-breadcrumbs__item profile-breadcrumbs__item--active">Профіль</span>
    </nav>
  );

  const bannerRightContent = (
    <h1 className="profile-banner-title">Донать, досягай нового рівня, отримуй нагороди!</h1>
  );

  return (
    <div
      className="profile-page"
      data-loading={isLoading ? "true" : "false"}
      data-has-error={error ? "true" : "false"}
    >
      <div className="profile-page__hero">
        <HeroBanner variant="solid" leftContent={null} rightContent={bannerRightContent} />
      </div>

      <main className="profile-page__container profile-page__layout">
        <div className="profile-page__sidebar-column">
          {sidebarBreadcrumbs}
          <SidebarWrapper
            className="profile-page__sidebar-card"
            userIdentity={userIdentity}
            impactStats={impactStats}
            rewards={rewards}
            menuLinks={MENU_LINKS}
          />
        </div>

        <div className="profile-page__listings-column">
          <ListingsFeed
            tabs={PROFILE_TABS}
            activeTabId={activeTabId}
            onTabChange={setActiveTabId}
            addListingLabel="Додати оголошення"
            addListingIconSrc={addPlusIcon}
            cards={listingsByTab[activeTabId] ?? []}
            messageIconSrc={messagesIcon}
            deleteIconSrc={binIcon}
          />
        </div>
      </main>
    </div>
  );
}
