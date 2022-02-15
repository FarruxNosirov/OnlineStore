import React from "react";
import "./login.css";

const Login = ({ onClickMe, loginFunction }) => {
  return (
    <div style={{ display: onClickMe ? "flex" : "none" }} className="log">
      <div onClick={loginFunction} className="Login"></div>
      <div className="Login_container">
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button id="btn11">Login</button>
          <div id="btn22">Don’t have an account?</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
