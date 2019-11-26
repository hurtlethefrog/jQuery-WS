let express = require('express');
let app = express()

let http = require('http')
let server = http.Server(app)

app.use(express.static('client'))

let io = require('socket.io')(server)

io.on('connection', () => {
    socket.on('message', (msg) => io.emit('message', msg))
})

server.listen(8000, () => console.log('Chat server running'))