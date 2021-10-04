import React, { useEffect, useState } from 'react';

const AllCourses = () => {
    const [coursess, setCourses] = useState([])
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default AllCourses;