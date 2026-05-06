import "./FilterItem.css";

export default function FilterItem(props) {
  // props
  /* 
     name
     filterKey 
     type    
     onChange
     options
     searchParams
*/

  const activeValues = props.searchParams
    ? props.searchParams.getAll(props.filterKey)
    : [];

  if (props.type === "checkbox-list") {
    return (
      <details className="Filters-item">
        <summary className="Filters-item-name">{props.name}</summary>
        <div className="filters-options-wrapper">
          {Object.entries(props.options).map((option) => {
            console.log(activeValues);
            console.log(option[0]);
            return (
              <div key={option[0]}>
                <label>
                  <input
                    className="filter-checkbox"
                    type="checkbox"
                    name={option[0]}
                    onChange={props.onChange}
                    // checked={activeValues.includes(option[0])}
                  />
                  <span className="filter-text">{option[1]}</span>
                </label>
              </div>
            );
          })}
        </div>
      </details>
    );
  }
  return <></>;
}
