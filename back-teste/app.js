const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors({
    origin: 'http://localhost:5000' 
}))

app.get('/', (req, res) => {
    res.send('Hello there!')
})

app.listen(port	, () => {
    console.log(`frontend running, port ${port}`)
})