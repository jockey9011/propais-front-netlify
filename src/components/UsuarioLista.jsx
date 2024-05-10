import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function UsuarioLista() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      return;
    }

    const getUsers = async () => {
      try {
        const response = await axios.get('https://propais-back-render.onrender.com/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);

  const handleView = (id) => {
    // Implementa la lógica para ver el usuario con el ID proporcionado
    console.log(`View user with ID: ${id}`);
  };

  const handleEdit = (id) => {
    // Redireccionar al usuario a la página de edición del usuario con el ID proporcionado
    window.location.href = `/editarUsuario/${id}`;
  };

  const handleDelete = (id) => {
    // Implementa la lógica para eliminar el usuario con el ID proporcionado
    console.log(`Delete user with ID: ${id}`);
  };

  if (!localStorage.getItem('token')) {
    return null;
  }

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Usuarios</h1>
            </div>
            <div className="col-sm-6">
              <ol class="breadcrumb float-sm-right mr-1">
                <Link to="/agregarUsuario">
                  <button type="button" className="btn btn-block btn-primary">Agregar Usuario</button>
                </Link>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="card">
          <div className="card-body p-0">
            <table className="table table-striped projects">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombres</th>
                  <th>Rol</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(users) && users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName} {user.lastName}</td>
                    <td>{user.rol}</td>
                    <td>
                      <span className={`badge ${user.status ? 'badge-success' : 'badge-danger'}`}>
                        {user.status ? "Activo" : "Inactivo"}
                      </span>
                    </td>
                    <td className="project-actions text-left">
                      <button className="btn btn-info btn-sm mr-1" onClick={() => handleEdit(user.id)}>Editar</button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

