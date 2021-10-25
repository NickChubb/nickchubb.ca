import React, { useState, useEffect } from 'react'
import Course from './Course'

import {
    Accordion
} from 'react-accessible-accordion';

const Courses = () => {
    
    // Retrieve courses from server
    const [courses, setCourses] = useState([]);
    useEffect(() => {

        const url = `https://nickchubb.ca/api/courses`
        fetch(url)
        .then(response => response.json())
        .then(resultData => {
            setCourses(resultData)
        })
    }, [])

    return (
        <Accordion allowZeroExpanded allowMultipleExpanded>
            {
                courses && courses.length >= 0 ?

                    courses.map((course, key) => {
                        return (<Course key={key} course={course} />);
                    })
                    :
                    <p>Error loading courses.</p>
            }
        </Accordion>
    )
}

export default Courses