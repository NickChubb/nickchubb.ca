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
                <b>{course.Title}</b>  <i> -- {course.Num}</i>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <p>
                {course.Description} <a href={course.Link}><GoLinkExternal /></a>
            </p>
        </AccordionItemPanel>
    </AccordionItem>
)

export default Course