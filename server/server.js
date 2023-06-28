const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 4000

const app = express()

const todoRouter = require('./routes/todoRouter')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/todos', todoRouter)

app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})