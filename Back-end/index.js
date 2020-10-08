
const express = require('express')
const app = express()
const port = 3001

app.get('/getUserFavorites/:userID', (req, res) => {
  res.send('-retrieved user favorites from db-')
  // TODO mongoose call
})

app.post('/addUserFavorite/:recipeID', (req, res) => {
  res.send('-added user favorite to db-')
  //TODO mongoose call
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})