import React from 'react';
import img from '../../Images/partners.jpg'
import './Partner.css'
const Partners = () => {
    return (
        <div className="container ">
            <img width="100%" height="500px" src={img} className="" alt="" />
            <h1 className="fw-light mt-5">HarvardX</h1>
            <h3 className="fw-light">Free online courses from Harvard University </h3>
            <br />
            <p className="fw-lighter fs-4">Harvard University is devoted to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference globally. Harvard faculty are engaged with teaching and research to push the boundaries of human knowledge. The University has twelve degree-granting Schools in addition to the Radcliffe Institute for Advanced Study.
                <br />
            Established in 1636, Harvard is the oldest institution of higher education in the United States.The University, which is based in Cambridge and Boston, Massachusetts, has an enrollment of over 20, 000 degree candidates, including undergraduate, graduate, and professional students.Harvard has more than 360, 000 alumni around the world.
            </p>
            <h5 className="fw-light"> Harvard University MOOCs</h5>
            <p className="fw-lighter fs-4">Browse free online courses in a variety of subjects. Harvard University courses found below can be audited free or students can choose to receive a verified certificate for a small fee. Select a course to learn more.</p>
        </div>
    );
};

export default Partners;