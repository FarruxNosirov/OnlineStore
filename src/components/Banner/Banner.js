import React from "react";
import "./banner.css";

export const Banner = () => {
  return (
    <>
      <div className="Hero">
        <div className="container">
          <div id="imgDocument">
            <div className="hero-text">
              <h1>heading</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button>Our Products</button>
            </div>
            <div className="banner_img">
              <img src="/BannerImg/bac.png" />
            </div>
          </div>
          <div id="btnSlayder">
            <div className="hero-button">
              <div className="left_arrow">
                <img src="/BannerImg/left.png" />
              </div>
              <div className="right_arrow">
                <img src="/BannerImg/right.png" />
              </div>
            </div>
          </div>
          <div className="indecators">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
