import { useState } from "react";
import "./Catalog.css";
import ProductCard from "/src/components/ProductCard/ProductCard.jsx";
import MoreButton from "/src/components/MoreButton/MoreButton.jsx";

import Filters from "./Filters/Filters";
import PaginationButtons from "./PaginationButtons/PaginationButtons";
import PageSwitcher from "../../components/PageSwitcher/PageSwitcher";
import { useParams, useSearchParams } from "react-router";
import HeroSection from "/src/components/HeroSection/HeroSection.jsx";

import { products } from "./db.js";

export default function Catalog(props) {
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
        title={
          <>
            Рій помсти 24/7: <br /> б'ємо ворога вдень <br /> та вночі
          </>
        }
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
                category={product.category}
                id={product.id}

                // alt = "testAlt"
              ></ProductCard>
            ))}
          </div>
          <div>
            <MoreButton className="Catalog-moreButton-products">
                Показати ще
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
