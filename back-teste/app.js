const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
    res.send('hewwo world')
})


app.listen(3000, () => {
    console.log('port 3000 is up, fellas')
})