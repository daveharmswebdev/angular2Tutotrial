const express = require('express')
const compression = require('compression')

process.on('uncaughtExpress', console.error)

const app = express()
app.use(compression())

app.use(express.static(__dirname + '/'))

const port = 3011

app.listen(port, () => {
    console.log('express now listening on port', port)
})