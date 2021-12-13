const express = require('express')
const app = express()
const connectDB = require('./config/database')
const IndexRoutes = require('./routes/index')


require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', IndexRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Get the Blicky!')
})    