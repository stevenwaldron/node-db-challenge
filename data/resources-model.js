const db = require('../db-config')


const find = async () => {
    try {
        return await db('resources')
    } catch (error) {
        res.status(500).json({message: 'theres an issue'})
    }
}

const add = async (resource) => {
   try {
    return await db('resources').insert(resource)
   } catch (error) {
    res.status(500).json({message: 'theres an issue'})
   }
}

module.exports = {
    find,
    add
}