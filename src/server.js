const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('dotenv').config();
const cors = require('cors')
const instrumentRouter = require('./routes/instrument-routes.js')


const PORT = process.env.PORT || 4000
const URL = 'mongodb+srv://Rustam:rusqtam01q1@mongodbonlineshopvseins.r6glwty.mongodb.net/instrumentBox'
const url2 = "mongodb+srv://vercel_backend:porkold@mongodbonlineshopvseins.r6glwty.mongodb.net/instrumentBox"


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(instrumentRouter)

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB connected")
        app.listen(PORT, (err) => {
            if (!err) {
                console.log(`listening port ${PORT}`)
            } else {
                console.log(err)
            }
        })
    })
    .catch((err) => {
        console.error("MongoDB connection error: ", err)
    })

