import "./ProductInfo.css";
import floatToCurrency from "/src/helpers/floatToCurrency.js";
import urlToFileName from "/src/helpers/urlToFileName.js";
import DonationPercent from "/src/components/DonationPercent/DonationPercent.jsx";

export default function ProductInfo(props) {
  return (
    <div className="ProductInfo-wrapper">
      <div className="ProductInfo-img-wrapper">
        <img
          className="ProductInfo-img"
          src={props.imgUrl}
          alt={props.alt ? props.alt : urlToFileName(props.imgUrl)}
        />
        <DonationPercent percentNumber="15"></DonationPercent>
      </div>
      <section className="ProductInfo-section">
        <p className="ProductInfo-name">{props.name}</p>
        <p className="ProductInfo-price">
          Від {floatToCurrency(props.price)} грн
        </p>
      </section>
    </div>
  );
}
