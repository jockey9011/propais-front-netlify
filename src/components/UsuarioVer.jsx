import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UsuarioVer() {
  const { id } = useParams();

  const defaultUserData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '', // Valor predeterminado para el campo phone
    documentType: '', // Valor predeterminado para el campo documentType
    document: '', // Valor predeterminado para el campo document
    documentCity: '', // Valor predeterminado para el campo documentCity
    rol: '',
    status: true,
  };
  
  const [userData, setUserData] = useState(defaultUserData);
  const [editable, setEditable] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(true); // Inicializado como true

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://propais-back-render.onrender.com/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data);
        setSelectedRole(response.data.rol);
        setSelectedStatus(response.data.status); // Asignar el valor directamente
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    if (!editable) return;

    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setUserData({
      ...userData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://propais-back-render.onrender.com/users/${id}`, userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setEditable(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleEdit = () => {
    setEditable(!editable);
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    setUserData({
      ...userData,
      rol: e.target.value
    });
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value === 'true'; // Convertir la cadena de texto a booleano
    setSelectedStatus(newStatus);
    setUserData({
      ...userData,
      status: newStatus,
    });
  };
  
  
  if (!userData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>{`${userData.firstName} ${userData.lastName}`}</h1>
              <p>Email: {userData.email}</p>
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
                      disabled={!editable}
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
                      disabled={!editable}
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
                      disabled={!editable}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rol">Rol</label>
                    <select
                      id="rol"
                      name="rol"
                      className="form-control"
                      value={selectedRole}
                      onChange={handleRoleChange}
                      disabled={!editable}
                    >
                      <option value="">Seleccione un rol</option>
                      <option value="administrador">Administrador</option>
                      <option value="monitor">Monitor</option>
                      <option value="asesor">Asesor</option>
                      <option value="OSF">OSF</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="status">Estado</label>
                    <select
                      id="status"
                      name="status"
                      className="form-control"
                      value={selectedStatus}
                      onChange={handleStatusChange}
                      disabled={!editable}
                    >
                      <option value={true}>Activo</option>
                      <option value={false}>Inactivo</option>
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
                      disabled={!editable}
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
                      disabled={!editable}
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
                      disabled={!editable}
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
                      disabled={!editable}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary ml-2"
                    onClick={toggleEdit}
                  >
                    {editable ? 'Cancelar' : 'Editar'}
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
