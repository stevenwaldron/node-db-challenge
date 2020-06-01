const express = require('express')
const server = express()
const projectsRouter = require('./data/projectsRouter')
const resourcesRouter = require('./data/resourcesRouter')
const stepsRouter = require('./data/stepsRouter')
server.use(express.json())

server.use('/resources',resourcesRouter)
server.use('/projects',projectsRouter)
server.use('/steps',stepsRouter)


module.exports = server 