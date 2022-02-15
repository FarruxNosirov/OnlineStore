import React from "react";
import "./about.css";
export const About = () => {
  return (
    <>
      <div className="About">
        <div className="container">
          <div className="about-detals">
            <div className="detals">
              <h1>Who we are</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="quotation">
              <div className="quotation-img">
                <img src="/AboutImgs/Vector.png" />
              </div>
              <h1></h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <img src="/AboutImgs/Signature.png" />
            </div>
          </div>
          <div className="about-btn">
            <button>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};
