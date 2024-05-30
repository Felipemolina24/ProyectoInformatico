import express from "express";
import authRoutes from "./routes/auth.routes.js"
import friendRoutes from "./routes//friend.routes.js"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { Server as SocketServer } from 'socket.io'
import http from 'http'

const app = express() // instanciando express
const server = http.createServer(app)
const io = new SocketServer(server, { cors: { origin: 'http://localhost:3000' } })


app.use(cors()) // habilitando cors
app.use(express.json()) // habilitando json 
app.use(cookieParser()) // habilitando cookie-parser 
app.use("/api", authRoutes) // habilitando rutas de autenticacion
app.use("/api", friendRoutes) // habilitando rutas para la gestión de amistades

io.on('connection', (socket) => {

    socket.on('message', (message) => {
        console.log(message.message);
        socket.broadcast.emit('message', {
            body: message.message,
            from: socket.id
        })
    })
})

export default server