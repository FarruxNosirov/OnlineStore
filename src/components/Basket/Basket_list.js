import React from "react";
import BastketCard from "./BascetCard/BastketCard";
import { useSelector } from "react-redux";

const Basketlist = ( ) => {
    let store =useSelector((stete=> stete.count));
  return (
    store.map((item, key) => {
      return <BastketCard item={item} kalit = {key} key={item.id} />;
    })
  )
};

export default Basketlist ;
