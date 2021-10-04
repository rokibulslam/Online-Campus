import React from 'react';
import img from '../../Images/banner_error_404.jpg'
const Error = () => {
    return (
        <div className="container">
            <div className=" p-5 m-5">
            <img className="p-5 m-5 justify-content-center" src={img} alt="" />
        </div>
        </div>
    );
};

export default Error;