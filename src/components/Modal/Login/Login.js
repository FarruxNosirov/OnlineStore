import React from "react";
import "./login.css";

const Login = ({ onClickMe ,loginFunction2,chengBtn2}) => {
  return (
    <div style={{ display: onClickMe ? "flex" : "none" }} className="log">
      <div onClick={loginFunction2}  className="Login"></div>
      <div className="Login_container">
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div onClick={chengBtn2} id="btn11">Login</div>
          <div id="btn22">Don’t have an account?</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
