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
      <p>Hi, my name is Nick Chubb. I am a...</p>

        <ul style={{
          listStyle: 'none',
        }}>
          <li>🖥 Computer Science & Molecular Biology student at Simon Fraser University</li>
          <li>🐻 Junior Developer at <a href="https://machobear.ca/">Machobear Studios</a></li>
          <li>👨🏼‍💼 Account Manager for <a href="https://https://vanstartupweek.ca/">Vancouver Startup Week</a></li>
        </ul>

  🐻    <p>I am an aspiring <b>full-stack developer</b> and I will be seeking employment opportunities for Spring 2023. If you or someone you know are hiring, I would love to hear from you!</p>

      <div style={{
        width: '100%',
        textAlign: 'center',
      }}>
        <Button href={'https://nickchubb.github.io/resume/'}>
          Resume <FaFileAlt />
        </Button>
        <Button href={'https://www.linkedin.com/in/nickrchubb/'}>
          Linkedin <FaLinkedin />
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
