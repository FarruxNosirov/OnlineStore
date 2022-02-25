import React from "react";
import "./basketcard.css";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decrement,increment } from "../../../action";
import { Link } from "react-router-dom";


const BastketCard = ({ item, kalit }) => {
  const dispatch = useDispatch();
  const handlerAdd = () => {
    dispatch({ type: "RemovBasket", payloud: kalit });
  };
  return (
    <>
      <div className="BascetCart">
        <div className="Basketpage_info">
          <div className="basket_img">
            <img src={item.img_url} />
          </div>
          <div className="basket_mony">
            <h3>{item.name}</h3>
            <p>1242341234</p>
          </div>
        </div>
        <div className="add_clos">
          <div>
            <img src="/product_info/Minus.png" />
            <p>{item.nam}</p>
            <img src="/product_info/Plus.png" />
          </div>
          <div>
            <p>£{item.money}.00</p>
          </div>
          <div onClick={handlerAdd}>
            <div onClick={() => dispatch(decrement())} className="basCard_icon">
              <AiOutlineClose id="addIcons" />
            </div>
          </div>
        </div>
      </div>
      <div className="BascetCard2">
        <Link to={"/" + item.id} className="basket_card_img">
          <img src={item.img_url} />
        </Link>
        <div className="Basket_card_mony">
          <div className="Basket_card_taitl">
            <p>
              <span>{item.black_money} </span>
            </p>
            <h4>{item.name}</h4>
          </div>
          <div className="Basket_card_icons">
            <div className="Basket_card_icon">
              <img src="/products/puls.png" />
            </div>
            <div>
              <p> {item.nam} </p>
            </div>
            <div onClick={handlerAdd}>
              <div onClick={() => dispatch(decrement())} id="basketCard_icon">
                <img src="/product_info/Minus.png" id="basketCard_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BastketCard;
