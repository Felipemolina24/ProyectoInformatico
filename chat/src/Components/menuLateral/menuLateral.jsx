import React from "react";
import "./menuLateral.css";
import rocket from "../../rocketchat.png";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { TbUserPentagon } from "react-icons/tb";
import { PiChatCenteredDotsLight, PiGearLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";

export default function MenuLateral() {
    const navigate = useNavigate();

    return (
        <div className="dashboard-wrapper-left">
            <div className="logo-dashboard">
                <img src={rocket} className="logo-icon" alt="logo" />
                <h3>RocketChat</h3>
            </div>
            <div className="menu-dashboard-container">
                <div className="menu-dashboard-options" onClick={() => navigate("/dashboard")}>
                    <BsGrid />
                    <p>dashboard</p>
                </div>
                <div className="menu-dashboard-options" onClick={() => navigate("/perfil")}>
                    <TbUserPentagon />
                    <p>perfil</p>
                </div>
                <div className="menu-dashboard-options" onClick={() => navigate("/chat")}>
                    <PiChatCenteredDotsLight />
                    <p>chats</p>
                </div>
                <div className="menu-dashboard-options" onClick={() => navigate("/ajustes")}>
                    <PiGearLight />
                    <p>ajustes</p>
                </div>
            </div>
            <div className="logout-session-dashboard">
                <div className="logout-session-container" onClick={() => navigate("/")}>
                    <AiOutlinePoweroff />
                    <p>Cerrar sesión</p>
                </div>
            </div>
        </div>
    )
}