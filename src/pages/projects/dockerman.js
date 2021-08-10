import React from 'react'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Project from '../../components/projects/Project'

const DockermanPage = ({ location }) => (
    <Layout>
      <SEO title="dockerman." />

      <Project project={location.state}/>
      
    </Layout>
  )

export default DockermanPage;