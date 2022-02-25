import React from "react";
import "./ClickFilter.css";

function ClickFilter({ add2 }) {
  return (
    <div
      className="ClickFilter"
      style={{ left:add2 ? '0' : '-100%' }}
    >
      <div className="boxs">
        <h1>Brands</h1>
        <ul>
          <li>7up</li>
          <li>Aryo</li>
          <li>Asya</li>
        </ul>
      </div>
      <div className="Clickbrans">
        <h1>Category</h1>
        <ul>
          <li>Dairy</li>
          <li>Eggs</li>
          <li>Poultry</li>
        </ul>
        <ul>
          <li>Rice</li>
          <li>Beef/Mutton</li>
          <li>Drinks</li>
        </ul>
      </div>
      <div className="ClickPrice">
        <h1>Price</h1>
        <div className="ClickPrice_text1">
          <p>£0</p>
          <p>£1000</p>
        </div>
        <div className="Clickprasent">
          <div className="ClinkPrasend_child">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="Clickprice_text2">
          <p>£150</p>
          <p>£500</p>
        </div>
      </div>
    </div>
  );
}

export default ClickFilter;
