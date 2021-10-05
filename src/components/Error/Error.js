import React from 'react';
import img from '../../Images/banner_error_404.jpg'
const Error = () => {
    return (
        <div className="container">
            <div className=" py-5 my-5">
            <img className="py-5 my-5 img-fluid" src={img} alt="" />
        </div>
        </div>
    );
};

export default Error;