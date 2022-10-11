import React from "react";
import { useGlobalContext } from "../../context";

function ProductGalleries({ Products }) {
  const { getWidth } = useGlobalContext();
  const { gallery, name } = Products;
  const { first, second, third } = gallery;
  return (
    <section className="gallery">
      <section className="gallery-container contain">
        <div className="grid-gallery">
          <div data-aos="fade-right" className="gallery-img">
            <img
              src={
                getWidth < 600
                  ? first.mobile
                  : getWidth > 600 && getWidth <= 768
                  ? first.tablet
                  : first.desktop
              }
              alt={name}
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="gallery-img"
          >
            <img
              src={
                getWidth < 600
                  ? second.mobile
                  : getWidth > 600 && getWidth <= 768
                  ? second.tablet
                  : second.desktop
              }
              alt={name}
            />
          </div>
        </div>
        <div data-aos="fade-left" className="whole-gallery">
          <img
            src={
              getWidth < 600
                ? third.mobile
                : getWidth > 600 && getWidth <= 768
                ? third.tablet
                : third.desktop
            }
            alt={name}
          />
        </div>
      </section>
    </section>
  );
}

export default ProductGalleries;
