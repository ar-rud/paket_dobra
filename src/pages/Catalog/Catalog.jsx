import { useState } from "react";
import "./Catalog.css";
import ProductCard from "/src/components/ProductCard/ProductCard.jsx";
import MoreButton from "/src/components/MoreButton/MoreButton.jsx";

import Filters from "./Filters/Filters";
import PaginationButtons from "./PaginationButtons/PaginationButtons";
import PageSwitcher from "../../components/PageSwitcher/PageSwitcher";
import { useParams, useSearchParams } from "react-router";
import HeroSection from "/src/components/HeroSection/HeroSection.jsx";

export default function Catalog(props) {
  const products = [
    {
      url: "/src/assets/images/backpack.png",
      name: "Рюкзак для походів NEO tools 30L",
      price: 450,
      id: 1,
      type: "equipment",
      donationPercentage: 15,
      condition: "new",
      category: "hobbies",
    },
    {
      url: "/src/assets/images/weights.png",
      name: "Обтяжувачі для рук та ніг Sister’s Aroma",
      price: 400,
      id: 2,
      type: "equipment",
      donationPercentage: 25,
      condition: "used",
      category: "hobbies",
    },
    {
      url: "/src/assets/images/thermal-underwear.png",
      name: "Комплект термобілизни ESDY чорний",
      price: 700,
      id: 3,
      type: "clothes",
      donationPercentage: 75,
      condition: "new",
      category: "hobbies",
    },
    {
      url: "/src/assets/images/cubes.png",
      name: "Незавершені дерев'яні кубики для моделювання",
      price: 62,
      id: 4,
      type: "other",
      donationPercentage: 25,
      condition: "restored",
      category: "hobbies",
    },
    {
      url: "/src/assets/images/candles.png",
      name: "Набір зі створення 5-ти соєвих ароматичних свічок",
      price: 650,
      id: 5,
      type: "other",
      donationPercentage: 15,
      condition: "used",
      category: "hobbies",
    },
    {
      url: "/src/assets/images/stickers.jpg",
      name: "Крафтові стікери ручної роботи 5 шт. в наборі",
      price: 250,
      id: 6,
      type: "other",
      donationPercentage: 100,
      condition: "restored",
      category: "hobbies",
    },
    {
      url: "/src/assets/images/football.jpg",
      name: "Перший мʼяч Олександра Зінченка",
      price: 50000,
      id: 7,
      type: "equipment",
      donationPercentage: 50,
      condition: "used",
      category: "hobbies",
    },
    {
      url: "/src/assets/images/vector.svg",
      name: "Заглушка дім",
      price: 100,
      id: 8,
      type: "test",
      donationPercentage: 50,
      condition: "used",
      category: "home",
    },
    {
      url: "/src/assets/images/vector.svg",
      name: "Заглушка краса здоров'я",
      price: 100,
      id: 9,
      type: "test",
      donationPercentage: 50,
      condition: "used",
      category: "health-beauty",
    },
    {
      url: "/src/assets/images/vector.svg",
      name: "Заглушка одяг та аксесуари",
      price: 100,
      id: 10,
      type: "test",
      donationPercentage: 50,
      condition: "used",
      category: "clothes",
    },
    {
      url: "/src/assets/images/vector.svg",
      name: "Заглушка дитячі товари",
      price: 100,
      id: 11,
      type: "test",
      donationPercentage: 50,
      condition: "used",
      category: "kids",
    },
    {
      url: "/src/assets/images/vector.svg",
      name: "Заглушка зоотовари",
      price: 100,
      id: 12,
      type: "test",
      donationPercentage: 50,
      condition: "used",
      category: "pets",
    },
    {
      url: "/src/assets/images/vector.svg",
      name: "Заглушка хобі та розваги",
      price: 100,
      id: 13,
      type: "test",
      donationPercentage: 50,
      condition: "used",
      category: "hobbies",
    },
    {
      url: "/src/assets/images/vector.svg",
      name: "Заглушка мистецтво та творчість",
      price: 100,
      id: 14,
      type: "test",
      donationPercentage: 50,
      condition: "used",
      category: "art-craft",
    },
    {
      url: "/src/assets/images/vector.svg",
      name: "Заглушка послуги",
      price: 100,
      id: 15,
      type: "test",
      donationPercentage: 50,
      condition: "used",
      category: "services",
    },
    {
      url: "/src/assets/images/vector.svg",
      name: "Заглушка книги та освітні матеріали",
      price: 100,
      id: 16,
      type: "test",
      donationPercentage: 50,
      condition: "used",
      category: "books",
    },
    {
      url: "/src/assets/images/vector.svg",
      name: "Заглушка електроніка та техніка",
      price: 100,
      id: 17,
      type: "test",
      donationPercentage: 50,
      condition: "used",
      category: "electronics",
    },
  ];

  const params = useParams();

  let productsCategory = products.filter((x) => x.category === params.category);
  // let productsCategory = products.filter((x) => true);

  let [searchParams, setSearchParams] = useSearchParams();

  // {
  //     type: [],
  //     donationPercentage: [],
  //     condition: [],
  //   }

  // const [filters, setFilters] = useState({
  //   type: [],
  //   donationPercentage: [],
  //   condition: [],
  // });

  function filterProducts(searchParams, productArr) {
    const filters = ["type", "donationPercentage", "condition"];

    let filteredProducts = productArr;

    let filterValues;
    for (let filterName of filters) {
      filterValues = searchParams.getAll(filterName);
      filteredProducts = filterValues.length
        ? filteredProducts.filter((val) =>
            filterValues.includes(val[filterName].toString()),
          )
        : filteredProducts;
    }

    return filteredProducts;
  }

  return (
    <>
      <HeroSection
        title="Рій помсти 24/7: б'ємо ворога вдень та вночі"
        description="Залишилось зібрати зовсім трохи. Без тебе не впораємось!"
        buttonText="Підтримати"
      />
      <div className="Catalog-wrapper">
        <Filters
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />

        <div className="Catalog-listAndButton-wrapper">
          <div className="Catalog-ProductCardList-wrapper">
            {filterProducts(searchParams, productsCategory).map((product) => (
              <ProductCard
                key={product.id}
                imgUrl={product.url}
                name={product.name}
                price={product.price}
                percentNumber={product.donationPercentage}
                type={product.type}
                condition={product.condition}
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
          <PageSwitcher
            // currentPage={currentPage}
            totalPages={10}
            // onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}
