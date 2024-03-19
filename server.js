// DEPENDENCIES
const express = require('express')
const app = express()
const {Sequelize}= require('sequelize')
const testSequelize = async ()=>{
    try{
        await sequelize.authenticate();
        console.log('Database connection has been established successfully, right on brother');
    }
    catch(error){
        console.error('Unable to connect to the database:', error);
    }
}

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

//Database
const sequelize = new Sequelize(process.env.DB_CONNECTION)

// LISTEN
app.listen(process.env.PORT, async () => {
    await testSequelize()
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})