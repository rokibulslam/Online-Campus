import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import img from '../../Images/computer-removebg-preview.png'
const Banner = () => {
  return (
    <div div className = "banner-container overflow-hidden" >
      <div className="">
        <div className="row d-flex m-0 banner align-items-center justify-content-center">
          <div className="col-md-6 col-sm-12">
            <h1 className="title mt-5">Start learning from <br/> <span className="text-warning">the world’s best institutions</span>
            </h1>
            <p className="text-center mt-3 fs-4 fw-lighter">
              Build skills with courses, certificates, and degrees online from world - class universities and companies.Breakthrough pricing on 100 % online degrees from top universities.
            </p>
            <Link to="/about">
              <button className="mt-3 mb-5 about-btn rounded-pill">About Us</button>
            </Link>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={img} className="rounded mx-2 img-fluid pt-5 " alt="" />
            <h1 className="mt-5 fw-light fs-2 "> Learn Without Limits</h1>
            <Link to="/login">
              <button className="btn-primary btn  fs-4  fw-light mx-3 mb-5">Join For Free</button>
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
