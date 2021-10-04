import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebook}size="3x" />
    const twitter = <FontAwesomeIcon icon={faTwitter}size="3x" />
    const instgaram = <FontAwesomeIcon icon={faInstagram}size="3x" />
    return (
        <div className="my-5">
            <div  className = "d-flex container align-items-center justify-content-around" >
                <div>
                    <h1>Online Campus</h1>
                    
                </div>
                <div>
                    <span className="px-2">{facebook}</span>
                    <span className="px-2">{instgaram}</span>
                    <span className="px-2">{twitter}</span>
                </div>
                <div className="row">
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;