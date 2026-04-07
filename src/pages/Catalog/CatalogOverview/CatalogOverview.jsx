import "./CatalogOverview.css";

export default function CatalogOverview(props) {
  let decoratingBlocks = [
    [1, 1],
    [1, 5],
    [1, 6],
    [1, 8],
    [1, 9],
    [2, 5],
    [2, 10],
    [2, 11],
    [3, 1],
    [3, 2],
    [3, 4],
    [3, 8],
    [3, 10],
    [3, 11],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 7],
    [4, 8],
    [4, 9],
    [4, 10],
    [4, 11],
    [5, 1],
    [5, 3],
    [5, 4],
    [5, 8],
    [5, 9],
  ];

  return (
    <div className="CatalogOverview-wrapper">
      <div className="CatalogOverview-grid">
        <section className="CatalogOverview-section">
          <h2 className="CatalogOverview-section-heading">
            Обирай те, що необхідно
          </h2>
          <p className="CatalogOverview-section-text">
            У нас ти можеш знайти багато речей, але якщо не підбереш, все одно
            повертайся!
          </p>
        </section>
        <a
          className="CatalogOverview-item CatalogOverview-home-product"
          href=""
        >
          Товари для дому
        </a>
        <a
          className="CatalogOverview-item CatalogOverview-beauty-health"
          href=""
        >
          Краса та здоровʼя
        </a>
        <a className="CatalogOverview-item CatalogOverview-clothes" href="">
          Одяг та аксесуари
        </a>
        <a
          className="CatalogOverview-item CatalogOverview-kids-product"
          href=""
        >
          Дитячі товари
        </a>
        <a className="CatalogOverview-item CatalogOverview-zoo-product" href="">
          Зоотовари
        </a>
        <a className="CatalogOverview-item CatalogOverview-hobby" href="">
          Хобі та розваги
        </a>
        <a className="CatalogOverview-item CatalogOverview-art" href="">
          Мистецтво та творчість
        </a>
        <a className="CatalogOverview-item CatalogOverview-service" href="">
          Послуги
        </a>
        <a className="CatalogOverview-item CatalogOverview-book" href="">
          Книги та освітні матеріали
        </a>
        <a className="CatalogOverview-item CatalogOverview-applience" href="">
          Електроніка та техніка
        </a>
        {/*https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n*/}
        {/*https://math.stackexchange.com/questions/23503/create-unique-number-from-2-numbers*/}
        {decoratingBlocks.map(([row, col]) => {
          return (
            <div
              key={((row + col) * (row + col + 1)) / 2 + col}
              className="CatalogOverview-filler"
              style={{
                gridRow: row,
                gridColumn: col,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
