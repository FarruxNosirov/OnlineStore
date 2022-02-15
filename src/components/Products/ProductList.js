import React from "react";
import OneProductCard from "./OneProductCard";

const ProductList = ({ Data }) => {
  return Data.map((item) => {
    return <OneProductCard item={item} key={item.id} />;
  });
};

export default ProductList;
