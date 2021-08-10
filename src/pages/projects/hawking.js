import React from 'react'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Project from '../../components/projects/project'

const HawkingPage = ({ location }) => (
    <Layout>
      <SEO title="hawking." />

      <Project project={location.state}/>
      
    </Layout>
  )

export default HawkingPage;