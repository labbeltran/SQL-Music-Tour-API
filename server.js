// DEPENDENCIES
const express = require('express')
const app = express()
const {Sequelize}= require('sequelize')


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

const stagesController = require('./controllers/stages_controller')
app.use('/stages', stagesController)

const eventsController = require('./controllers/events_controller')
app.use('/events', eventsController)


//Database
const {sequelize} = require('./models')
const testSequelize = async ()=>{
    try{await sequelize.authenticate();
    console.log('Connection has been established')}
    catch(error){
        console.log('unable to connect to database', error)
    }
}
// LISTEN
app.listen(process.env.PORT, async () => {
    await testSequelize()
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})