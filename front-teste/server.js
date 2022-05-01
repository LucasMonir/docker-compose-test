const express = require('express')
const app = express()
const port = 5000 
const path = require('path')

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
    console.log(`frontend running, port ${port}`)
})