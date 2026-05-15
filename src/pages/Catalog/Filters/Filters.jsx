import "./Filters.css";
import FilterItem from "./FilterItem/FilterItem.jsx";
import { useSearchParams } from "react-router";

export default function Filters(props) {
  // let [searchParams, setSearchParams] = useSearchParams();

  const onFilterChange = (filterName) => (event) => {
    let updatedSearchParams;
    if (event.target.checked) {
      updatedSearchParams = [
        ...props.searchParams.getAll(filterName),
        event.target.name,
      ];
    } else {
      updatedSearchParams = [...props.searchParams.getAll(filterName)].filter(
        (val) => val !== event.target.name,
      );
    }
    const newParams = new URLSearchParams(props.searchParams);

    newParams.delete(filterName);

    updatedSearchParams.forEach((val) => {
      newParams.append(filterName, val);
    });

    // newParams.append(filterName, updatedSearchParams.join(","));

    props.setSearchParams(newParams, { preventScrollReset: true });
  };

  const onTypeChange = onFilterChange("type");
  const onDonationPercentageChange = onFilterChange("donationPercentage");
  const onConditionChange = onFilterChange("condition");
  return (
    <section className="Filters-wrapper">
      <h4 className="Filters-heading">Фільтри</h4>
      <form className="Filters-form">
        <FilterItem
          name="Категорія товарів"
          filterKey="type"
          type="checkbox-list"
          onChange={onTypeChange}
          options={{
            clothes: "Одяг",
            equipment: "Спорядження",
            other: "Інше",
          }}
          searchParams={props.searchParams}
        />

        <details className="Filters-item">
          <summary className="Filters-item-name">Тип послуг</summary>
          test
        </details>

        <details className="Filters-item">
          <summary className="Filters-item-name">Розмір донату</summary>
        </details>

        <FilterItem
          name="%, який піде на донат"
          filterKey="donationPercentage"
          type="checkbox-list"
          onChange={onDonationPercentageChange}
          options={{
            100: "100%",
            75: "75%",
            50: "50%",
            25: "25%",
            15: "15%",
          }}
          searchParams={props.searchParams}
        />

        <FilterItem
          name="Стан товару"
          filterKey="condition"
          type="checkbox-list"
          onChange={onConditionChange}
          options={{
            new: "Нове",
            used: "Вживане",
            restored: "Відновлене",
          }}
          searchParams={props.searchParams}
        />

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
