import React from 'react'
import {Carousel} from 'react-bootstrap'
import { Link, prefetchPathname } from 'gatsby'

import { FaGithub  } from 'react-icons/fa';
import { BsLink45Deg  } from 'react-icons/bs';

const Project = ({ project }) => (
    <div>

        <Link to="/">👈 back</Link>
         <br />
         <br />

        <div className="experience-card">
        
            <div className="project-card-header">
                <h2 style={{
                    marginBottom: 5,

                }}>{project?.Title}</h2>
                <small><a href={project?.Github} target="_blank"><FaGithub /> GitHub </a></small>
                {
                    project?.Links && project?.Links.length > 0 ?

                        project?.Links.map((link, key) => {
                            if (link.Title != "" && link.Url != "") {
                                return <small key={key}>| <a href={link.Url} target="_blank"><BsLink45Deg /> {link.Title} </a></small>
                            }
                        })

                        :

                        <div></div>


                }
            </div>

            <br />

            <ul>
                {
                    project?.Description.map((description, key) => {
                        return (<li key={key}>{description}</li>)
                    })
                }
            </ul>

            <br />
        
            <Carousel>
                {
                    project?.Image && project?.Image.length > 0 ? 

                        project?.Image.length > 1 ?
                            // If more than one image display carousel
                            project?.Image.map((image, key) => {
                                return (
                                    <Carousel.Item key={key} className="project-slide" key={key}>
                                        <img
                                        className="d-block w-100"
                                        src={image.Path}
                                        alt="First slide"
                                        />
                                        {/* <Carousel.Caption className="project-caption">
                                            <h3>{image.title}</h3>
                                            <p>{image.description}</p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>   
                                )
                            })
                            :
                            // Else display one image
                            <img
                                        className="d-block w-100"
                                        src={project.Image[0].path}
                                        />
                        :
                        <p>No images to display.</p>
                }
            </Carousel> 
            <br/>
        </div>
    </div>
)

export default Project