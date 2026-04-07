import "./ProductCard.css";

import MoreButton from "/src/components/MoreButton/MoreButton.jsx";
import BasketButton from "/src/components/BasketButton/BasketButton.jsx";
import ProductInfo from "/src/components/ProductInfo/ProductInfo.jsx";

export default function ProductCard(props) {
  return (
    <div className="ProductCard-container">
      <ProductInfo
        imgUrl={props.imgUrl}
        name={props.name}
        price={props.price}
        alt={props.alt}
      ></ProductInfo>
      <div className="ProductCard-buttons">
        <MoreButton
          style={{
            boxSizing: "border-box",
            maxWidth: "200px",
          }}
        >
          Детальніше
        </MoreButton>
        <BasketButton></BasketButton>
      </div>
    </div>
  );
}
