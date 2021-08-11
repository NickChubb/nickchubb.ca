/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Serve static public directory
app.use(express.static('public/'))

app.listen(port, () => {
  console.log(`nickchubb.ca listening at http://localhost:${port}`)
})