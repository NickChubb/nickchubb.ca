/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"

import 'bootstrap/dist/css/bootstrap.min.css'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{
      position: 'absolute',
      height: '100%',
      width: '100%',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div style={{
        
      }}>
          <div style={{
            display: 'box'
          }}>
              <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          </div>

        <div
          style={{
            margin: `0 auto`,
            maxWidth: 840,
            padding: `0 1.0875rem 1.  45rem`,
          }}
        >
          <main style={{
            display: 'inline'
          }}>
            <div style={{paddingTop: 15}}>
              {children}
            </div>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
