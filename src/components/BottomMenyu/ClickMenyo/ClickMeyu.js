import React from "react";
import { Link } from "react-router-dom";
import "./clickMenyu.css";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";
import { BsEgg } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";

function ClickMeyu({ add, menbar }) {
  return (
    <div style={{ left: add ? "0" : "-320px" }} className="ClickMenyu">
      <div className="MenyuLogo">
        <img src="/NavbarImgs/Logo.png" />
        <VscChromeClose id="close" onClick={menbar} />
      </div>
      <ul>
        <li>
          <Link to={"/"}>
            <AiOutlineHome /> <p onClick={menbar}>Home</p>
          </Link>
        </li>
        <li>
          <Link to={"/products_all"}>
            <BsEgg /> <p onClick={menbar}>Eggs</p>
          </Link>
        </li>
        <li>
          <Link to={"/products_all"}>
            <img
              src="https://toppng.com/uploads/preview/poultry-icon-svg-11549951587jsb83fragp.png"
              alt=""
            />
            <p onClick={menbar}>Poultry</p>
          </Link>
        </li>
        <li>
          <Link to={"/products_all"}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/193/193883.png"
              alt=""
            />
            <p onClick={menbar}>Rice</p>
          </Link>
        </li>
        <li>
          <Link to={"/products_all"}>
            <img
              src="https://e7.pngegg.com/pngimages/658/445/png-clipart-raw-meat-with-spices-red-meat-beef-steak-food-beef-meat-beef-roast-beef-thumbnail.png"
              alt=""
            />
            <p onClick={menbar}>Beef/Mutton</p>
          </Link>
        </li>
        <li>
          <Link to="/products_all">
            <CgDetailsMore /> <p onClick={menbar}>More</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default ClickMeyu;
