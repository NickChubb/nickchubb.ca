import React from 'react'
import {Carousel} from 'react-bootstrap'

const ProjectSlide = ({ path, title, description, key }) => (
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={path}
        alt="First slide"
        />
        <Carousel.Caption>
            <h3>{title}</h3>
            <p>{description}</p>
        </Carousel.Caption>
    </Carousel.Item>
)

export default ProjectSlide