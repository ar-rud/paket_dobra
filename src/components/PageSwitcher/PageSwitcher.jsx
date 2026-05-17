import "./PageSwitcher.css";
import ArrowLeftIcon from "../../assets/images/arrow_left.svg?react";
import ArrowRightIcon from "../../assets/images/arrow_right.svg?react";

function PageSwitcher({ 
  currentPage, 
  totalPages, 
  totalItems, 
  pageSize = 10, 
  hoverColor = "#99a235", 
  disabledColor = "#888888",
  onPageChange 
}) {
  const computedTotalPages = totalItems ? Math.max(1, Math.ceil(totalItems / pageSize)) : Math.max(1, totalPages || 1);
  const pages = [];

  if (computedTotalPages < 8) {
    for (let page = 1; page <= computedTotalPages; page += 1) {
      pages.push(page);
    }
  } else {
    for (let page = 1; page <= computedTotalPages; page += 1) {
      if (page <= 3 || page > computedTotalPages - 3) {
        pages.push(page);
        continue;
      }

      if (pages[pages.length - 1] !== 'dots') {
        pages.push('dots');
      }
    }
  }

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
      
      // Allow React to re-render the DOM with the new items before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <div 
      className="page-switcher" 
      style={{ 
        "--ps-hover-color": hoverColor,
        "--ps-disabled-color": disabledColor 
      }}
    >
      <button
        className="page-switcher__nav"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        type="button"
      >
        <ArrowLeftIcon className="page-switcher__nav-icon" aria-hidden="true" />
        Попередня
      </button>

      <div className="page-switcher__pages">
        {pages.map((page, index) =>
          page === "dots" ? (
            <span key={`dots-${index}`} className="page-switcher__dots">
              ...
            </span>
          ) : (
            <button
              key={page}
              className={
                page === currentPage
                  ? "page-switcher__page page-switcher__page--active"
                  : "page-switcher__page"
              }
              onClick={() => handlePageChange(page)}
              type="button"
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        className="page-switcher__nav"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === computedTotalPages}
        type="button"
      >
        Наступна
        <ArrowRightIcon className="page-switcher__nav-icon" aria-hidden="true" />
      </button>
    </div>
  );
}

export default PageSwitcher;