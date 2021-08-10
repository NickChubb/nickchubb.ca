import React from 'react'
import {Carousel} from 'react-bootstrap'
import { Link, prefetchPathname } from 'gatsby'

import { FaGithub  } from 'react-icons/fa';
import { BsLink45Deg  } from 'react-icons/bs';

const Project = ({ project }) => (
    <div>

        <Link to="/projects">👈 back</Link>
         <br />
         <br />

        <div className="experience-card">
        
            <div className="project-card-header">
                <h2 style={{
                    marginBottom: 5,

                }}>{project?.title}</h2>
                <small><a href={project?.github} target="_blank"><FaGithub /> GitHub</a></small>
                {
                    project?.links && project?.links > 0 ?

                        project?.links.map(link => {
                            return <small><a href={link.url} target="_blank"> | <BsLink45Deg /> {link.title}</a></small>
                        })

                        :

                        <div></div>


                }
            </div>

            <br />

            <ul>
                {
                    project?.description.map((description, key) => {
                        return (<li key={key}>{description}</li>)
                    })
                }
            </ul>

            <br />

            <Carousel>
                {
                    
                    project?.image && project?.image.length > 0 ? 

                        project?.image.map((image, key) => {
                            return (
                                <Carousel.Item className="project-slide" key={key}>
                                    <img
                                    className="d-block w-100"
                                    src={image.path}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption className="project-caption">
                                        <h3>{image.title}</h3>
                                        <p>{image.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>   
                            )
                        })
                        :
                        <p>No images to display.</p>
                }
            </Carousel> 
            <br/>
        </div>
    </div>
)

export default Project