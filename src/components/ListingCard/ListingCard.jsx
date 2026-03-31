import './ListingCard.css';

export default function ListingCard({ image, title, price, isSold, statusPrefix, editLabel, pricePrefix, priceSuffix }) {
  const textStyle = isSold ? 'listing-card__text--muted' : 'listing-card__text--default';
  const statusText = isSold ? 'продано' : 'продається';

  return (
    <div className="listing-card">
      <div className="listing-card__content">
        <img 
          src={image} 
          alt={title} 
          className={`listing-card__image ${isSold ? 'listing-card__image--sold' : ''}`}
        />
        <div className="listing-card__details">
          <h4 className={`listing-card__title ${textStyle}`}>{title}</h4>
          <span className="listing-card__status">{statusPrefix} {statusText}</span>
        </div>
      </div>

      <div className="listing-card__meta">
        <span className={`listing-card__price ${textStyle}`}>{pricePrefix} {price} {priceSuffix}</span>

        <div className="listing-card__actions">
          <button className="listing-card__icon-button">
             <svg className="listing-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
             </svg>
          </button>

          <button className="listing-card__icon-button listing-card__icon-button--danger">
             <svg className="listing-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
             </svg>
          </button>

          <button className="listing-card__edit-button">
            {editLabel}
          </button>
        </div>
      </div>
    </div>
  );
}