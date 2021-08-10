import React from 'react'

import Menu from "./menu"
import background from "../images/grainy_background.png";

const Footer = ( position ) => (
    <div style={{
        background: `rgb(28,28,28)`,
        backgroundImage: `url(${background})`,
        marginTop: 50,
        boxShadow: '-2px -1px 5px rgba(15,15,15,.3)',
        textAlign: '-webkit-center'
      }}>
        <Menu></Menu>
    </div>
)

export default Footer