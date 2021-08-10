import React from 'react'

import ProjectCard from "./ProjectCard"

import projects from '../../data/projects.json'

const DisplayProjects = () => (
    <div>
    {
        projects != null && projects.length > 0 ?

            projects.map((project, key) => {
                return <ProjectCard project={project} key={key} />
            })
            :
            <p>No projects found.</p>
    }
    </div>
)

export default DisplayProjects