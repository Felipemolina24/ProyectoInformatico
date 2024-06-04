import React, { useEffect } from 'react';
import "./login.css";
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import Animated from "./animation/animated";

export default function Login() {
    //Biblioteca para la gestión de formularios
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { login, isAuthenticated, error } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    });

    //Función para enviar el formulario a la API
    const onSubmit = handleSubmit(async (values) => {
        login(values);
    });

    return (
        <div className="wrapper-login">
            <div className="wrapper-login-basic wrapper-login-left">
                <form onSubmit={onSubmit} className="form">
                    <h3 className="title-login">Nos alegra verte por aqui</h3>
                    <p className="subtext-login">
                        Ingresa ahora y no te pierdas nada de nuestra comunidad
                    </p>
                    <div className="container-align">
                        <div className="inputs-container">
                            <p  >Correo</p>
                            <div className="input-box">
                                <input type="text" {...register("email", { required: true })} placeholder="usuario@example.com" />
                                <FaUser className="icon" />
                                {errors.email && (
                                    <p style={{ color: 'red' }} > El correo es obligatorio </p>
                                )}
                            </div>
                        </div>
                        <div className="inputs-container">
                            <div className="texts-password">
                                <p>Contraseña</p>
                                <a href="#" className="forms-links">
                                    Olvidaste tu contraseña?
                                </a>

                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    {...register("password", { required: true })}
                                    placeholder="Digite su contraseña"
                                />
                                <FaLock className="icon" />
                                {
                                    errors.password && (
                                        <p style={{ color: 'red', padding: '5px' }}> La contraseña es obligatoria </p>
                                    )
                                }

                            </div>
                        </div>
                        <div className="checkbox-container">
                            <input type="checkbox" required />
                            <label>
                                He leído y acepto los{" "}
                                <a href="#" className="forms-links">
                                    términos y condiciones
                                </a>
                            </label>
                        </div>
                        <button type="submit" id="login-btn">
                            Iniciar sesión
                        </button>
                            {
                                error.map((err, index) => (
                                    <div key={index} >
                                        <span style={{ color: 'red', fontWeight: 'semibold' }}>{err}</span>
                                    </div>
                                ))
                            }

                    </div>

                    <p style={{ textAlign: "center", width: "100%" }}>
                        No estas registrado?{" "}
                        <Link to="/register" className="forms-links"> Registrar </Link>
                    </p>
                </form>
            </div>
            <div className="wrapper-login-basic wrapper-login-right">
                <Animated />
            </div>
        </div>
    );
}
