import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";
import speaker from "../assets/shared/desktop/image-speakers.png";
import headphone from "../assets/shared/desktop/image-headphones.png";
import earphone from "../assets/shared/desktop/image-earphones.png";

function CategoryNavigation() {
  return (
    <section className="products">
      <section className="product-container">
        <Link
          data-aos="fade-right"
          className="HomeCategoryContainer"
          to="/headphones"
        >
          <div className="homeimage">
            <div className="img-home">
              <img src={headphone} alt="HeadPhone" />
            </div>
          </div>
          <div className="homeCategoryInfo">
            <h3>HeadPhones</h3>
            <div className="mobileCategorySection">
              <p>
                Shop now
                <span>
                  <img src={arrow} alt="arrow-right" />
                </span>
              </p>
            </div>
          </div>
        </Link>
        <Link
          data-aos="fade-up"
          className="HomeCategoryContainer"
          to="/speakers"
        >
          <div className="homeimage">
            <div className="img-home">
              <img src={speaker} alt="Speaker" />
            </div>
          </div>
          <div className="homeCategoryInfo">
            <h3>Speakers</h3>
            <div className="mobileCategorySection">
              <p>
                Shop now
                <span>
                  <img src={arrow} alt="arrow-right" />
                </span>
              </p>
            </div>
          </div>
        </Link>
        <Link
          data-aos="fade-up"
          className="HomeCategoryContainer"
          to="/earphones"
        >
          <div className="homeimage">
            <div className="img-home">
              <img src={earphone} alt="EarPhones" />
            </div>
          </div>
          <div className="homeCategoryInfo">
            <h3>EarPhones</h3>
            <div className="mobileCategorySection">
              <p>
                Shop now
                <span>
                  <img src={arrow} alt="arrow-right" />
                </span>
              </p>
            </div>
          </div>
        </Link>
      </section>
    </section>
  );
}

export default CategoryNavigation;
