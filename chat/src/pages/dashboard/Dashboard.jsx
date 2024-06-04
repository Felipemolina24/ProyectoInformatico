import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Dashboard.css"; // Import the CSS file
import AnimatedD from "./animationD/animatedD";
import rocket from "../../rocketchat.png";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { TbUserPentagon } from "react-icons/tb";
import { PiChatCenteredDotsLight, PiGearLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";

const Dashboard = () => {
  
  const navigate = useNavigate();

  const CerrarSesion = () => {
    navigate('/');
  };

  const CerrarMenuLateral = () => {
  }

  const AbrirMenuLateral = () => {
  }


  return (
    <div className="wrapper-dashboard">
      <AnimatedD />
    </div>
  );
};

export default Dashboard;
