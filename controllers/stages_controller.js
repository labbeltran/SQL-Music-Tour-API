const stages = require('express').Router()
const db = require('../models')
const { Stage } = db 
const {Op}= require('sequelize')

// CREATE A Stage
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new Stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// FIND ALL Stages
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND ALL BANDS
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll({ 
            order: [ [ 'available_start_time', 'ASC' ] ],
            where:{
                name: {[Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            } 
        })
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})


// UPDATE A Stage
stages.put('/:id', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// DELETE A Stage
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



// EXPORT
module.exports = stages

