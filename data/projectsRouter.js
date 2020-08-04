const express = require('express')
const db = require('./projects-model')
const db2 = require('../db-config')
const projectsRouter = express.Router()

module.exports = projectsRouter

projectsRouter.get('/',(req,res) => {
    db.find('projects')
        .then(projects => {
            if(projects){
                res.status(200).json({projects})
            } else {
                res.status(404).json({message:'no projects'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'something wehtn wrong'})
        })
})

projectsRouter.post('/',(req,res) => {
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

projectsRouter.get('/:resource',async (req,res) => {
   return db2('projects').where({resource:req.params.resource})
    .then(projects => {
        if(projects){
            res.status(200).json({projects})
        } else {
            res.status(404).json({message: 'no projects with this resource'})
        }
    })
    .catch(err => {
        res.status(500).json({message:'something went wrong'})
    })
    
   
})