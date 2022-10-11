import Hero from "../components/ProductHero/Hero";
import React from "react";
import DetailsCategory from "../components/ProductHero/DetailsCategory";
import { Link } from "react-router-dom";
import { category } from "../dataCategory";
import CategoryNavigation from "../components/CategoryNavigation";
import BestGear from "../components/BestGear";
import { useGlobalContext } from "../context";

function EarPhone() {
  //getting only headphone from category
  const { earphones } = category;

  const { getWidth } = useGlobalContext();

  return (
    <>
      <Hero hero="black-background" title="Earphones" />
      {earphones.map((earphone, index) => {
        const { newProduct, name, slug, info, url, image } = earphone;
        return (
          <DetailsCategory
            classInfo={`${
              index % 2 === 1
                ? "category-container category-container-inverse"
                : "category-container"
            }`}
            newProduct={newProduct}
            name={name}
            info={info}
            url={url}
            image={
              getWidth <= 600
                ? image.mobile
                : getWidth > 600 || getWidth <= 768
                ? image.tablet
                : image.desktop
            }
            key={index}
          >
            <Link to={`/earphones/${slug}`} className="btns orange-background">
              SEE PRODUCT
            </Link>
          </DetailsCategory>
        );
      })}
      <CategoryNavigation />
      <BestGear />
    </>
  );
}

export default EarPhone;
