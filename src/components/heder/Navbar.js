import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ clickHandler, registerBtn }) => {
const sum = useSelector(state => state).count.map(i => Number(i.nam)).reduce((a, b) => a+b, 0)
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
                <li> <Link to={"/"} >Home</Link>  </li>
                <li><Link to={"/products_all"}>Eggs</Link></li>
                <li><Link to={"/products_all"}>Poultry</Link></li>
                <li><Link to={"/products_all"}>Rice</Link></li>
                <li><Link to={"/products_all"}>Beef/Mutton</Link></li>
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
                <div className="text"> {sum} </div>
              </div>
              <div className="navbar_search">
                <div className="navbar_icon">
                  <img src="/NavbarImgs/Vector (2).png" />
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="navbar_button">
              <button style={{ display: registerBtn ? "none" : "flex" }} onClick={clickHandler} className="button">
                Register/Login
              </button>
              <div style={{ display: registerBtn ? "flex" : "none" }} className="registir_img">
                <img src="/NavbarImgs/Profile Pic.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
