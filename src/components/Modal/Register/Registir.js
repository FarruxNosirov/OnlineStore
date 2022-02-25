import React from "react";
import "./registir.css";
const Registir = ({ clickMe, clickHandler, login ,chengBtn}) => {
 
  return (
    <div style={{ display: clickMe ? "flex" : "none" }} className="reg">
      <div onClick={clickHandler} className="Register"></div>
      <div className="Register_container">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div onClick={chengBtn} id="btn1">Register</div>
          <div onClick={login} id="btn2">
            Already have an account?
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registir;
