import React from 'react'
import Course from './Course'

import {
    Accordion
} from 'react-accessible-accordion';

import courses from '../../../data/courses.json'

const Courses = () => (
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

export default Courses