const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const PORT = process.env.PORT || 3000

io.on('connection', (socket) => {
    console.log('client connected')
    socket.on('disconnect', () => {
        console.log('client disconnected')
    })
})

app.get('/', (req, res) => {
    res.send('Home route')
})

server.listen(PORT, () => console.log(`Server listening at port ${PORT}`))