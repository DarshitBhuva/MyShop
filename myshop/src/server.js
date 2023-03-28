const express = require('express');
const cors = require('cors');

const app = express()
const port = 7263

app.get('/', (req, res) => {
    res.send('Hello DoutbtOut')
})

app.use(express.json());
app.use(cors());




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})