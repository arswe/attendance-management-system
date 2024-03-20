const colors = require('colors')
const dotenv = require('dotenv')
const express = require('express')

dotenv.config()
const port = process.env.PORT || 8000
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(colors.rainbow(`backend port http://localhost:${process.env.PORT}`))
})
