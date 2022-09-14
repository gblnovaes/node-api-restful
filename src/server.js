const express = require('express')
    // const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

//habilita server para receber dados em formato json
app.use(express.json())

app.use('/api', routes)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running in port ${port}.`)
})