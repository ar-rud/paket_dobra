import React from "react";
import "./Catalog.css";
import ProductCard from "/src/components/ProductCard/ProductCard.jsx";
import MoreButton from "/src/components/MoreButton/MoreButton.jsx";

import Filters from "./Filters/Filters";
import PaginationButtons from "./PaginationButtons/PaginationButtons";

export default function Catalog(props) {
  const products = [
    {
      url: "/src/assets/images/backpack.png",
      name: "Рюкзак для походів NEO tools 30L",
      price: "450",
      id: 1,
    },
    {
      url: "/src/assets/images/weights.png",
      name: "Обтяжувачі для рук та ніг Sister’s Aroma",
      price: "400",
      id: 2,
    },
    {
      url: "/src/assets/images/thermal-underwear.png",
      name: "Комплект термобілизни ESDY чорний",
      price: "700",
      id: 3,
    },
    {
      url: "/src/assets/images/cubes.png",
      name: "Незавершені дерев'яні кубики для моделювання",
      price: "62",
      id: 4,
    },
    {
      url: "/src/assets/images/candles.png",
      name: "Набір зі створення 5-ти соєвих ароматичних свічок",
      price: "650",
      id: 5,
    },
    {
      url: "/src/assets/images/stickers.jpg",
      name: "Крафтові стікери ручної роботи 5 шт. в наборі",
      price: "250",
      id: 6,
    },
    {
      url: "/src/assets/images/football.jpg",
      name: "Перший мʼяч Олександра Зінченка",
      price: "50000",
      id: 7,
    },
  ];
  return (
    <div className="Catalog-wrapper">
      <Filters />

      <div className="Catalog-listAndButton-wrapper">
        <div className="Catalog-ProductCardList-wrapper">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imgUrl={product.url}
              name={product.name}
              price={product.price}
              // alt = "testAlt"
            ></ProductCard>
          ))}
        </div>
        <div>
          <MoreButton className="Catalog-moreButton-products">
            Показати ще
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0013 4.16675V15.8334M10.0013 15.8334L15.8346 10.0001M10.0013 15.8334L4.16797 10.0001"
                stroke="#181D27"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </MoreButton>
        </div>
        <PaginationButtons />
      </div>
    </div>
  );
}
