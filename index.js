// require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs');
const helper = require('./helper')

app.use(cors())
// app.use(express.static('musicgenerator/Baroque'))
// app.use(express.static('musicgenerator/Classical'))
// app.use(express.static('musicgenerator/Romantic'))
app.use(express.static('build'))
app.use(express.json())

app.get('/baroque', async (req, res) => {
    res.set('Access-Control-Expose-Headers','*')

    const fileDirectory = './musicgenerator/Baroque/'
    fs.readdir(fileDirectory, (err, files) => {
        randomFile = files[Math.floor(Math.random()*files.length)];

        const headers = helper.getPieceDetails(randomFile) 

        let options = {
            root: fileDirectory,
            headers: headers
        }

        res.sendFile(randomFile, 
            options, 
            (err) => {
            res.end();
            if (err) throw(err);
        })
    })
})

app.get('/classical', async (req, res) => {
    res.set('Access-Control-Expose-Headers','*')

    const fileDirectory = './musicgenerator/Classical/'
    fs.readdir(fileDirectory, (err, files) => {
        randomFile = files[Math.floor(Math.random()*files.length)];

        const headers = helper.getPieceDetails(randomFile) 

        let options = {
            root: fileDirectory,
            headers: headers
        }

        res.sendFile(randomFile, 
            options, 
            (err) => {
            res.end();
            if (err) throw(err);
        })
    })
})

app.get('/romantic', async (req, res) => {
    res.set('Access-Control-Expose-Headers','*')

    const fileDirectory = './musicgenerator/Romantic/'
    fs.readdir(fileDirectory, (err, files) => {
        randomFile = files[Math.floor(Math.random()*files.length)];

        const headers = helper.getPieceDetails(randomFile) 

        let options = {
            root: fileDirectory,
            headers: headers
        }

        res.sendFile(randomFile, 
            options, 
            (err) => {
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