import React from 'react'

import Menu from "./menu"
import background from "../images/grainy_background.png";

const Footer = ( position ) => (
    <div style={{
        background: `rgb(28,28,28)`,
        backgroundImage: `url(${background})`,
        marginTop: 50,
        paddingTop: 10,
        boxShadow: '-2px -1px 5px rgba(15,15,15,.3)',
        textAlign: '-webkit-center'
      }}>
        <Menu></Menu>
        <hr />
        <small><i>Copyright Nick Chubb &copy; 2021, Built with Gatsby</i></small>
        <br /><br></br>
    </div>
)

export default Footer