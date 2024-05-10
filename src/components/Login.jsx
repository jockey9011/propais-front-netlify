import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://propais-back-render.onrender.com/users/login', {
        email,
        password,
      });
      const user = response.data.user;
      const token = response.data.token;

      localStorage.setItem('token', token);
      localStorage.setItem('userName', user.firstName + ' ' + user.lastName);
      console.log('Nombre de usuario guardado:', user.firstName);
      // Realiza la redirección al dashboard después del inicio de sesión exitoso
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejar el error de inicio de sesión
    }
  };

  return (
    <body className="hold-transition login-page fondo1">
    <div className="container-fluid h-100">
      <div className="row h-100">
        {/* Contenedor del formulario en la mitad izquierda */}
        <div className="col-lg-4 bg-white d-flex align-items-center justify-content-center">
          <div className="login-box">
            <div className="estilo">
              <div className="card-header text-center">
                <a href="/" className="h1">Oportunidades <b>Sin Fronteras</b></a>
              </div>
              <div className="card-body">
                {/* Contenido del formulario */}
                <form onSubmit={handleLogin}>
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Ingresa tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Ingresa la contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                   
                    <div className="col-4">
                      <button type="submit" className="btn boton-login btn-block">Ingresar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
  
        {/* Imagen de fondo a la derecha */}
        <div className="col-lg-8 bg-img" />
      </div>
    </div>
  </body>
  
  );
}
