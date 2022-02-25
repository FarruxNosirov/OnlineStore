import React from "react";
import "./CheckoutCard.css";

function CheckoutCard({ item }) {
  console.log();
  return (
    <div className="CheckoutCard">
      <div id="box_texs">
        <div className="CheckoutCad_img">
          <img src={item.img_url} />
        </div>
        <div className="check_titile">
          <h3> {item.name} </h3>
        </div>
      </div>
      <div className="miqdor">
        <p>£{item.money}.00</p>
      </div>
    </div>
  );
}

export default CheckoutCard;
