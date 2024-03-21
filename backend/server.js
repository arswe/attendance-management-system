const colors = require('colors')
const dotenv = require('dotenv')
const express = require('express')

dotenv.config()
const port = process.env.PORT || 8000
const app = express()

const books = [
  { id: 1, title: 'The Great Gatsby', price: 10.99 },
  { id: 2, title: 'The Catcher in the Rye', price: 7.99 },
  { id: 3, title: 'To Kill a Mockingbird', price: 6.99 },
  { id: 4, title: 'Of Mice ', price: 12.99 },
]

app.get('/books', (req, res) => {
  if (req.query.show === 'all') {
    return res.json(result)
  }

  const result = books.filter((books) => books.price < 10)
  res.json(result)
})

app.get('/', (req, res) => {
  res.send('Rest API is running')
})

app.listen(port, () => {
  console.log(colors.rainbow(`backend port http://localhost:${process.env.PORT}`))
})
