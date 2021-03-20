import React from "react";
import "./banner.css";
const Banner = ({ children }) => {
  return (
    <div className="banner-div">
      <div
        className="text-white  banner"
        // style={{ backgroundImage: `url(${bannerUrl})` }}
      ></div>
      <div className="text-center children">{children}</div>
    </div>
  );
};

export default Banner;
