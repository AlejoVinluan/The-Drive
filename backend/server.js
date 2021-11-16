const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri)

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

const playerRouter = require('./routes/player')
const userRouter = require('./routes/user')



app.use('/players', playerRouter)
app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
