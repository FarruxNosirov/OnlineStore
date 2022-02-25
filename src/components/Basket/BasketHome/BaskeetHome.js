import "./BasketHome.css";
import Basket_list from "../Basket_list";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BaskeetHome = () => {
  const count = useSelector((state) => state.count);
  return (
    <div className="container">
      {count.length === 0 ? (
        <div className="Open">
          <img src="/product_info/bush.png" />
          <h1>Cart is empty</h1>
          <p>Add some item to the cart</p>
          <button>
            <Link to={"/products"}>View all Products</Link>
          </button>
        </div>
      ) 
      : 
      (
        <div className="basket">
          <div className="push_item">
            <Basket_list />
          </div>
          <div className="mony_btn">
            <div></div>
            <div className="Total">
              <p>
                Subtotal
                <span>
                  £
                  {count
                    .map((i) => Number(i.money))
                    .reduce((sum, item) => sum + Number(item))}
                  .00
                </span>
              </p>
              <button>
                <Link to={"/check"}>Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BaskeetHome;
