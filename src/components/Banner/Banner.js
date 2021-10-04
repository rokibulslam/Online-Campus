import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex m-0 banner align-items-center justify-content-center">
          <div className="col-md-6 col-sm-12">
            <h1 className="title">Start learning from <br/> <span className="text-warning">the world’s best institutions</span>
            </h1>
            <p className="text-white text-center mt-3 fs-4">
              Build skills with courses, certificates, and degrees online from world - class universities and companies.Breakthrough pricing on 100 % online degrees from top universities.
            </p>
            <Link to="/about">
              <button className="mt-3 about-btn rounded-pill">About Us</button>
            </Link>
          </div>
            <div className="col-md-6 col-sm-12">
              <h1 className="title"> Learn Without Limits</h1>
            <Link to="/login">
              <button className="btn-primary btn p-3 fs-3  fw-light m-3">Join For Free</button>
              <button className="btn btn-light p-3 fw-light fs-3">Try Online Campus For Children</button>
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
