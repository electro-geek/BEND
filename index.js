const express = require('express')
require('dotenv').config()
//or
// import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at out page</h1>')
})

app.get('/twitter', (req, res) => {
    res.send("https://https://twitter.com/pycopstwt")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})