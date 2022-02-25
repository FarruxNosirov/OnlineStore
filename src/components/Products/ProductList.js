import React, { useState } from "react";
import OneProductCard from "./OneProductCard";
import { useSelector } from "react-redux";

const ProductList = () => {

  const arr=useSelector((state)=>state.item)

  return arr.map((item) => {
    return <OneProductCard item={item} key={item.id}  />;
  });
};

export default ProductList;
