import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Book from "../components/bookshelf/Book"

import books from '../data/books.json'

const ProjectsPage = () => (
    <Layout>
      <SEO title="bookshelf." />
      <h2>Bookshelf.</h2>

      <ul
        style={{
          paddingLeft: 15,
          paddingRight: 15
      }}>
        {
          books && books.length > 0 ?

            books.map((book, key) => {
              return (<Book book={book} key={key}/>)
            })
            :
            <p>Error loading books.</p>
        }
      </ul>
      
    </Layout>
  )

export default ProjectsPage;