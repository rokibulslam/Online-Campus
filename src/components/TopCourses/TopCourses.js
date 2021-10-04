import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TopCourses.css'

const TopCourses = () => {
    const [coursess, setCourses] = useState([])
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div div className = "top-courses p-5 " >
            <div className="container">
            <h1 className="fs-1 fw-bolder">Explore Top Four Course </h1>
            <div className="row">
            {
                coursess.slice(0, 4).map(course => <div key={course.id} className="col-md-3 col-sm-12 my-3">
                    <Card className="h-100 w-100 shadow-lg rounded rounded-3 card">
                        <Card.Img variant="top" src={course.picture} />
                        <Card.Body>
                            <Card.Title className="fw-bold">{course.name}</Card.Title>
                            <Card.Text className="mb-1 fw-light"><span className="fw-bold">Subject:</span> {course.subject}</Card.Text>
                            <Card.Text className="mb-1 fw-light"><span className="fw-bold">Language:</span> {course.language}</Card.Text>
                            <Card.Text className="mb-1 fw-light"><span className="fw-bold">Institution:</span> {course.institute}</Card.Text>
                            <Card.Text><span className="fw-bold">Course Fee:</span> ${course.Price}</Card.Text>
                            <Link to="/courses">
                                <button className="btn btn-primary m-3">Buy Now</button>
                            </Link>
                        </Card.Body>
                    </Card>
                    </div>)
                }
            </div>
        </div>
        </div>
    );
};

export default TopCourses;