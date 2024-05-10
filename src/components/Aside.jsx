import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './aside.css';

export default function Aside() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName'); 

  const handleLogout = () => {
    // Elimina el token del usuario al cerrar sesión
    localStorage.removeItem('token');
    localStorage.removeItem('userName'); 
    // Redirecciona al usuario a la página de inicio de sesión después de cerrar sesión
    navigate('/'); // Redirige a la ruta de inicio de sesión
  };

  // Verifica si hay un token en el almacenamiento local
  const token = localStorage.getItem('token');

  // Si no hay token, no se muestra el aside
  if (!token) {
    return null;
  }

  // Si hay token, se muestra el aside
  return (
    <>
      <aside className="main-sidebar main-sidebar-custom background-color elevation-4">
        {/* Brand Logo */}
        <a href="../../index3.html" className="brand-link">
          <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light color-font">Impulso Local</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block color-font">{userName}</a>
            </div>
          </div>
          
          
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}

              <li className="nav-item">
                <a href="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-th color-font" />
                  <p className='color-font'>
                    Escritorio
                  </p>
                </a>
              </li>
              <li className="nav-item">
              <a href="/caracterizacion" className="nav-link">
                <i className="nav-icon fas fa-list color-font" />
                <p className='color-font'>
                  Caracterización
                </p>
                </a>
              </li>

              <li className="nav-item">
                <a href="/capitalizacion" className="nav-link">
                  <i className="nav-icon fas fa-check color-font" />
                  <p className='color-font'>
                    Listado Final
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/usuarios" className="nav-link">
                  <i className="nav-icon fas fa-users color-font" />
                  <p className='color-font'>
                    Usuarios
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/descarga-masiva" className="nav-link">
                  <i className="nav-icon fas fa-download color-font" />
                  <p className='color-font'>
                    Descarga Masiva
                  </p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
        <div className="sidebar-custom">
          {/* Aquí debajo agregamos el botón de cerrar sesión */}
          <button onClick={handleLogout} className="btn boton-cerrar-sesión btn-block">Cerrar sesión</button>
        </div>
        {/* /.sidebar-custom */}
      </aside>
    </>
  );
}
