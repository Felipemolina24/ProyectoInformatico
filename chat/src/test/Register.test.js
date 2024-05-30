import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Register from '../pages/register/register';
// Mock axios to simulate API calls


describe('Pruebas para el componente Register', () => {
    // Función simulada de registerUser


    const wrapper = ({ isAuthenticated = false, error = [] }) => render(
        <Router>
            <AuthContext.Provider value={{ isAuthenticated,  error }}>
                <Register />
            </AuthContext.Provider>
        </Router>
    );

    it('renders without crashing', () => {
        const { getByText } = wrapper({});
        expect(getByText('Regístrate')).toBeInTheDocument();
    });

    it('shows error when name is not entered', async () => {
        const { getByPlaceholderText, findByText } = wrapper({});
        fireEvent.submit(getByPlaceholderText('Ingresa tu nombre'));
        expect(await findByText('El nombre es obligatorio')).toBeInTheDocument();
    });

    it('shows error when email is not entered', async () => {
        const { getByPlaceholderText, findByText } = wrapper({});
        fireEvent.submit(getByPlaceholderText('usuario@example.com'));
        expect(await findByText('El correo es obligatorio')).toBeInTheDocument();
    });

    it('shows error when password is not entered', async () => {
        const { getByPlaceholderText, findByText } = wrapper({});
        fireEvent.submit(getByPlaceholderText('Digite una contraseña'));
        expect(await findByText('La contraseña es obligatoria')).toBeInTheDocument();
    });

    it('displays custom error message from context', () => {
        const { getByText } = wrapper({ error: ['Custom error message'] });
        expect(getByText('Custom error message')).toBeInTheDocument();
    });
});
