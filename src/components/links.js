import React from 'react'
import './links.css'

import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';


const Links = () => (
    <small className='links-menu' style={{
        padding: 10,
        fontSize: 20,
        marginLeft: 0
    }}>
        <a href="https://github.com/NickChubb" target="_blank">
            <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nickrchubb/" target="_blank">
            <FaLinkedin />
        </a>
        <a href="https://nickchubb.github.io/resume/" target="_blank">
            <FaFileAlt />
        </a>
        <a href="mailto://nick@nickchubb.ca" target="_blank">
            <FaEnvelope />
        </a>
    </small>
)

export default Links;