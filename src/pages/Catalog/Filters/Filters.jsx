import "./Filters.css";

export default function Filters(props) {
  const onFilterChange = (filterName) => (event) => {
    let updatedFilter;
    if (event.target.checked) {
      updatedFilter = [...props.filters[filterName], event.target.name];
    } else {
      updatedFilter = [...props.filters[filterName]].filter(
        (val) => val !== event.target.name,
      );
    }

    props.setFilters({
      ...props.filters,
      [filterName]: updatedFilter,
    });
  };

  const onTypeChange = onFilterChange("type");
  const onDonationPercentageChange = onFilterChange("donationPercentage");
  const onConditionChange = onFilterChange("condition");
  return (
    <section className="Filters-wrapper">
      <h4 className="Filters-heading">Фільтри</h4>
      <form className="Filters-form">
        <details className="Filters-item">
          <summary className="Filters-item-name">Категорія товарів</summary>
          <div className="filters-options-wrapper">
            <div>
              <label>
                <input
                  className="filter-checkbox"
                  type="checkbox"
                  name="clothes"
                  onChange={onTypeChange}
                />
                <span className="filter-text">Одяг</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  className="filter-checkbox"
                  type="checkbox"
                  name="equipment"
                  onChange={onTypeChange}
                />
                <span className="filter-text">Спорядження</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  className="filter-checkbox"
                  type="checkbox"
                  name="other"
                  onChange={onTypeChange}
                />
                <span className="filter-text">Інше</span>
              </label>
            </div>
          </div>
        </details>

        <details className="Filters-item">
          <summary className="Filters-item-name">Тип послуг</summary>
          test
        </details>

        <details className="Filters-item">
          <summary className="Filters-item-name">Розмір донату</summary>
        </details>

        <details className="Filters-item">
          <summary className="Filters-item-name">%, який піде на донат</summary>
          <div className="filters-options-wrapper">
            <div>
              <label>
                <input
                  className="filter-checkbox"
                  type="checkbox"
                  name="100"
                  onChange={onDonationPercentageChange}
                />
                <span className="filter-text">100%</span>
              </label>
            </div>

            <div>
              <label>
                <input
                  className="filter-checkbox"
                  type="checkbox"
                  name="75"
                  onChange={onDonationPercentageChange}
                />
                <span className="filter-text">75%</span>
              </label>
            </div>

            <div>
              <label>
                <input
                  className="filter-checkbox"
                  type="checkbox"
                  name="50"
                  onChange={onDonationPercentageChange}
                />
                <span className="filter-text">50%</span>
              </label>
            </div>

            <div>
              <label>
                <input
                  className="filter-checkbox"
                  type="checkbox"
                  name="25"
                  onChange={onDonationPercentageChange}
                />
                <span className="filter-text">25%</span>
              </label>
            </div>

            <div>
              <label>
                <input
                  className="filter-checkbox"
                  type="checkbox"
                  name="15"
                  onChange={onDonationPercentageChange}
                />
                <span className="filter-text">15%</span>
              </label>
            </div>
          </div>
        </details>

        <details className="Filters-item">
          <summary className="Filters-item-name">Стан товару</summary>
          <div className="filters-options-wrapper">
            <div>
              <label>
                <input
                  className="filter-checkbox"
                  type="checkbox"
                  name="new"
                  onChange={onConditionChange}
                />
                <span className="filter-text">Нове</span>
              </label>
            </div>

            <div>
              <label>
                <input
                  className="filter-checkbox"
                  type="checkbox"
                  name="used"
                  onChange={onConditionChange}
                />
                <span className="filter-text">Вживане</span>
              </label>
            </div>

            <div>
              <label>
                <input
                  className="filter-checkbox"
                  type="checkbox"
                  name="restored"
                  onChange={onConditionChange}
                />
                <span className="filter-text">Відновлене</span>
              </label>
            </div>
          </div>
        </details>

        <details className="Filters-item">
          <summary className="Filters-item-name">Завершення збору</summary>
        </details>

        <details className="Filters-item">
          <summary className="Filters-item-name">Тип проєкту</summary>
        </details>

        <details className="Filters-item">
          <summary className="Filters-item-name">Організація</summary>
        </details>

        <details className="Filters-item">
          <summary className="Filters-item-name">Регіон</summary>
        </details>
      </form>
    </section>
  );
}
