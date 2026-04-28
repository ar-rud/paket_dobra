import "./PageSwitcher.css";

function PageSwitcher({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let page = 1; page <= totalPages; page += 1) {
    if (page <= 3 || page > totalPages - 3) {
      pages.push(page);
      continue;
    }

    if (pages[pages.length - 1] !== "dots") {
      pages.push("dots");
    }
  }

  return (
    <div className="page-switcher">
      <button
        className="page-switcher__nav"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        type="button"
      >
        ← Попередня
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
              onClick={() => onPageChange(page)}
              type="button"
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        className="page-switcher__nav"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        type="button"
      >
        Наступна →
      </button>
    </div>
  );
}

export default PageSwitcher;
