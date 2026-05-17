import { useState, useEffect, useMemo } from "react";
import "./Catalog.css";
import ProductCard from "/src/components/ProductCard/ProductCard.jsx";
import MoreButton from "/src/components/MoreButton/MoreButton.jsx";
import ArrowDownIcon from "/src/assets/images/arrow_down.svg?react";

import Filters from "./Filters/Filters";
import PageSwitcher from "../../components/PageSwitcher/PageSwitcher";
import { useParams, useSearchParams } from "react-router";
import HeroSection from "/src/components/HeroSection/HeroSection.jsx";
import Breadcrumbs from "/src/components/Breadcrumbs/Breadcrumbs.jsx";

import { getProductsByCategory } from "/src/services/products";

const PAGE_SIZE = 9;

export default function Catalog(props) {
  const params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [pagesToShow, setPagesToShow] = useState(1);

  // The ONLY useEffect: Used strictly for connecting to an external system (your API)
  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const data = await getProductsByCategory(params.category);
        setProducts(data);
        // Reset pagination when navigating to a totally new category page
        setCurrentPage(1);
        setPagesToShow(1);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [params.category]);

  // --- THE FIX: Event-Driven State Updates ---
  // Instead of an effect watching searchParams, we update the state directly
  // when the user triggers a filter change.
  const handleFilterChange = (newParams) => {
    setSearchParams(newParams, { preventScrollReset: true });
    setCurrentPage(1);
    setPagesToShow(1);
  };

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

  const filteredProducts = useMemo(() => {
    return filterProducts(searchParams, products);
  }, [searchParams, products]);

  const totalPages = useMemo(() => {
    if (filteredProducts.length === 0) return 1;
    return Math.ceil(filteredProducts.length / PAGE_SIZE);
  }, [filteredProducts.length]);

  const visibleProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + pagesToShow * PAGE_SIZE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage, pagesToShow]);

  const onLoadMore = () => {
    setPagesToShow((prev) => prev + 1);
  };

  const onPageChange = (page) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(nextPage);
    setPagesToShow(1);
  };

  const catalogCategories = {
    home: "Товари для дому",
    "health-beauty": "Краса та здоровʼя",
    clothes: "Одяг та аксесуари",
    kids: "Дитячі товари",
    pets: "Зоотовари",
    hobbies: "Хобі та розваги",
    "art-craft": "Мистецтво та творчість",
    services: "Послуги",
    books: "Книги та освітні матеріали",
    electronics: "Електроніка та техніка",
  };

  const breadcrumbItems = [
    { label: "Головна", to: "/" },
    { label: "Каталог", to: "/catalog" },
    { label: `${catalogCategories[params.category]}`, current: true },
  ];

  const hasEnoughItemsForPagination = filteredProducts.length > PAGE_SIZE;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const showMoreButton =
    startIndex + pagesToShow * PAGE_SIZE < filteredProducts.length;

  return (
    <>
      <Breadcrumbs className="Catalog-breadcrumbs" items={breadcrumbItems} />
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
          // Pass the new handler here instead of standard setSearchParams
          setSearchParams={handleFilterChange}
        />

        <div className="Catalog-listAndButton-wrapper">
          <div className="Catalog-ProductCardList-wrapper">
            {isLoading ? (
              <p>Завантаження товарів...</p>
            ) : visibleProducts.length > 0 ? (
              visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  imgUrl={
                    product.images && product.images[0]
                      ? product.images[0]
                      : "/src/assets/images/vector.svg"
                  }
                  name={product.title}
                  price={product.price}
                  percentNumber={product.donationPercentage}
                  type={product.type}
                  condition={product.condition}
                  category={product.category}
                  id={product.id}
                />
              ))
            ) : (
              <p className="Catalog-empty">
                За цими фільтрами товарів не знайдено.
              </p>
            )}
          </div>

          {hasEnoughItemsForPagination && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {showMoreButton && (
                <div>
                  <MoreButton
                    className="Catalog-moreButton-products"
                    rightIcon={<ArrowDownIcon />}
                    onClick={onLoadMore}
                  >
                    Показати ще
                  </MoreButton>
                </div>
              )}
              <PageSwitcher
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
