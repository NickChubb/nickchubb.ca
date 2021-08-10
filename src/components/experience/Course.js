import React from 'react'

import { GoLinkExternal  } from 'react-icons/go';
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Course = ({ course, key }) => (
    <AccordionItem>
        <AccordionItemHeading>
            <AccordionItemButton>
                <b>{course.title}</b>  <i> -- {course.num}</i>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <p>
                {course.description} <a href={course.link}><GoLinkExternal /></a>
            </p>
        </AccordionItemPanel>
    </AccordionItem>
)

export default Course