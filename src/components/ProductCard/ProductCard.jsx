import "./ProductCard.css";

import MoreButton from "/src/components/MoreButton/MoreButton.jsx";
import BasketButton from "/src/components/BasketButton/BasketButton.jsx";
import ProductInfo from "/src/components/ProductInfo/ProductInfo.jsx";

import { useNavigate } from "react-router";

export default function ProductCard(props) {
  const navigate = useNavigate();
  const goToProduct = () => navigate(`/catalog/${props.category}/${props.id}`);
  return (
    <div className="ProductCard-container">
      <ProductInfo
        imgUrl={props.imgUrl}
        name={props.name}
        price={props.price}
        alt={props.alt}
        percentNumber={props.percentNumber}
      ></ProductInfo>
      <div className="ProductCard-buttons">
        <MoreButton
          style={{
            boxSizing: "border-box",
            maxWidth: "200px",
            width: "100%",
          }}
          onClick={goToProduct}
        >
          Детальніше
        </MoreButton>
        <BasketButton></BasketButton>
      </div>
    </div>
  );
}
