import React from 'react'

import DisplayProjects from "../components/projects/DisplayProjects"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
    <Layout>
      <SEO title="projects." />
      <DisplayProjects />

    </Layout>
  )

export default ProjectsPage;