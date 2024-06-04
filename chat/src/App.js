import './App.css';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import MenuLateral from './Components/menuLateral/menuLateral';
import Chat from './pages/chats/Chat';
import Ajustes from './pages/ajustes/Ajustes';
import Perfil from './pages/perfil/Perfil';

function App() {
  /*return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
      </BrowserRouter>
    </AuthProvider>
  );*/

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />}/>
          <Route path="/register" element={<Register />} />
          <Route path='/*' element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

function DefaultLayout() {
  return (
    <div className='app-container-principal'>
      <div className="app-container-left">
        <MenuLateral />
      </div>
      <div className='app-container-right'>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/ajustes" element={<Ajustes />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;