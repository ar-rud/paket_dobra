import DashboardToolbar from '../DashboardToolbar/DashboardToolbar.jsx';
import ListingCard from '../ListingCard/ListingCard.jsx';
import './ListingsFeed.css';

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
        {cards.map((card) => (
          <ListingCard
            key={card.id}
            {...card}
            messageIconSrc={card.messageIconSrc ?? messageIconSrc}
            deleteIconSrc={card.deleteIconSrc ?? deleteIconSrc}
          />
        ))}
      </div>
    </section>
  );
}