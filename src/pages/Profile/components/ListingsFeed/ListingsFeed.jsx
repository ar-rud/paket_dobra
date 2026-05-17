import { useEffect, useState } from 'react';
import DashboardToolbar from '../DashboardToolbar/DashboardToolbar.jsx';
import ListingCard from '../ListingCard/ListingCard.jsx';
import PageSwitcher from '/src/components/PageSwitcher/PageSwitcher.jsx';
import MoreButton from '/src/components/MoreButton/MoreButton.jsx';
import './ListingsFeed.css';

const PAGE_SIZE = 4;

export default function ListingsFeed({
  tabs,
  activeTabId,
  onTabChange,
  addListingLabel,
  addListingIconSrc,
  cards,
  messageIconSrc,
  deleteIconSrc,
}) {
  const totalItems = Array.isArray(cards) ? cards.length : 0;
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));

  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState(1);
  const [expanded, setExpanded] = useState(false);

  // when tab or cards change reset pagination
  useEffect(() => {
    setCurrentPage(1);
    setVisiblePages(1);
    setExpanded(false);
  }, [activeTabId, totalItems]);

  const handlePageChange = (page) => {
    const clamped = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(clamped);
    // ensure visibility for the selected page
    // always set visiblePages to match the selected page so "Показати ще" can reappear
    setVisiblePages(clamped);
    // selecting a page shows only that page's items
    setExpanded(false);
  };

  const handleShowMore = () => {
    const next = Math.min(visiblePages + 1, totalPages);
    setVisiblePages(next);
    setExpanded(true);
    setCurrentPage(next);
  };

  // decide which items to render
  let itemsToRender = [];
  if (expanded) {
    itemsToRender = cards.slice(0, visiblePages * PAGE_SIZE);
  } else {
    const start = (currentPage - 1) * PAGE_SIZE;
    itemsToRender = cards.slice(start, start + PAGE_SIZE);
  }

  return (
    <section className="listings-feed">
      <DashboardToolbar
        tabs={tabs}
        activeTabId={activeTabId}
        onTabChange={onTabChange}
        addListingLabel={addListingLabel}
        addListingIconSrc={addListingIconSrc}
      />

      <div className="listings-feed__list">
        {itemsToRender.map((card) => (
          <ListingCard
            key={card.id}
            {...card}
            messageIconSrc={card.messageIconSrc ?? messageIconSrc}
            deleteIconSrc={card.deleteIconSrc ?? deleteIconSrc}
          />
        ))}
      </div>

      <div className="listings-feed__pagination">
        {!expanded && visiblePages < totalPages ? (
          <div className="listings-feed__more">
            <MoreButton onClick={handleShowMore}>Показати ще</MoreButton>
          </div>
        ) : null}

        <div className="listings-feed__pages">
          <PageSwitcher
            currentPage={currentPage}
            totalItems={totalItems}
            pageSize={PAGE_SIZE}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
}