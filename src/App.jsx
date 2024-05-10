import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Aside from './components/Aside';
import Content from './components/Content';
import Footer from './components/Footer';
import CaracterizacionLista from './components/CaracterizacionLista';
import UsuarioLista from './components/UsuarioLista';
import CaracterizacionAgregar from './components/CaracterizacionAgregar';
import CaracterizacionVer from './components/CaracterizacionVer';
import CapitalizacionLista from './components/CapitalizacionLista';
import CapitalizacionVer from './components/CapitalizacionVer';
import DescargaMasiva from './components/DescargaMasiva'; 
import UsuarioVer from './components/UsuarioVer';
import UsuarioAgregar from './components/UsuarioAgregar';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="wrapper">
          <Aside />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/dashboard/*" element={<PrivateRoute />} />
            <Route path="/caracterizacion/*" element={<CaracterizacionLista />} />
            <Route exact path="/agregarCaracterizacion/*" element={<CaracterizacionAgregar />} />
            <Route exact path="/verCaracterizacion/:id/*" element={<CaracterizacionVer />} />
            <Route path="/usuarios/*" element={<UsuarioLista />} />
            <Route path="/editarUsuario/:id" element={<UsuarioVer />} />
            <Route path="/agregarUsuario/*" element={<UsuarioAgregar />} />
            <Route path="/capitalizacion/*" element={<CapitalizacionLista />} />
            <Route exact path="/verCapitalizacion/:id/*" element={<CapitalizacionVer />} />
            <Route path="/descarga-masiva/*" element={<DescargaMasiva />} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function PrivateRoute() {
  const token = localStorage.getItem('token');
  if (!token) {
    // Si no hay token, redirigir al inicio de sesión
    return <Navigate to="/" />;
  }
  // Si hay token, renderiza el contenido privado
  return <Content />;
}
