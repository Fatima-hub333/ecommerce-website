import React from "react";

function DetailsCategory({
  children,
  classInfo,
  newProduct,
  name,
  info,
  image,
}) {
  return (
    <>
      <section className="category">
        <section className={classInfo}>
          <div data-aos="fade-up" className="category-img">
            <img src={image} alt={name} />
          </div>
          <section className="category-info-container">
            <div className="category-info">
              <p
                data-aos="fade-up"
                className={`${
                  newProduct ? "categoryInfoP " : "categoryInfoP displayNone"
                }`}
              >
                New Product
              </p>
              <h1 data-aos="fade-up" data-aos-delay="100">
                {name}
              </h1>
              <p data-aos="fade-up" data-aos-delay="200">
                {info}
              </p>
              <div data-aos="fade-up" data-aos-delay="300">
                {children}
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
DetailsCategory.defaultProps = {
  classInfo: "category-container",
};
export default DetailsCategory;
