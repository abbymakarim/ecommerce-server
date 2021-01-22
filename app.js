if (process.env.NODE_ENV === "development"){
    require("dotenv").config()
}
const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const errorHandler = require('./middlewares/errorhandlers')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())

app.use(routes)
app.use(errorHandler)

module.exports = app