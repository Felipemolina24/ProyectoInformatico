import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Login from '../pages/login/login';
import { useNavigate } from 'react-router-dom';
import { loginRequest, getUser } from '../api/auth';


describe('Pruebas para el componente Login', () => {
    // Función simulada de login
    const mockLogin = jest.fn();
    const mockNavigate = jest.fn();

  

    const wrapper = ({ isAuthenticated = false, error = [] }) => render(
        <Router>
            <AuthContext.Provider value={{ isAuthenticated, login: mockLogin, error }}>
                <Login />
            </AuthContext.Provider>
        </Router>
    );

    it('renders without crashing', () => {
        const { getByText } = wrapper({});
        expect(getByText('Nos alegra verte por aqui')).toBeInTheDocument();
    });

    it('shows error when email is not entered', async () => {
        const { getByText, getByPlaceholderText, findByText } = wrapper({});
        fireEvent.submit(getByPlaceholderText('usuario@example.com'));
        expect(await findByText('El correo es obligatorio')).toBeInTheDocument();
    });

    it('displays custom error message from context', () => {
        const { getByText } = wrapper({ error: ['Custom error message'] });
        expect(getByText('Custom error message')).toBeInTheDocument();
    });

    it('submits the form with email and password', async () => {
        const { getByPlaceholderText, getByText } = wrapper({});
        fireEvent.change(getByPlaceholderText('usuario@example.com'), { target: { value: 'test@example.com' } });
        fireEvent.change(getByPlaceholderText('Digite su contraseña'), { target: { value: 'password123' } });
        fireEvent.click(getByText('Iniciar sesión'));
        await waitFor(() => {
            expect(mockLogin).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password123' });
        });
    });
    
});
