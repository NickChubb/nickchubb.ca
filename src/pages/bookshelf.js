import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Book from "../components/bookshelf/Book"

// import books from '../data/books.json'

const ProjectsPage = () => {

  // Retrieve books from server
  const [books, setBooks] = useState([]);
  useEffect(() => {

    const url = `https://nickchubb.ca/api/books`
    fetch(url)
      .then(response => response.json())
      .then(resultData => {
        setBio(resultData)
    })
  })
  
  return (
    <Layout>
      <SEO title="bookshelf." />
      <h2>Bookshelf.</h2>

      <p>Books I have enjoyed thoroughly and frequently recommend to friends, in no particular order.</p>

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
}

export default ProjectsPage;