import "./PageSwitcher.css";




function PageSwitcher({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

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
        {pages.map((page) => (
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
        ))}
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
