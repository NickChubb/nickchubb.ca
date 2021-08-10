import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Courses from "../components/experience/Courses"
import Experiences from '../components/experience/Experiences'

const ExperiencePage = () => (
    <Layout>
      <SEO title="experience." />

      <h2>Experience.</h2>

      <Experiences />

      <hr></hr>

      <h2>Courses</h2>

      <Courses />
      
      <br />

    </Layout>
  )

export default ExperiencePage;