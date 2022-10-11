import React, { useState } from "react";
import { useGlobalContext } from "../../context";

function ProductInfo({ Products }) {
  const { image, new: newProduct, name, description, price, slug } = Products;
  const { getWidth, setCartInfo, CartInfo } = useGlobalContext();

  const [QuantityValue, setQuantityValue] = useState(1);

  const addToCart = () => {
    const newItem = { price, image, name, slug, quantity: QuantityValue };

    let newItems = CartInfo.find((item) => item.slug === slug);
    if (newItems) {
      const newQuantity = newItems.quantity + QuantityValue;
      const newQuantityItem = { ...newItems, quantity: newQuantity };
      //i just wrote this, i havent understnd how it works
      setCartInfo(() => {
        return CartInfo.map((x) => (x.slug === slug ? newQuantityItem : x));
      });
    } else {
      setCartInfo([...CartInfo, newItem]);
    }
  };

  return (
    <section className="productCart">
      <div className="productCart-container contain">
        <div data-aos="fade-right" className="productImg">
          <img
            src={
              getWidth < 600
                ? image.mobile
                : getWidth > 600 && getWidth <= 768
                ? image.tablet
                : image.desktop
            }
            alt={name}
          />
        </div>
        <div className="productInfoContainer">
          <div className="productInfo">
            <p
              data-aos="fade-left"
              className={`${newProduct ? "isNew" : "isNew HideIsNew"}`}
            >
              New Product
            </p>
            <h1 data-aos="fade-left" data-aos-delay="200">
              {name}
            </h1>
            <p data-aos="fade-left" data-aos-delay="400" className="desc">
              {description}
            </p>
            <h4 data-aos="fade-left" data-aos-delay="600">
              ${price}
            </h4>
            <div
              data-aos="fade-left"
              data-aos-delay="800"
              className="button-section"
            >
              <div className="counter">
                <button
                  onClick={() => setQuantityValue(QuantityValue - 1)}
                  className="btn-counter"
                  disabled={QuantityValue === 1}
                >
                  -
                </button>
                <p value={QuantityValue} className="btn-counter">
                  {QuantityValue}
                </p>
                <button
                  onClick={() => setQuantityValue(QuantityValue + 1)}
                  className="btn-counter"
                >
                  +
                </button>
              </div>
              <button onClick={addToCart} className="buttons">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
