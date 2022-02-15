import React from "react";
import "./basketcard.css";

const BastketCard = () => {
  return (
    <div className="BascetCart">
      <div className="Basketpage_info">
        <div>
          <img src="/product_info/6 Fresh and Tasty Eggs.png" />
        </div>
        <div>
          <h3>6 Fresh and Tasty Eggs</h3>
          <p>1242341234</p>
        </div>
      </div>
      <div className="add_clos">
        <div>
          <img src="/product_info/Minus.png" />
          <p>2</p>
          <img src="/product_info/Plus.png" />
        </div>
        <div>
          <p>£120.00</p>
        </div>
        <div>
          <img src="/product_info/icon.png" />
        </div>
      </div>
    </div>
  );
};

export default BastketCard;
