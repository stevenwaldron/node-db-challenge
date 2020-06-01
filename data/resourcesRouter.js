const express = require('express')
const db = require('./resources-model')
const resourcesRouter = express.Router()

module.exports = resourcesRouter

resourcesRouter.get('/',(req,res) => {
    db.find('resources')
        .then(resource => {
            if(resource){
                res.status(200).json({resource})
            } else {
                res.status(404).json({message:'no resources'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'something wehtn wrong'})
        })
})

resourcesRouter.post('/',(req,res) => {
    db.add(req.body)
        .then(resp => {
            if(resp){
                res.status(201).json({resp})
            } else {
                res.status(404).json({message:'project not created'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'something wehtn wrong'})
        })
})