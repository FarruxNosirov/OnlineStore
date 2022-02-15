import "./Basket.css";
import BastketCard from "../BascetCard/BastketCard";
import { useContext } from "react";
import { AppContext } from "../../../App";
const BaskeetHome = () => {
  const { state } = useContext(AppContext);
  const { basket } = state;
  return (
    <div className="container">
      <div className="Open">
        <img src="/product_info/Vector.png" />
        <h1>Cart is empty</h1>
        <p>Add some item to the cart</p>
        <button>View all Products</button>
      </div>
      <div className="basket">
        <div className="push_item">
          <BastketCard />
        </div>
        <div className="mony_btn">
          <div></div>
          <div className="Total">
            <p>Subtotal</p>
            <span>£{basket}.00</span>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaskeetHome;
