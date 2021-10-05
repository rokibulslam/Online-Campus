import React from 'react';
import img from '../../Images/ai.jpg'
const Articles = () => {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 mt-5">
                    <h1 className="fs-1 text-start fw-light"> Enable Artificial Inteligence</h1>
                    <p className="fs-5 fw-light text-start">Your <b>Online Campus</b> learning experience is grounded in cutting edge cognitive science. With more than two dozen distinct learning features to help you achieve your goals, our approach follows three key :</p>
                    <h4 className="text-start fw-light">Experience</h4>
                    <p className="fs-5 fw-light text-start">Learn new knowledge and skills in a variety of ways, from engaging video lectures and dynamic graphics to data visualizations and interactive elements.</p>
                    <h4 className="text-start fw-light">Practice</h4>
                    <p className="fs-5 fw-light text-start">Demonstrating your knowledge is a critical part of learning. edX courses and programs provide a space to practice with quizzes, open response assessments, virtual environments, and more.</p>
            </div>
            <div className="col-sm-12 col-md-6 mx-0">
                <img className="rounded img-fluid my-5 px-0"  src={img} alt="" />
            </div>
        </div>      
        </div>
    );
}; 
export default Articles;