import { useState } from "react";
import "./Profile.css";
import HeroBanner from "../../components/HeroBanner/HeroBanner.jsx";
import SidebarWrapper from "./components/SidebarWrapper/SidebarWrapper.jsx";
import ListingsFeed from "./components/ListingsFeed/ListingsFeed.jsx";

import addPlusIcon from "./images/add_plus_icon.svg";
import binIcon from "./images/bin_icon.svg";
import heartRewardIcon from "./images/heart_reward.png";
import leaveIcon from "./images/leave_icon.svg";
import messagesIcon from "./images/messages_icon.svg";
import rightArrowIcon from "./images/right_arrow_icon.svg";
import settingsIcon from "./images/settings_icon.svg";
import supportIcon from "./images/support_icon.svg";
import unknownRewardIcon from "./images/unknown_reward.svg";
import userAvatar from "./images/user_avatar.png";
import itemCup from "./images/item_cup.png";
import itemPainting from "./images/item_painting.png";
import itemPaintbrush from "./images/item_paintbrush.png";
import itemToy from "./images/item_toy.png";
import itemBall from "./images/item_massage_ball.png";
import itemSportSuite from "./images/item_sport_suite.png";
import itemLamp from "./images/item_lamp.png";

const PROFILE_TABS = [
  { id: "announcements", label: "Оголошення" },
  { id: "drafts", label: "Чернетки" },
  { id: "orders", label: "Замовлення" },
];

const USER_IDENTITY = {
  avatarSrc: userAvatar,
  avatarAlt: "Олександра Лисак",
  name: "Олександра Лисак",
  username: "@ollysak",
  levelLabel: "1 level",
  messageLabel: "Повідомлення",
  messageIconSrc: messagesIcon,
};

const IMPACT_STATS = {
  title: "Ваша допомога:",
  value: "4 768грн",
  arrowIconSrc: rightArrowIcon,
};

const REWARDS = {
  title: "Нагороди:",
  arrowIconSrc: rightArrowIcon,
  levels: [
    {
      id: "lvl-1",
      label: "1 lvl",
      unlocked: true,
      iconSrc: heartRewardIcon,
      iconAlt: "Нагорода 1 рівня",
    },
    {
      id: "lvl-2",
      label: "2 lvl",
      unlocked: false,
      iconSrc: unknownRewardIcon,
      iconAlt: "Нагорода 2 рівня",
    },
    {
      id: "lvl-3",
      label: "3 lvl",
      unlocked: false,
      iconSrc: unknownRewardIcon,
      iconAlt: "Нагорода 3 рівня",
    },
  ],
};

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

const LISTINGS_BY_TAB = {
  announcements: [
    {
      id: "listing-cup",
      imageSrc: itemCup,
      imageAlt: "Чашка ручної роботи",
      title: "Чашка ручної роботи",
      subtitle: "Статус: продається",
      priceText: "від 500 грн",
      showMessageAction: true,
      showDeleteAction: true,
      primaryActionLabel: "Редагувати",
    },
    {
      id: "listing-painting",
      imageSrc: itemPainting,
      imageAlt: 'Картина олійними фарбами "Весна"',
      title: 'Картина олійними фарбами "Весна"',
      subtitle: "Статус: продається",
      priceText: "від 700 грн",
      showMessageAction: true,
      showDeleteAction: true,
      primaryActionLabel: "Редагувати",
    },
    {
      id: "listing-paintbrush",
      imageSrc: itemPaintbrush,
      imageAlt: "Набір пензликів для малювання",
      title: "Набір пензликів для малювання",
      subtitle: "Статус: продається",
      priceText: "від 230 грн",
      showMessageAction: true,
      showDeleteAction: true,
      primaryActionLabel: "Редагувати",
    },
    {
      id: "listing-toy",
      imageSrc: itemToy,
      imageAlt: "Дитяча іграшка WoodyToyss",
      title: "Дитяча іграшка WoodyToyss",
      subtitle: "Статус: продано",
      priceText: "від 350 грн",
      showMessageAction: true,
      showDeleteAction: true,
      primaryActionLabel: "Редагувати",
      muted: true,
      imageMuted: true,
      actionsDisabled: true,
    },
  ],
  drafts: [
    {
      id: "draft-bike",
      imagePlaceholder: true,
      title: "Велосипед",
      priceText: "00.00 грн",
      showDeleteAction: true,
      primaryActionLabel: "Редагувати",
    },
    {
      id: "draft-seat",
      imagePlaceholder: true,
      title: "Крісло дитяче автомобільне",
      priceText: "$29.00",
      showDeleteAction: true,
      primaryActionLabel: "Редагувати",
    },
  ],
  orders: [
    {
      id: "order-ball",
      imageSrc: itemBall,
      imageAlt: "Масажний м'яч UP & FORWARD",
      title: "Масажний м'яч UP & FORWARD",
      priceText: "350 грн",
      showMessageAction: true,
      primaryActionLabel: "Відслідкувати",
    },
    {
      id: "order-suit",
      imageSrc: itemSportSuite,
      imageAlt: "Флісовий спортивний костюм",
      title: "Флісовий спортивний костюм",
      priceText: "1200 грн",
      showMessageAction: true,
      primaryActionLabel: "Відслідкувати",
    },
    {
      id: "order-lamp",
      imageSrc: itemLamp,
      imageAlt: "Кольорова лампа захід сонця",
      title: "Кольорова лампа захід сонця",
      priceText: "450 грн",
      showMessageAction: true,
      primaryActionLabel: "Відслідкувати",
    },
  ],
};

export default function Profile() {
  const [activeTabId, setActiveTabId] = useState(PROFILE_TABS[0].id);

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
    <div className="profile-page">
      <div className="profile-page__hero">
        <HeroBanner variant="solid" leftContent={null} rightContent={bannerRightContent} />
      </div>

      <main className="profile-page__container profile-page__layout">
        <div className="profile-page__sidebar-column">
          {sidebarBreadcrumbs}
          <SidebarWrapper
            className="profile-page__sidebar-card"
            userIdentity={USER_IDENTITY}
            impactStats={IMPACT_STATS}
            rewards={REWARDS}
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
            cards={LISTINGS_BY_TAB[activeTabId] ?? []}
            messageIconSrc={messagesIcon}
            deleteIconSrc={binIcon}
          />
        </div>
      </main>
    </div>
  );
}
