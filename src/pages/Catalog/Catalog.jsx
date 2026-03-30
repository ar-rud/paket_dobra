import React from "react";
import "./Catalog.css";
import ProductCard from "/src/components/ProductCard/ProductCard.jsx";
import MoreButton from "/src/components/MoreButton/MoreButton.jsx";

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
    <>
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
        <MoreButton>Показати ще</MoreButton>
      </div>
    </>
  );
}
