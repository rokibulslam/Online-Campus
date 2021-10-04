import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebook}size="3x" />
    const twitter = <FontAwesomeIcon icon={faTwitter}size="3x" />
    const instgaram = <FontAwesomeIcon icon={faInstagram}size="3x" />
    return (
        <div div className = "mt-5 p-5 footer text-white" >
            <div div className = "d-flex mb-5 container align-items-center flex-column" >
                <div>
                    <h1>Online Campus</h1>  
                </div>
                <div>
                    <span className="px-2 ">{facebook}</span>
                    <span className="px-2">{instgaram}</span>
                    <span className="px-2">{twitter}</span>
                </div>
                <div className="row">
                    <div>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-12 ">
                    <ul ul className = "list-unstyled" >
                        <li className="fs-4 fw-bolder pb-2">Campus</li>
                        <li>About</li>
                        <li>Affiliate</li>
                        <li>Careers</li>
                        <li>News</li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12">
                    <ul ul className = "list-unstyled" >
                        
                        <li className="fs-4 fw-bolder pb-2">Connect</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                        <li>Help Center</li>
                        <li>Donate</li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12">
                    <ul ul className = "list-unstyled" >
                        <li className="fs-4 fw-bolder pb-2">Legal</li>
                        <li>Terms of Service </li>
                        <li>Privacy Policy</li>
                        <li>Trademark Policy</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
            </div>
            <div>
                <span className="fst-italic">&copy; 2021 Online Campus. All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;