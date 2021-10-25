import React, { useState, useEffect } from 'react'
import Loading from "../Loading"
import ProjectCard from "./ProjectCard"

const DisplayProjects = () => {
    
    // Retrieve projects from server
    const [ projects, setProjects ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {

        setLoading(true);
        const url = `https://nickchubb.ca/api/projects`
        fetch(url)
            .then(response => response.json())
            .then(resultData => {
                setProjects(resultData)
                setLoading(false)
        });
    }, [])
    
    return (
        <div>
        {
            loading ? 
                <Loading />
                :
                projects != null && projects.length > 0 ?

                    projects.map((project, key) => {
                        return <ProjectCard project={project} key={key} />
                    })
                    :
                    <p>No projects found.</p>
        }
        </div>
    )
}

export default DisplayProjects