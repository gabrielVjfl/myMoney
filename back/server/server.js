const port = 5400

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const cors = require('cors')

const mongoose = require('mongoose')

// connect-flash
// express-session
// express handlebars

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/teste', (req,res) => {
    res.send("hello world")
})


app.listen(port, () => {
    console.log(`Backend is running ${port}`)
})