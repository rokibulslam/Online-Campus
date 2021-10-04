import React from 'react';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import TopCourses from '../TopCourses/TopCourses';
import Universities from '../Universities/Universities';



const Home = () => {
    return (
        <div>
            
            <Banner />
            <Universities />
            <TopCourses />
            <Articles />
            
        </div>
    );
};

export default Home;