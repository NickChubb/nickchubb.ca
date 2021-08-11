import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DisplayProjects from "../components/projects/DisplayProjects"
import Button from "../components/Button"

import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';

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
      <p>
        👋 Hi, I am a Computer Science & Molecular Biology student and aspiring <b>Full-Stack Developer</b>.
        Currently, I am seeking internship opportunities for the Summer 2022 semester.
      </p>

      <div style={{
        width: '100%',
        textAlign: 'center',
      }}>
        <Button href={'https://nickchubb.github.io/resume/'}>
          Resume <FaFileAlt />
        </Button>
        <Button href={'mailto://nick@nickchubb.ca'}>
          Email Me <FaEnvelope />
        </Button>
      </div>
    </div>

    <hr />

    <h2>Projects.</h2>
    <DisplayProjects />

  </Layout>
)

export default IndexPage
