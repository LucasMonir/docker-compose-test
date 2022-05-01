const express = require('express')
const app = express()
const port = 5000 
const axios = require('axios')
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/getback', async (req, res) => {
    var resp = await axios.get('http://backend:3000').then(response => response.data)
    res.send(resp)
})

app.listen(port, () => {
    console.log(`frontend running, port ${port}`)
})