import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  
  // Retrieve bio from server
  const [bio, setBio] = useState([]);
  useEffect(() => {

    const url = `https://nickchubb.ca/api/bio`
    fetch(url)
      .then(response => response.json())
      .then(resultData => {
        setBio(resultData)
    })
  })

  return (
    <Layout>
      <SEO title="About Me." />

      <h2>About Me.</h2>

      <div style={{
        textAlign: 'justify',
        textJustify: 'inter-word',
        paddingLeft: 15,
        paddingRight: 15
      }}>
        {
          bio && bio.length > 0 ?

            bio.map((p, key) => {
              return <p key={key}>{p}</p>
            })
            :
            <p>Error loading bio</p>
        }
      </div>

    </Layout>
  )
}

export default About
