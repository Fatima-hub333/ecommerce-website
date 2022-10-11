import React from "react";
import { useGlobalContext } from "../../context";
import { useHistory, useParams } from "react-router-dom";
import CategoryNavigation from "../../components/CategoryNavigation";
import BestGear from "../../components/BestGear";
import ProductInfo from "../../components/ProductCategory/ProductInfo";
import ProductFeatures from "../../components/ProductFeatures/ProductFeatures";
import ProductGalleries from "../../components/ProductGalleries/ProductGalleries";
import Like from "../../components/Like/Like";
import GoBack from "../../components/GoBack";
import NoError from "../../components/NoError";

function SingleProduct() {
  //firstly get the name coming from categories page
  const { slug } = useParams();

  //get the getProduct from context
  const { getProduct } = useGlobalContext();

  let history = useHistory();

  let Products = getProduct(slug);
  if (!Products) {
    return <NoError title="No Such Product could be found..." />;
  } else {
    return (
      <main style={{ overflow: "hidden" }}>
        {/* Go backk button section */}
        <GoBack history={history} />

        {/* Product Info and adding to cart */}
        <ProductInfo Products={Products} />

        {/* Features and in the box */}
        <ProductFeatures Products={Products} />

        {/* Galleries */}
        <ProductGalleries Products={Products} />

        {/* you may also like */}
        <Like Products={Products} />

        <CategoryNavigation />
        <BestGear />
      </main>
    );
  }
}

export default SingleProduct;
