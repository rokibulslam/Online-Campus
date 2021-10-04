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
            <h1>Explore All Courses</h1>
            <div className="row">
            {
                coursess.slice(0, 4).map(course => <div className="col-md-3 col-sm-12 my-3">
                    <Card className="h-100 w-100 shadow-lg rounded rounded-3 card">
                        <Card.Img variant="top" src={course.picture} />
                        <Card.Body>
                            <Card.Title>{course.name}</Card.Title>
                            <Card.Text>Subject: {course.subject}</Card.Text>
                            <Card.Text>Language: {course.language}</Card.Text>
                            <Card.Text>Price: ${course.Price}</Card.Text>
                            <Link to="/courses">
                                <button className="btn btn-primary">Buy Now</button>
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