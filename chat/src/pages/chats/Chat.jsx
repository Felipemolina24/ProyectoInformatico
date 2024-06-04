import React from "react";
import "./Chat.css";
import { LuSearch, LuUserCircle2 } from "react-icons/lu";

export default function Chat() {
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
                    <p>Container chat</p>
                </div>
                <div className="user-chat-bottom-chats">
                    <input type="text" placeholder="Escribe tu mensaje" className="input-chat-message-to-send" />
                    <button className="send-messages-button">Enviar</button>
                </div>
            </div>

        </div>
    )
}