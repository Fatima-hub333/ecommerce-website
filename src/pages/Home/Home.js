import React from "react";
import { Link } from "react-router-dom";
import CategoryNavigation from "../../components/CategoryNavigation";
import BestGear from "../../components/BestGear";

function Home() {
  return (
    <>
      <section className="section-home">
        <section className="home-container">
          <section className="home-container-info">
            <h4 data-aos="fade-left" data-aos-delay="200">
              NEW PRODUCT
            </h4>
            <h1 data-aos="fade-left" data-aos-delay="400">
              XX99 MARK 11
              <br />
              HEADPHONES
            </h1>
            <p data-aos="fade-left" data-aos-delay="600">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              data-aos="fade-left"
              data-aos-delay="800"
              className="home-btn btns"
              to="/headphones/xx99-mark-two-headphones"
            >
              see product
            </Link>
          </section>
        </section>
      </section>

      {/* Product navigation section */}
      <CategoryNavigation />

      {/* see product section */}
      <section className="speaker-Z">
        <section className="speaker-Z-container">
          <div data-aos="fade-down" className="speaker-img">
            <div className="img-speaker"></div>
          </div>
          <div data-aos="fade-up" className="spkInfo">
            <div className="speaker-info">
              <h1>
                ZX9
                <br />
                SPEAKER
              </h1>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link to="/speakers/zx9-speaker" className="product-btn btns">
                see product
              </Link>
            </div>
          </div>
        </section>
      </section>

      <section className="section-Z7">
        <section className="Z7-container">
          <article data-aos="fade-left" className="Z7-info">
            <h2 data-aos="fade-right" data-aos-delay="200">
              ZX7 SPEAKER
            </h2>
            <Link to="/speakers/zx7-speaker">
              <button
                data-aos="fade-right"
                data-aos-delay="400"
                className="btns Z7-btn"
              >
                SEE PRODUCT
              </button>
            </Link>
          </article>
        </section>
      </section>

      <section className="earphone-Z">
        <section className="earphone-Z-container">
          <article data-aos="fade-down" className="Z-earphone"></article>
          <article data-aos="fade-up" className="earphone-container-info">
            <h2 data-aos="fade-left" data-aos-delay="200">
              YX1 EARPHONES
            </h2>
            <Link
              to="/earphones/yx1-earphones"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <button className="btns earphone-btn">SEE PRODUCT</button>
            </Link>
          </article>
        </section>
      </section>

      <BestGear />
    </>
  );
}

export default Home;
