require('dotenv').config()

const App = require('./server')

const PORT = process.env.PORT

App.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})