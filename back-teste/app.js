const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send(`Hello there ${req.hostname}!`)
})

app.listen(port	, () => {
    console.log(`frontend running, port ${port}`)
})