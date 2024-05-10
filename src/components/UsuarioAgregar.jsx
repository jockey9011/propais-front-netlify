import React, { useState } from 'react';
import axios from 'axios';

export default function UsuarioAgregar() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rol: '',
    status: true, // Estado por defecto
    phone: '',
    documentType: '',
    document: '',
    documentCity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://propais-back-render.onrender.com/users', userData);
      // Lógica adicional después de agregar el usuario (redireccionar, mostrar mensaje, etc.)
      console.log('Usuario agregado exitosamente');
    } catch (error) {
      console.error('Error al agregar usuario:', error);
    }
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Agregar Usuario</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="row">
          <div className="col-md-7">
            <div className="card card-primary">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="firstName">Primer nombre</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="form-control"
                      value={userData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Apellido</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="form-control"
                      value={userData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={userData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      value={userData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rol">Rol</label>
                    <select
                      id="rol"
                      name="rol"
                      className="form-control custom-select"
                      value={userData.rol}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione un rol</option>
                      <option value="administrador">Administrador</option>
                      <option value="monitor">Monitor</option>
                      <option value="asesor">Asesor</option>
                      <option value="OSF">OSF</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={userData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="documentType">Tipo de documento</label>
                    <input
                      type="text"
                      id="documentType"
                      name="documentType"
                      className="form-control"
                      value={userData.documentType}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="document">Documento</label>
                    <input
                      type="text"
                      id="document"
                      name="document"
                      className="form-control"
                      value={userData.document}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="documentCity">Ciudad de documento</label>
                    <input
                      type="text"
                      id="documentCity"
                      name="documentCity"
                      className="form-control"
                      value={userData.documentCity}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Agregar Usuario
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
