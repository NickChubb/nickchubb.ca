import { Link } from 'gatsby'
import React from 'react'

const Menu = () => (
    <div style={{
        // background: '#f4f4f4',
        paddingTop: 10,
        paddingRight: 15,
    }}>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-around',
            maxWidth: 840,
            marginBottom: 0,
            // paddingLeft: 40,
            // paddingRight: 40
        }}>
            <li><Link to="/">home.</Link></li>
            <li><Link to="/about">about me.</Link></li>
            <li><Link to="/experience">experience.</Link></li>
            <li><Link to="/bookshelf">bookshelf.</Link></li>
            <li><a href="https://chubb.blog">blog.</a></li>
        </ul>
        
    </div>
)

export default Menu;