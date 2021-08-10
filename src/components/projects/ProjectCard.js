import React from 'react'
import { Link, navigate } from 'gatsby'

import { AiOutlineDoubleRight  } from 'react-icons/ai';

const ProjectCard = ({ project }) => (
    <div 
    className="project-card"
    onClick={() => {
        navigate(`/projects/${project.title}`,
        {
          state:  project
        });
    }}
    >

        <div>
            <div className="project-card-header">

                <h3 style={{
                    marginBottom: 5,
                }}>{project.title} </h3>
                <small><i>{project.technologies}</i></small>
            </div>
            <br />
            <span>{'👉 ' + project.summary}</span>
        </div>
        <div className="project-card-more" style={{ 
            paddingRight: 20,
            fontSize: 30
        }}><AiOutlineDoubleRight /></div>

    {/* // </Link> */}
    </div>

)

export default ProjectCard