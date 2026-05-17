import { useEffect, useMemo, useState } from "react";

import Header from "../../components/Header/Header.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import CampaignCard from "../../components/CampaignCard/CampaignCard.jsx";
import PageSwitcher from "../../components/PageSwitcher/PageSwitcher.jsx";
import MoreButton from "../../components/MoreButton/MoreButton.jsx";
import {
  filterByFields,
  getUniqueFieldValues,
} from "../../helpers/filterByFields.js";
import { getCampaigns } from "../../services/campaigns.js";

import FiltersBar from "./FiltersBar/FiltersBar.jsx";
import "./DonationsPage.css";

const INITIAL_VISIBLE_COUNT = 9;
const LOAD_MORE_STEP = 3;
const MAX_VISIBLE_PER_PAGE = 18;
const DEFAULT_FILTERS = {
  category: "all",
  status: "all",
  foundation: "all",
};

function DonationsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [campaigns, setCampaigns] = useState([]);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState(DEFAULT_FILTERS);

  useEffect(() => {
    let isMounted = true;

    const loadCampaigns = async () => {
      try {
        const data = await getCampaigns();

        if (!isMounted) return;

        setCampaigns(data);
        setCurrentPage(1);
        setVisibleCount(Math.min(INITIAL_VISIBLE_COUNT, data.length || 0));
      } catch (error) {
        console.error("Failed to load campaigns:", error);
      }
    };

    loadCampaigns();

    return () => {
      isMounted = false;
    };
  }, []);

  const typeOptions = useMemo(
    () => [
      { value: "all", label: "Тип збору" },
      ...getUniqueFieldValues(campaigns, "category").map((value) => ({
        value,
        label: value,
      })),
    ],
    [campaigns],
  );

  const statusOptions = useMemo(
    () => [
      { value: "all", label: "Завершення збору" },
      { value: "active", label: "Активні" },
      { value: "closed", label: "Завершені" },
    ],
    [],
  );

  const organizationOptions = useMemo(
    () => [
      { value: "all", label: "Організація" },
      ...getUniqueFieldValues(campaigns, "foundation").map((value) => ({
        value,
        label: value,
      })),
    ],
    [campaigns],
  );

  const filteredCampaigns = useMemo(
    () =>
      filterByFields(campaigns, [
        { field: "category", value: appliedFilters.category },
        { field: "status", value: appliedFilters.status },
        { field: "foundation", value: appliedFilters.foundation },
      ]),
    [campaigns, appliedFilters],
  );

  const pageCampaigns = useMemo(() => {
    const startIndex = (currentPage - 1) * MAX_VISIBLE_PER_PAGE;
    return filteredCampaigns.slice(startIndex, startIndex + MAX_VISIBLE_PER_PAGE);
  }, [filteredCampaigns, currentPage]);

  const visibleCampaigns = useMemo(
    () => pageCampaigns.slice(0, visibleCount),
    [pageCampaigns, visibleCount],
  );

  const totalPages = useMemo(() => {
    if (filteredCampaigns.length === 0) return 1;

    return Math.max(1, Math.ceil(filteredCampaigns.length / MAX_VISIBLE_PER_PAGE));
  }, [filteredCampaigns.length]);

  useEffect(() => {
    setVisibleCount(Math.min(INITIAL_VISIBLE_COUNT, pageCampaigns.length));
  }, [currentPage, pageCampaigns.length]);

  const onLoadMore = () => {
    const pageMaxVisible = Math.min(MAX_VISIBLE_PER_PAGE, pageCampaigns.length);

    if (visibleCount < pageMaxVisible) {
      setVisibleCount((prev) => Math.min(prev + LOAD_MORE_STEP, pageMaxVisible));
      return;
    }

    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const onPageChange = (page) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(nextPage);
  };

  const onFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const onApplyFilters = () => {
    setAppliedFilters({ ...filters });
    setCurrentPage(1);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const onResetFilters = () => {
    setFilters({ ...DEFAULT_FILTERS });
    setAppliedFilters({ ...DEFAULT_FILTERS });
    setCurrentPage(1);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    // <main className="donations-page">
    //   <Header />
    <>
      <section className="donations-page__top">
        <HeroSection
          title="Рій помсти 24/7: б'ємо ворога вдень та вночі"
          description="Залишилось зібрати зовсім трохи. Без тебе не впораємось!"
          buttonText="Підтримати"
        />

        <div className="donations-page__container donations-page__filters-strip">
          <div className="donations-page__filters">
            <FiltersBar
              typeOptions={typeOptions}
              statusOptions={statusOptions}
              organizationOptions={organizationOptions}
              filters={filters}
              onFilterChange={onFilterChange}
              onApply={onApplyFilters}
              onReset={onResetFilters}
            />
          </div>
        </div>
      </section>

      <section className="donations-page__content">
        <div className="donations-page__container donations-page__content-shell">
          <div className="donations-page__content-frame">
            {visibleCampaigns.length > 0 ? (
              <div className="donations-page__grid">
                {visibleCampaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} {...campaign} />
                ))}
              </div>
            ) : (
              <p className="donations-page__empty">За цими фільтрами зборів не знайдено.</p>
            )}

            <div className="donations-page__load-more">
              <MoreButton
                onClick={onLoadMore}
                disabled={
                  visibleCampaigns.length === 0
                  || (currentPage >= totalPages && visibleCount >= pageCampaigns.length)
                }
              >
                {visibleCount < pageCampaigns.length ? "Показати ще ↓" : "Наступна сторінка ↓"}
              </MoreButton>
            </div>

            <PageSwitcher
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </section>
    </>
    // </main>
  );
}

export default DonationsPage;
