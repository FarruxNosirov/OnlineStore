import React from "react";
import "./Bottom.css";
import {
  AiOutlineMenu,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiHomeHeart } from "react-icons/bi";
import { Link } from "react-router-dom";


function Bottom({ clickHandler, registerBtn,menbar }) {
  return (
    <div className="BottomMenyu">
      <div>
        <AiOutlineMenu onClick={menbar} className="menyo_icon" />
      </div>
      <div>
        <FiSearch className="menyo_icon" />
      </div>
      <div>
        <Link to={'/'} >
             <BiHomeHeart className="menyo_icon" />
        </Link>
      </div>
      <div>
        <Link to={"/basket"}>
          <AiOutlineShopping className="menyo_icon" />
        </Link>
      </div>
      <div className="bottom_fod">
        <div style={{ display: registerBtn ? "none" : "flex" }}>
          <AiOutlineUser className="menyo_icon" onClick={clickHandler} />
        </div>
        <div style={{ display: registerBtn ? "flex" : "none" }} id="bottomImg">
          <img src="/NavbarImgs/Profile Pic.png" />
        </div>
      </div>
    </div>
  );
}

export default Bottom;
