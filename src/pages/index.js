import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Import data
import bio from '../data/bio.json'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Bio.</h2>
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

export default IndexPage
