import React from 'react'
import Experience from './Experience'

import experience from '../../../data/experience.json'

const Experiences = () => (
    <>
        {
            experience && experience.length >= 0 ?

                experience.map((position) => {
                    if (position.display) {
                        return (<Experience position={position} />)
                    }
                })
                : 
                <p>Error loading experience.</p>
        } 
    </>
)

export default Experiences
