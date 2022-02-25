import React from "react";
import "./Checkout_list.css";
import { useSelector } from "react-redux";
import CheckoutCard from "../CheckoutCard/CheckoutCard";

function Checkout_list() {
  const store = useSelector((state) => state.count);
  console.log(store);
  const arr = store.map((item) => {
    return <CheckoutCard item={item} key={item.id} />;
  });

  return (
    <div className="list_container">
      <div className="list_title">
        <h1>Order Summary</h1>
      </div>
      <div className="list_eliment"> {arr} </div>
      <h1 id="tag"></h1>
      <div className="list_footer">
        <p className="total">Total</p>
        <p id="redus">
        £{store.map((i)=>Number(i.money)).reduce((sum,num)=>sum+ num, 0)}.00
        </p>
      </div>
    </div>
  );
}

export default Checkout_list;
