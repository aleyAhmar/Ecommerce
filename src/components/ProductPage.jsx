import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductCatalogue from "./ProductCatalogue";

const ProductPage = ({ productList }) => {
  return (
    <>
      <Header />
      {productList.map((product) => {
        return (
          <ProductCatalogue
            key={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default ProductPage;
