import "./BasketButton.css";

export default function BasketButton(props) {
  return (
    <button className="BasketButton-button">
      <img
        className="BasketButton-img"
        src="/src/assets/images/basket-icon.png"
        alt="basket-icon"
      />
    </button>
  );
}
