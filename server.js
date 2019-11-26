let express = require('express');
let app = express()

let http = require('http')
let server = http.Server(app)

app.use(express.static('client'))

server.listen(8000, () => console.log('Chat server running'))