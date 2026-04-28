import "./FiltersBar.css";

function FiltersBar({ typeOptions, statusOptions, organizationOptions }) {
  return (
    <div className="filters-bar">
      <div className="filters-bar__left">
        <select className="filters-bar__select">
          {typeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select className="filters-bar__select">
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select className="filters-bar__select">
          {organizationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filters-bar__right">
        <button className="filters-bar__button filters-bar__button--secondary">
          Скинути
        </button>

        <button className="filters-bar__button filters-bar__button--primary">
          Застосувати
        </button>
      </div>
    </div>
  );
}

export default FiltersBar;