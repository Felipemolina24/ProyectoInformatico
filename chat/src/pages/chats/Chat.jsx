import React, { useEffect, useState } from 'react'
import "./Chat.css";
import { LuSearch, LuUserCircle2 } from "react-icons/lu";
import { useAuth } from '../../context/AuthContext'
import io from 'socket.io-client'
import { useForm } from 'react-hook-form'

//objeto para poder enviar datos al servidor y recibir respuestas
const socket = io('http://localhost:4000')

export default function Chat() {

    const [messages, setMessages] = useState([])

    const { user } = useAuth()

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = handleSubmit((data) => {
        socket.emit('message', data)
        const newMessage = {
            body: data.message,
            from: user?.usuario
        }
        setMessages([...messages, newMessage])
        reset();
    })

    useEffect(() => {
        const receiveMessage = (message) => {
            setMessages([...messages, message])
        }
        socket.on('message', (receiveMessage))

        return () => {
            socket.off('message', receiveMessage)
        }
    }, [messages])


    return (
        <div className="chat-prin-container">
            <div className="chats-history-container">
                <div className="chats-searcher-container">
                    <div className="chats-searcher-subcontainer">
                        <input type="text" placeholder="Buscar" className="input-search-chats" />
                        <button className="search-button-chats">
                            <LuSearch />
                        </button>
                    </div>
                </div>
                <div className="chats-history-subcontainer">
                    <div className="user-history-chat-user">
                        <div className="user-chat-details">
                            <LuUserCircle2 />
                            <p>Angie Crinsome</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-user-container">
                <div className="user-chat-top-info">
                    <LuUserCircle2 />
                    <p>Angie Crinsome</p>
                </div>
                <div className="user-chat-bottom-container">
                    {messages.map((message, index) => (
                        <div key={index} className={`message-container ${message.from === user?.usuario ? 'sent' : 'received'}`}>
                            <p>{message.body}</p>
                        </div>
                    ))}
                </div>
                <div className="user-chat-bottom-chats">
                    <form onSubmit={onSubmit}>
                        <textarea type="text"  {...register("message")} placeholder="Escribe tu mensaje" className="input-chat-message-to-send" />
                        <button type="submit" className="send-messages-button">Enviar</button>
                    </form>
                </div>
            </div>

        </div>
    )
}