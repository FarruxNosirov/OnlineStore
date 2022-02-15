import "./navbar.css";
import { Link } from "react-router-dom";
const navbar = ({ clickHandler }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="data">
          <div className="logo">
            <img src="/NavbarImgs/Logo.png" />
          </div>
          <div className="menyu">
            <div className="Links">
              <ul>
                <li>Dairy</li>
                <li>Eggs</li>
                <li>Poultry</li>
                <li>Rice</li>
                <li>Beef/Mutton</li>
                <li>
                  <Link to="/products_all">More</Link>
                </li>
              </ul>
            </div>
            <div className="Search_cart">
              <div className="card">
                <div className="icon">
                  <Link to={"/basket"}>
                    <img src="/NavbarImgs/Vector (1).png" />
                  </Link>
                </div>
                <div className="text"></div>
              </div>
              <div className="navbar_search">
                <div className="navbar_icon">
                  <img src="/NavbarImgs/Vector (2).png" />
                </div>
                <div className="navbar_input">
                  <input type={"search"} placeholder="search" />
                </div>
              </div>
            </div>
            <div className="navbar_button">
              <button onClick={clickHandler} className="button">
                Register/Login
              </button>
              <div className="registir_img">
                <img src="/NavbarImgs/Profile Pic.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
