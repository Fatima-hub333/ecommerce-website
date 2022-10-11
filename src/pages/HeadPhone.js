import React from "react";
import Hero from "../components/ProductHero/Hero";
import DetailsCategory from "../components/ProductHero/DetailsCategory";
import { Link } from "react-router-dom";
import { category } from "../dataCategory";
import CategoryNavigation from "../components/CategoryNavigation";
import BestGear from "../components/BestGear";
import { useGlobalContext } from "../context";

function HeadPhone() {
  //getting only headphone from category
  const { headphones } = category;

  //getting the width from useGlobalcontext
  const { getWidth } = useGlobalContext();

  return (
    <>
      <Hero hero="black-background" title="HeadPhones"></Hero>
      {headphones.map((headphone, index) => {
        const { newProduct, name, slug, info, url, image } = headphone;
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
            <Link to={`/headphones/${slug}`} className="btns orange-background">
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

export default HeadPhone;
