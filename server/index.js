const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
const router = require('./router')
const { addUsers, removeUser, getUser, getUsersInRoom } = require('./users')
const port = process.env.PORT || 5000

io.on('connection', (socket) => {
  console.log('We have a new connection!!!')

  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUsers({ id: socket.id, name, room })

    if (error) return callback(error)

    socket.emit('message', {
      user: 'admin',
      text: `${user.name}, welcome to the room`,
    })

    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'admin', text: `${user.name}, has joined` })

    socket.join(user.room)

    callback()
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message', { user: user.name, text: message })

    callback()
  })

  socket.on('disconnect', () => {
    console.log('User had left!!!')
  })
})

app.use(router)

server.listen(port, () => console.log(`Server has started on port ${port}`))
