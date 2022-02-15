import React from "react";
import "./producAll.css";
import ProductList from "../ProductList";
const ProductsPage = ({ Data }) => {
  return (
    <div className="ProducAll">
      <div className="container">
        <div className="ProducAll_tatl">
          <div>
            <img src="/producAImg/Vector.png" />
            <h1>Filters</h1>
          </div>
          <div>
            <h1>Sort</h1>
            <img src="/producAImg/Vector (1).png" />
          </div>
        </div>
        <div className="ProducAll_element">
          <div className="producAll_filter">
            <div className="brans">
              <h1>Brands</h1>
              <ul>
                <li>7up</li>
                <li>Aryo</li>
                <li>Asya</li>
              </ul>
            </div>
            <div className="category">
              <div className="brans">
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
            </div>
            <div className="price">
              <h1>Price</h1>
              <div className="price_text1">
                <p>£0</p>
                <p>£1000</p>
              </div>
              <div className="prasent">
                <div className="prasend_child">
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="price_text2">
                <p>£150</p>
                <p>£500</p>
              </div>
            </div>
          </div>
          <div className="producAll_fud">
            <ProductList Data={Data} />
          </div>
        </div>
        {/* <div className="Navigator">
          <div className="First_Lost">
            <button className="first">First</button>
            <ul>
              <li>
                <img src="/producAImg/prev.png" />
              </li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>
                <img src="/producAImg/next.png" />
              </li>
            </ul>
            <button className="lost">Lost</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductsPage;
