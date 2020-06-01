const express = require('express')
const db = require('./steps-model')
const stepsRouter = express.Router()

module.exports = stepsRouter

stepsRouter.get('/',(req,res) => {
    db.find('steps')
        .then(step => {
            if(step){
                res.status(200).json({step})
            } else {
                res.status(404).json({message:'no steps'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'something went wrong'})
        })
})

stepsRouter.post('/:id',(req,res) => {
    // req.body.project_id = req.params.id
    console.log(req.body)
    db.add(req.body)
        .then(resp => {
            if(resp){
                res.status(201).json({resp})
            } else {
                res.status(404).json({message:'step not created'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'something went wrong'})
        })
})