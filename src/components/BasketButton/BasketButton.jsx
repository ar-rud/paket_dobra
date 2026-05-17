import "./BasketButton.css";

export default function BasketButton(props) {
  return (
    <button className="BasketButton-button">
      <img
        className="BasketButton-img"
        src="/src/assets/images/cart_icon_white.png"
        alt="cart-icon"
      />
    </button>
  );
}
