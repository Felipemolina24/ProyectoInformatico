import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chat from '../pages/chats/Chat';
import { AuthProvider } from '../context/AuthContext';
import io from 'socket.io-client';

// Mock del socket dentro de un IIFE
const socketMock = (() => {
  const mock = {
    emit: jest.fn(),
    on: jest.fn(),
    off: jest.fn()
  };

  jest.mock('socket.io-client', () => jest.fn(() => mock));
  return mock;
})();

describe('Chat Component Tests', () => {
  beforeEach(() => {
    // Limpiar todos los mocks antes de cada prueba
    socketMock.emit.mockClear();
    socketMock.on.mockClear();
    socketMock.off.mockClear();
  });

  test('renders the chat component', () => {
    render(
      <AuthProvider>
        <Chat />
      </AuthProvider>
    );
    const buttonElement = screen.getByText(/Enviar/i);
    expect(buttonElement).toBeInTheDocument();
  });

  

});
