const db = require('../db-config')


const find = async () => {
    try {
        return await db('projects')
    } catch (error) {
        res.status(500).json({message: 'theres an issue'})
    }
}

const add = async (project) => {
   try {
    return await db('projects').insert(project)
   } catch (error) {
    res.status(500).json({message: 'theres an issue'})
   }
}

module.exports = {
    find,
    add
}
