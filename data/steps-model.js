const db = require('../db-config')


const find = async () => {
    try {
        return await db('steps')
    } catch (error) {
        res.status(500).json({message: 'theres an issue'})
    }
}

const add = async (step) => {
   try {
    return await db('steps').insert(step)
   } catch (error) {
    res.status(500).json({message: 'theres an issue'})
   }
}

module.exports = {
    find,
    add
}