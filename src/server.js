const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')
const instrumentRouter = require('./routes/instrument-routes.js')


const PORT = 3000
// const URL = 'mongodb+srv://Rustam:rusqtam01q1@mongodbonlineshopvseins.r6glwty.mongodb.net/instrumentBox'
const URL = "process.env.MONGODB_URI"
    
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(instrumentRouter)


app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`listening port ${PORT}`)
})

mongoose
    .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((res) => {
        console.log(`Connected to MongoDB`)
    })
    .catch((err) => {
        console.log(`Db connection error ${err}`)
    })


