import { useEffect, useState } from 'react';
import './ListingCard.css';

export default function ListingCard({
  imageSrc,
  imageAlt,
  imagePlaceholder = false,
  title,
  subtitle,
  priceText,
  muted = false,
  imageMuted = false,
  showMessageAction = false,
  showDeleteAction = false,
  primaryActionLabel,
  actionsDisabled = false,
  messageIconSrc,
  deleteIconSrc,
  messageActionAriaLabel = 'Повідомлення',
  deleteActionAriaLabel = 'Видалити',
}) {
  const [imageLoadFailed, setImageLoadFailed] = useState(false);

  useEffect(() => {
    setImageLoadFailed(false);
  }, [imageSrc]);

  const textToneClassName = muted ? 'listing-card__text--muted' : 'listing-card__text--default';
  const stateClassName = muted ? 'listing-card--muted' : 'listing-card--active';
  const imageClassName = imageMuted ? 'listing-card__image listing-card__image--muted' : 'listing-card__image';
  const shouldShowPlaceholder = imagePlaceholder || !imageSrc || imageLoadFailed;

  return (
    <article className={`listing-card ${stateClassName}`}>
      <div className="listing-card__left">
        <div className="listing-card__media">
          {shouldShowPlaceholder ? (
            <div className="listing-card__image-placeholder" aria-hidden="true"></div>
          ) : (
            <img
              src={imageSrc}
              alt={imageAlt || title}
              className={imageClassName}
              onError={() => setImageLoadFailed(true)}
            />
          )}
        </div>

        <div className="listing-card__details">
          <h4 className={`listing-card__title ${textToneClassName}`}>{title}</h4>
          {subtitle ? <p className={`listing-card__subtitle ${textToneClassName}`}>{subtitle}</p> : null}
        </div>
      </div>

      <div className="listing-card__right">
        <p className={`listing-card__price ${textToneClassName}`}>{priceText}</p>

        <div className="listing-card__actions">
          {showMessageAction && messageIconSrc ? (
            <button
              type="button"
              className="listing-card__icon-button listing-card__icon-button--message"
              aria-label={messageActionAriaLabel}
              disabled={actionsDisabled}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="listing-card__icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ) : null}

          {showDeleteAction && deleteIconSrc ? (
            <button
              type="button"
              className="listing-card__icon-button listing-card__icon-button--delete"
              aria-label={deleteActionAriaLabel}
              disabled={actionsDisabled}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="listing-card__icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H5M5 6H21M5 6V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21086 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ) : null}

          {primaryActionLabel ? (
            <button
              type="button"
              className="listing-card__primary-button"
              disabled={actionsDisabled}
            >
              {primaryActionLabel}
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}