import { useParams } from "react-router";
import "./ProductPage.css";
import { products } from "/src/pages/catalog/db.js";
import { campaigns } from "/src/pages/Catalog/db.js";
import ProductCard from "/src/components/ProductCard/ProductCard.jsx";

export default function ProductPage(props) {
  const params = useParams();
  const productId = params.id;

  // get product by id
  var product;
  for (let prod of products) {
    // console.log(prod.id + "  |  " + productId + typeof )
    if (prod.id.toString() === productId) {
      // console.log(prod);
      product = { ...prod };
      break;
    }
  }

  // temp crutch for new product field: extraImgUrls
  let arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(product.url);
  }
  product.extraImgUrls = arr;

  // console.log(product.extraImgUrls);
  const productPriceAddPercent =
    10 ** Math.floor(product.price / 100).toString().length;
  return (
    <div className="product-page-wrapper">
      {/* The product id is {productId} */}
      {/* <ProductCard
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
      ></ProductCard> */}
      <aside className="product-page-aisde-wrapper">
        <div className="product-page-images-top">
          <div className="product-page-image-main-wrapper">
            <img
              className="product-page-image-main"
              src={product.url}
              alt="product img"
            />
          </div>
        </div>
        {/* to be reviewed */}
        {product?.extraImgUrls?.length > 1 && (
          <div className="product-page-images-bottom">
            {product.extraImgUrls.map((url, i) => {
              console.log(i);
              return (
                <div key={i} className="product-page-image-extra-wrapper">
                  <img
                    className="product-page-image-extra"
                    src={url}
                    alt="product img"
                  />
                </div>
              );
            })}
          </div>
        )}
      </aside>
      <section className="product-page-section-wrapper">
        <header className="product-page-section-header">
          <section className="product-page-main-info">
            <span className="product-page-donation-box product-page-green-box">
              {`${product.donationPercentage}% донату`}
            </span>
            <h3 className="product-page-section-heading">{product.name}</h3>
            <div className="product-page-price-wrapper">
              <figure className="product-page-price">{`${product.price} грн`}</figure>
              <button className="product-page-price-add product-page-green-box">{`+${productPriceAddPercent} грн`}</button>
            </div>
          </section>

          {/* MARK: OPTIONAL to do */}
          {/*temp crutch for display condition*/}
          {true /*false*/ && (
            <section className="product-page-section-foundation">
              <div className="product-page-section-foundation-top-wrapper">
                <img
                  className="product-page-section-foundation-alert-icon"
                  src="/src/assets/images/alert_icon.svg"
                  alt="exclamation icon"
                />
                <div className="product-page-section-foundation-text-wrapper">
                  <p className="product-page-section-foundation-text">
                    Продавець цього не обрав фонд для спрямування коштів від
                    покупки. Маєте шанс підтримати важливу вам ініціативу!
                  </p>
                  <p className="product-page-section-foundation-text">
                    Відмовляючись від вибору, кошти буде спрямовано на нагальні
                    збори.
                  </p>
                </div>
              </div>
              {/* <form className="product-page-section-foundation-bottom-wrapper">
              <span className="product-page-section-foundation-bottom-wrapper"></span>
              <input type="" />
            </form> */}

              <label
                className="product-page-section-foundation-label"
                htmlFor="product-page-foundation-select"
              >
                Оберіть благодійну організацію
              </label>

              <select
                className="product-page-section-foundation-select"
                id="product-page-foundation-select"
                name="foundations"
              >
                <option value="">Благодійні організації</option>
                {campaigns.map((campaign) => (
                  <option
                    key={campaign.id}
                    value={campaign.id}
                  >{`${campaign.title} від ${campaign.foundation}`}</option>
                ))}
              </select>
            </section>
          )}
          <button className="product-page-button-buy">Додати до корзини</button>
        </header>
        <main className="product-page-section-main">
          <section className="product-page-section-description">
            <span className="product-page-description-span">Опис товару:</span>
            <p className="product-page-description-text">{product.description}</p>
          </section>
          <footer className="product-page-section-footer">
            <p className="product-page-section-footer-text">
              Кошти від продажу цього товару йдуть на підтримку армії, зокрема
              на проєкт закупівлі дронів та розвідувального обладнання для
              підвищення безпеки військових на передовій.
            </p>
            <p className="product-page-section-footer-text-green">
              *Частина коштів (5% від оплаченої суми) піде на обслуговування
              платформи.
            </p>
          </footer>
        </main>
      </section>
    </div>
  );
}
