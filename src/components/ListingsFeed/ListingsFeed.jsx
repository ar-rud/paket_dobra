import DashboardToolbar from '../DashboardToolbar/DashboardToolbar.jsx';
import ListingCard from '../ListingCard/ListingCard.jsx';
import './ListingsFeed.css';

export default function ListingsFeed({ tabs, addListingLabel, listingsData, statusPrefix, editLabel, pricePrefix, priceSuffix }) {
  return (
    <div className="listings-feed">
      <DashboardToolbar tabs={tabs} addListingLabel={addListingLabel} />

      <div className="listings-feed__list">
        {listingsData.map((item) => (
          <ListingCard 
            key={item.id}
            title={item.title}
            price={item.price}
            isSold={item.isSold}
            image={item.image}
            statusPrefix={statusPrefix}
            editLabel={editLabel}
            pricePrefix={pricePrefix}
            priceSuffix={priceSuffix}
          />
        ))}
      </div>
    </div>
  );
}