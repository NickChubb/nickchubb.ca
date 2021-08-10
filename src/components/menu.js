import { Link } from 'gatsby'
import React from 'react'

const Menu = () => (
    <div style={{
        // background: '#f4f4f4',
        paddingTop: '10px'
    }}>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly',
            maxWidth: 840,
            marginBottom: 0
        }}>
            <li><Link to="/">bio.</Link></li>
            <li><Link to="/projects">projects.</Link></li>
            <li><Link to="/experience">experience.</Link></li>
            <li><Link to="/bookshelf">bookshelf.</Link></li>
            <li><a href="https://chubb.blog">blog.</a></li>
        </ul>
        
    </div>
)

export default Menu;