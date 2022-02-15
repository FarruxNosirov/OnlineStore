import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { AppContext } from "../../App";

const OneProductCard = ({ item }) => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="Card">
      <Link to={"/" + item.id} className="card_img">
        <img src={item.img_url} />
      </Link>
      <div className="card_mony">
        <div className="card_taitl">
          <p>
            <span>{item.red_money}</span>
            <span>{item.black_money} </span>
          </p>
          <h4>{item.name}</h4>
        </div>
        <div
          className="card_icon"
          onClick={() =>
            dispatch({ type: "ADD_CARD", payload: { money: item.black_money } })
          }
        >
          <img src="/products/puls.png" />
        </div>
      </div>
    </div>
  );
};

export default OneProductCard;
