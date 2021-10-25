import React, { useState, useEffect } from 'react'
import Experience from './Experience'

const Experiences = () => {
    
    // Retrieve experience from server
    const [experience, setExperience] = useState([]);
    useEffect(() => {

        const url = `https://nickchubb.ca/api/experience`
        fetch(url)
        .then(response => response.json())
        .then(resultData => {
            setExperience(resultData)
        })
    }, [])

    return (
        <>
            {
                experience && experience.length >= 0 ?

                    experience.map((position) => {
                        if (position.Display) {
                            return (<Experience position={position} />)
                        }
                    })
                    : 
                    <p>Error loading experience.</p>
            } 
        </>
    )
}

export default Experiences
