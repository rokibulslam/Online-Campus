import React from "react";
import NavBar from "../NavBar/NavBar";
import img from "../../Images/Banner.jpg"
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6">
            <h1 className="title">Hello <br/> <span className="text-danger">Students</span>
            </h1>
            <p className="text-white text-center mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="mt-3 about-btn">About Us</button>
          </div>
                <div className="col-md-6">
                      
                </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
