import React from "react";
import "./productInfo.css";
import ProductList from "../ProductList";
import { useParams } from "react-router-dom";

const ProductInfo = ({ Data }) => {
  const { id } = useParams();
  const dataId = Data.filter((i) => i.id == id);
  console.log(dataId);
  return (
    <div className="ProductsInfo">
      <div className="container">
        <div className="Pages_Info">
          <div className="images">
            <div className="Big_smill">
              <div className="big_img">
                <img src={dataId[0].img_url} />
              </div>
              <div className="smill_img">
                <div className="butun_pajs">
                  <img src={dataId[0].img_url} />
                </div>
                <div className="butun_pajs">
                  <div className="img_spring">
                    <img src={dataId[0].img_url} />
                  </div>
                </div>
                <div className="butun_pajs">
                  <div className="img_spring">
                    <img src={dataId[0].img_url} />
                  </div>
                </div>
              </div>
            </div>
            <div className="Write_Review">
              <div className="Write_title">
                <h2>Write a Review</h2>
                <div className="Range">
                  <p>
                    0<span>/10</span>
                  </p>
                  <div>
                    <img src="/product_info/Vector.png" />
                  </div>
                </div>
              </div>
              <div className="Write_massage">
                <textarea placeholder="Your Message" />
              </div>
              <div className="Write_batton">
                <form>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                </form>
                <button type="Sabmit">Submit</button>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="img_name">
              <h2>{dataId[0].name}</h2>
              <p className="eliment_money">BY P&H EGGS</p>
              <div className="page_money">
                <p>£60.00</p>
                <p>
                  <span>Sale 12% Off</span>
                  <span>Inclusive of all Taxes</span>
                </p>
              </div>
              <p className="eliment_info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="page_footer">
                <div className="Add_produc">
                  <p>QTY</p>
                  <ul>
                    <li className="item_clos">
                      <img src="/product_info/Minus.png" />
                    </li>
                    <li>1</li>
                    <li className="item_add">
                      <img src="/products/puls.png" />
                    </li>
                  </ul>
                </div>
                <div className="btn_produc">
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="img_Reviews">
              <div className="reviwes_taitl">
                <div>
                  <h2>Reviews</h2>
                </div>
                <div className="reviews_btn">
                  <img src="/products/next.png" />
                  <img src="/products/prev.png" />
                </div>
              </div>
              <div className="reviwe1">
                <div className="reviwe1_taitl">
                  <div className="frame">
                    <img src="/product_info/persojn_1.png" />
                    <p>John Smith</p>
                  </div>
                  <div className="frame2">
                    <p>
                      <span>9</span>/10
                    </p>
                  </div>
                </div>
                <div className="reviwe1_info">
                  <h2>Amazing Product.</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
              <div className="reviwe1 active">
                <div className="reviwe1_taitl">
                  <div className="frame">
                    <img src="/product_info/persojn_1.png" />
                    <p>Debra Anderson</p>
                  </div>
                  <div className="frame2">
                    <p>
                      <span>8</span>/10
                    </p>
                  </div>
                </div>
                <div className="reviwe1_info">
                  <h2>Amazing Product.</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Realtiv_products">
          <div className="Realtiv_taitl">
            <div>
              <h2>Related Products</h2>
            </div>
            <div className="Realtiv_chaild">
              <p>Check all Products</p>
              <img src="/product_info/Vector.png" />
            </div>
          </div>
          <div className="Realtiv_list">
            <ProductList Data={Data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
