import React from 'react'
import { DateTime } from "luxon";
import { GoLinkExternal  } from 'react-icons/go';

import { FiGlobe  } from 'react-icons/fi';

const Experience = ({ position }) => (
    <div className='experience-card'>
        <div className='experience-card-header'>
            <h3 style={{
                marginBottom: 5,
            }}>{position.company}</h3>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <i>{position.Title}</i>
                <i>{DateTime.fromISO(position.StartDate).toFormat('LLL yyyy')} -- {position.FinishDate != 'present' ? DateTime.fromISO(position.FinishDate).toFormat('LLL yyyy') : position.FinishDate}</i> 
            </div>
        </div>
        <br />

        <ul>
        {
            position.Description.map(description => {
                return (<li>{description}</li>)
            })
        }
        </ul>

        <p style={{
            textAlign: 'end'
        }}>
            <small><a href={position.Website}>Website <FiGlobe /></a></small>
        </p>

    </div>
)

export default Experience