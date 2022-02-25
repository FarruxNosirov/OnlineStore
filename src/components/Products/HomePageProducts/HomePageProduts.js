import "./produc.css";
import { Link } from "react-router-dom";
import ProductList from "../ProductList";

const HomePageProduts = ({ Data}) => {
  return (
    <div className="products">
      <div className="container">
        <div className="products-contnet">
          <div className="title">
            <div>
              <h1>Featured Products</h1>
            </div>
            <div className="title-btn">
              <div className="privios">
                <img src="/products/next.png" />
              </div>
              <div className="next">
                <img src="/products/prev.png" />
              </div>
            </div>
          </div>
          <div className="list-item">
            <ProductList Data={Data}  />
          </div>
          <div className="btn">
            <button>
              <Link to="/products">View all Products</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageProduts;
