import React from 'react'

const Button = ({href, children}) => (
    <a href={ href } target="_blank"
    style={{
        color: 'white',
    }}>
        <button className="btn">
            {children}
        </button>
    </a>
)

export default Button;