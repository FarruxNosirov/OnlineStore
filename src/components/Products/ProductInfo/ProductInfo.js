import React from "react";
import "./productInfo.css";
import { useParams } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import ProductList from "../ProductList";

const ProductInfo = () => {
  const array = useSelector((state) => state.item);

  const { id } = useParams();
  const dataId = array.filter((i) => i.id == id);
  return (
    <div className="ProductsInfo">
      <div className="container">
        <div className="Product_Info">
          <div className="Images">
           
              <div id="ImgDiv">
                <img src={dataId[0].img_url} alt="img" />
              </div>
            
            <div className="Overlay">
              <div>
                <img src={dataId[0].img_url} />
              </div>
              <div>
                <img src={dataId[0].img_url} />
              </div>
              <div>
                <img src={dataId[0].img_url} />
              </div>
            </div>
          </div>
          <div className="Images_info">
            <h1> {dataId[0].name} </h1>
            <div className="Images_monys">
              <p className="mony">
                <small> BY P&H EGGS </small> <br />
                <span> {dataId[0].black_money} </span>
              </p>
              <p className="prosent">
                <small>Sale 12% Off</small> <br />
                <span>Inclusive of all Taxes</span>
              </p>
            </div>
            <div className="_info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="Images_btn">
              <div className="add_close">
                <img src="/product_info/Minus.png" alt="" />
                <p> 0 </p>
                <img src="/product_info/Plus.png" alt="" />
              </div>
              <div>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="Product_boxs" >
          <div className="Write_Review">
            <div className="Write_title">
              <h1>Write a Review</h1>
              <div className="Write_icon">
                <div className="Route">
                  <span>0</span>
                  <small>/10</small>
                  <IoIosArrowDown className="Route_icon" />
                </div>
              </div>
            </div>
            <div className="Write_area">
              <textarea
                cols="30"
                rows="10"
                placeholder="Your Messge"
              ></textarea>
            </div>
            <div className="Write_form">
              <div className="Write_input">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>
              <button> Submit </button>
            </div>
          </div>
          <div className="Rewiews">
            <div className="Rewiews_title">
              <div>
                <h1>Rewiews</h1>
              </div>
              <div className="Rewiwes_title_icon">
                <div className="Rewiwes_add">
                  <img src="/producAImg/prev.png" alt="prev" />
                </div>
                <div className="Rewiwes_remov">
                  <img src="/producAImg/next.png" alt="next" />
                </div>
              </div>
            </div>
            <div className="Rewiews_info">
              <div className="Message_person_title">
                <div className="person_img">
                  <img src="/product_info/persojn_1.png" alt="" />
                  <h1>John Smith</h1>
                </div>
                <div className="Message_icon">
                  <span>9</span>
                  <small>/10</small>
                </div>
              </div>
              <div className="Message_persn_info">
                <h1>Amazing Product.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Related_Products">
          <div className="Related_Products_title">
            <h1>Related Products</h1>
            <p>
              {" "}
              Related Products <img
                src="/product_info/Vector.png"
                alt=""
              />{" "}
            </p>
          </div>
          <div className="Related_Products_eliments">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
