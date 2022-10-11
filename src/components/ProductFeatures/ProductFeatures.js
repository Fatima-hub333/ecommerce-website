import React from "react";

function ProductFeatures({ Products }) {
  const { features, includes } = Products;
  const newString = features.split("\n");
  return (
    <section className="ProductFeatures">
      <section className="features-container contain">
        <div data-aos="fade-up" className="features">
          <h3 className="feature-header">FEATURES</h3>
          {newString.map((para, index) => {
            return (
              <p className={`${index % 2 === 0 ? null : "margin"}`} key={index}>
                {para}
              </p>
            );
          })}
        </div>
        <div data-aos="fade-left" className="box">
          <h3 className="feature-header">IN THE BOX</h3>
          <ul>
            {includes.map((include, index) => {
              const { item, quantity } = include;
              return (
                <li key={index}>
                  <span className="orange">{quantity}x</span>
                  <span style={{ marginLeft: "30px" }}>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </section>
  );
}

export default ProductFeatures;
