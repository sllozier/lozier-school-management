const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))
app.use(express.json());
app.use(cors())
app.use(volleyball)

//this is where some things should go

app.use('/api', require('./api'))

app.use((req, res, next) => {
    if(path.extname(req.path).length > 0) {
        res.status(404).end()
    }else {
        next()
    }
});

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
});

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', '/public/index.html' ))
});

app.use((err, req, res, next) => {
    console.error(err, typeof next)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})




module.exports = app;

