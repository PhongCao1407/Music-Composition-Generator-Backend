// require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs');

app.use(cors())
// app.use(express.static('musicgenerator/Baroque'))
// app.use(express.static('musicgenerator/Classical'))
// app.use(express.static('musicgenerator/Romantic'))
app.use(express.static('build'))
app.use(express.json())


app.get('/romantic', async (req, res) => {
    const fileDirectory = './musicgenerator/Romantic/'
    fs.readdir(fileDirectory, (err, files) => {
        randomFile = files[Math.floor(Math.random()*files.length)];
        res.sendFile(randomFile, {root: fileDirectory}, (err) => {
            res.end();
            if (err) throw(err);
        })
    })
})



// Deploy app to Port 3001
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})