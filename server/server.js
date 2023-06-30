const dotenv = require('dotenv').config()

const express = require('express')
const cors = require('cors')
const connectDB = require('./config/connectDB')
const PORT = process.env.PORT || 4000

const app = express()

const todoRouter = require('./routes/todoRouter')

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/todos', todoRouter)

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`)
})