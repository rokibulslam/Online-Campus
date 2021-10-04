import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Courses.css'

const Courses = () => {
    const [coursess, setCourses] = useState([])
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data=> setCourses(data))
    }, [])
    return (
            <div className="courses m-0 pb-5">
            <div className="bg-secondary">
                <h1 className="fw-light pt-5 px-5 text-white fw-light text-start fs-1 ">Find a top degree that fits your life</h1>
                <p className="text-white pb-5 px-5 fs-4 fw-normal text-start ">Find new interests and advance career opportunities with courses in computer science, biology, engineering, architecture, data science and more.</p>
            </div>
            <div className="container">
                
            <div className="row">
            {
                coursess.map(course => <div key={course.id} className="col-md-3 col-sm-12 my-3">
                    <Card className="h-100 w-100 shadow-lg rounded rounded-3 card">
                        <Card.Img variant="top" src={course.picture} />
                        <Card.Body>
                            <Card.Title className="fw-bold">{course.name}</Card.Title>
                            <Card.Text className="mb-1 fw-light"><span className="fw-bold">Subject:</span> {course.subject}</Card.Text>
                            <Card.Text className="mb-1 fw-light"><span className="fw-bold">Language:</span> {course.language}</Card.Text>
                            <Card.Text className="mb-1 fw-light"><span className="fw-bold">Institution:</span> {course.institute}</Card.Text>
                            <Card.Text><span className="fw-bold">Course Fee:</span> ${course.Price}</Card.Text>
                            <Link to="/login"><button className="btn btn-primary m-3 fw-light">Buy Now</button></Link>
                        </Card.Body>
                    </Card>
                    </div>)
                }
            </div>
        </div>
            </div>
            
    );
};

export default Courses;