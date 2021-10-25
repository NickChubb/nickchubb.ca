import React from 'react'
import { Link, navigate } from 'gatsby'

import { AiOutlineDoubleRight  } from 'react-icons/ai';

const ProjectCard = ({ project }) => (
    <div 
    className="project-card"
    onClick={() => {
        navigate(`/projects/${project.Title}`,
        {
          state:  project
        });
    }}
    >

        <div>
            <div className="project-card-header">

                <h3 className="project-card-title" style={{
                    marginBottom: 5,
                }}>{project.Title} </h3>
                <small><i>{project.Technologies}</i></small>
            </div>
            <br />
            <span>{'👉 ' + project.Summary}</span>
        </div>
        <div className="project-card-more" style={{ 
            paddingRight: 20,
            fontSize: 30
        }}><AiOutlineDoubleRight /></div>

    {/* // </Link> */}
    </div>

)

export default ProjectCard