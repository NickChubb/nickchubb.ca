import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"
import Image from "./image"
import Links from "./links"

import { Container, Row, Col } from "react-bootstrap"

import background from "../images/grainy_background.png";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(28,28,28)`,
      // background: "rgb(50,50,50)",
      backgroundImage: `url(${background})`,
      marginBottom: `0rem`,
      marginTop: `0rem`,
      boxShadow: '1px 1px 5px rgba(15,15,15,.3)',
    }}
  >
    <Container
      style={{
        margin: `0 auto`,
        maxWidth: 840,
        // padding: `1.45rem 1.0875rem`,
        paddingTop: 20,
        paddingBottom: 20,
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyItems: 'center',
      }}
    >
      <Row style={{
          alignItems: 'center',
          justifyContent: 'center'
        }} >
        <Image />
        <Col 
          style={{
            // margin: `0 auto`,
            // maxWidth: 960,
            // padding: `1.45rem 1.0875rem`,
            width: '70%',
            // display: 'flex',
            // flexDirection: 'column',
            // textAlign: 'right', 
            // marginTop: 100
          }}
        >
          <h1 style={{ margin: 15, marginRight: 50, textAlign: 'end' }}>
            <Row>
              <Link
                to="/"
                style={{
                  color: `#eaeaea`,
                  textDecoration: `none`,
                }}
              >
                {siteTitle}
              </Link>
              <Links /> 
            </Row>
          </h1>
          <Menu></Menu>
        </Col>
      </Row>
    </Container>
    <hr></hr>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
