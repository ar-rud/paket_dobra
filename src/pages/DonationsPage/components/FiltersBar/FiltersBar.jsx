import "./FiltersBar.css";

function FiltersBar({
  typeOptions,
  statusOptions,
  organizationOptions,
  filters,
  onFilterChange,
  onApply,
  onReset,
}) {
  return (
    <div className="filters-bar">
      <div className="filters-bar__left">
        <select
          className="filters-bar__select"
          value={filters.category}
          onChange={(event) => onFilterChange("category", event.target.value)}
        >
          {typeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          className="filters-bar__select"
          value={filters.status}
          onChange={(event) => onFilterChange("status", event.target.value)}
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          className="filters-bar__select"
          value={filters.foundation}
          onChange={(event) => onFilterChange("foundation", event.target.value)}
        >
          {organizationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filters-bar__right">
        <button
          className="filters-bar__button filters-bar__button--secondary"
          type="button"
          onClick={onReset}
        >
          Скинути
        </button>

        <button
          className="filters-bar__button filters-bar__button--primary"
          type="button"
          onClick={onApply}
        >
          Застосувати
        </button>
      </div>
    </div>
  );
}

export default FiltersBar;
