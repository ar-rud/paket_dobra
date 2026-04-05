import "./Profile.css";
import SidebarWrapper from "./components/SidebarWrapper/SidebarWrapper.jsx";
import ListingsFeed from "./components/ListingsFeed/ListingsFeed.jsx";

export default function Profile() {
  const tabs = [
    { id: "active", label: "Оголошення", isActive: true },
    { id: "drafts", label: "Чернетки", isActive: false },
    { id: "orders", label: "Замовлення", isActive: false },
  ];

  const listingsData = [
    {
      id: 1,
      title: "Чашка ручної роботи",
      price: "500",
      isSold: false,
      image:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      title: 'Картина олійними фарбами "Весна"',
      price: "700",
      isSold: false,
      image:
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      title: "Набір пензликів для малювання",
      price: "230",
      isSold: false,
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      title: "Дитяча іграшка WoodyToyss",
      price: "350",
      isSold: true,
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const userIdentity = {
    avatarSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    avatarAlt: "Олександра Лисак",
    name: "Олександра Лисак",
    username: "@ollysak",
    levelLabel: "1 level",
    messageLabel: "Повідомлення",
  };

  const impactStats = {
    title: "Ваша допомога:",
    value: "4 768грн",
  };

  const rewards = {
    title: "Нагороди:",
    levels: [
      { id: 1, label: "1 lvl", unlocked: true, icon: "💚" },
      { id: 2, label: "2 lvl", unlocked: false, icon: "?" },
      { id: 3, label: "3 lvl", unlocked: false, icon: "?" },
    ],
  };

  const menuLinks = [
    {
      id: "support",
      label: "Підтримка",
      icon: (
        <svg
          className="sidebar-menu__icon-svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "settings",
      label: "Налаштування",
      icon: (
        <svg
          className="sidebar-menu__icon-svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: "logout",
      label: "Вийти",
      icon: (
        <svg
          className="sidebar-menu__icon-svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      ),
    },
  ];

  const addListingLabel = "Додати оголошення";
  const statusPrefix = "Статус:";
  const editLabel = "Редагувати";
  const pricePrefix = "від";
  const priceSuffix = "грн";

  return (
    <div className="profile-page">
      <main className="profile-page__content">
        <SidebarWrapper
          userIdentity={userIdentity}
          impactStats={impactStats}
          rewards={rewards}
          menuLinks={menuLinks}
        />
        <ListingsFeed
          tabs={tabs}
          addListingLabel={addListingLabel}
          listingsData={listingsData}
          statusPrefix={statusPrefix}
          editLabel={editLabel}
          pricePrefix={pricePrefix}
          priceSuffix={priceSuffix}
        />
      </main>
    </div>
  );
}
