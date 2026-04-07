import { useMemo, useState } from "react";

import PageSwitcher from "../../components/PageSwitcher/PageSwitcher.jsx";
import MoreButton from "../../components/MoreButton/MoreButton.jsx";



import "./DonationsPage.css";

import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import FiltersBar from "./FiltersBar/FiltersBar.jsx";
import CampaignCard from "../components/CampaignCard/CampaignCard.jsx";


const campaigns = [
  {
    id: 1,
    title: "Рій помсти 24/7: б'ємо ворога вдень та вночі",
    category: "Технічне забезпечення",
    foundation: 'Фонд "Сергія Притули"',
    collected: 7568879,
    goal: 8000000,
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Почуй своїх",
    category: "Технічне забезпечення",
    foundation: 'Фонд "Сергія Притули"',
    collected: 8594029,
    goal: 14200000,
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Блискавки ССО",
    category: "Технічне забезпечення",
    foundation: 'Фонд "Сергія Притули"',
    collected: 7568879,
    goal: "Безперервно",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "Залізно поруч",
    category: "Технічне забезпечення",
    foundation: 'Фонд "Повернись живим"',
    collected: 47658879,
    goal: 48000000,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Зимовий збір на такмед",
    category: "Технічне забезпечення",
    foundation: 'Фонд "Сергія Притули"',
    collected: 3458879,
    goal: "Доки стане грошей",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "ОКО ЗА ОКО 3",
    category: "Технічне забезпечення",
    foundation: 'Фонд "Повернись живим"',
    collected: 7658879,
    goal: "Перемога",
    image:
      "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 7,
    title: "Адвент календар",
    category: "Технічне забезпечення",
    foundation: 'Фонд "Сергія Притули"',
    collected: 7568879,
    goal: "Скільки зможемо",
    image:
      "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 8,
    title: "Формула зв'язку",
    category: "Технічне забезпечення",
    foundation: 'Фонд "Повернись живим"',
    collected: 1100,
    goal: 20000000,
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 9,
    title: "Бережи тебе РЕБ!",
    category: "Технічне забезпечення",
    foundation: 'Фонд "Сергія Притули"',
    collected: 7658879,
    goal: "До перемоги",
    image:
      "https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=1000&q=80",
  },
];

function DonationsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(6);

  const typeOptions = [
    { value: "all", label: "Тип збору" },
    { value: "tech", label: "Технічне забезпечення" },
    { value: "medical", label: "Медицина" },
  ];

  const statusOptions = [
    { value: "all", label: "Завершення збору" },
    { value: "active", label: "Активні" },
    { value: "closed", label: "Завершені" },
  ];

  const organizationOptions = [
    { value: "all", label: "Організація" },
    { value: "pritula", label: 'Фонд "Сергія Притули"' },
    { value: "alive", label: 'Фонд "Повернись живим"' },
  ];

  const visibleCampaigns = useMemo(
    () => campaigns.slice(0, visibleCount),
    [visibleCount]
  );

  const onLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, campaigns.length));
  };

  return (
    <main className="donations-page">
      <section className="donations-page__top">
        <HeroSection
          title="Рій помсти 24/7: б'ємо ворога вдень та вночі"
          description="Залишилось зібрати зовсім трохи. Без тебе не впораємось!"
          buttonText="Підтримати"
        />

        <div className="donations-page__container donations-page__filters">
          <FiltersBar
            typeOptions={typeOptions}
            statusOptions={statusOptions}
            organizationOptions={organizationOptions}
          />
        </div>
      </section>

      <section className="donations-page__content">
        <div className="donations-page__container">
          <div className="donations-page__grid">
            {visibleCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} {...campaign} />
            ))}
          </div>

          <div className="donations-page__load-more">
  <MoreButton onClick={onLoadMore}>Показати ще ↓</MoreButton>
</div>



          <PageSwitcher
  currentPage={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
/>

        </div>
      </section>
    </main>
  );
}

export default DonationsPage;
