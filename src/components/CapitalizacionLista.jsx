import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './capitalizacionLista.css';

export default function CapitalizacionLista() {
  const [capitalizaciones, setCapitalizaciones] = useState([]);
  const [asesorNames, setAsesorNames] = useState({});
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [availableAsesors, setAvailableAsesors] = useState([]);
  const [selectedAsesor, setSelectedAsesor] = useState("");

  const openModal = () => {
    loadAsesors();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const loadAsesors = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('https://propais-back-render.onrender.com/users', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          rol: 'asesor'
        }
      });
      setAvailableAsesors(response.data);
    } catch (error) {
      console.error('Error fetching asesors:', error);
    }
  };

  const updateSelectedAsesors = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const selectedAsesorId = selectedAsesor;
  
    try {
      for (const id of selectedRows) {
        const response = await axios.put(`https://propais-back-render.onrender.com/caracterizations/${id}`, {
          relAsesor: selectedAsesorId
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        console.log(`Updated capitalizacion with ID ${id}:`, response.data);
      }
  
      getCapitalizaciones();
      closeModal();
    } catch (error) {
      console.error('Error updating asesors:', error.response ? error.response.data : error.message);
    }
  };

  const getCapitalizaciones = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('https://propais-back-render.onrender.com/caracterizations', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCapitalizaciones(response.data);
      fetchAsesorNames(response.data);
    } catch (error) {
      console.error('Error fetching caracterizaciones:', error);
    }
  };



  
  const fetchAsesorNames = async (capitalizacionesData) => {
    const token = localStorage.getItem('token');
    const names = {};
    for (const capitalizacion of capitalizacionesData) {
      try {
        const response = await axios.get(`https://propais-back-render.onrender.com/users/${capitalizacion.relAsesor}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        names[capitalizacion.relAsesor] = `${response.data.firstName} ${response.data.lastName}`;
      } catch (error) {
        console.error(`Error fetching asesor name for ID ${capitalizacion.relAsesor}:`, error);
      }
    }
    setAsesorNames(names);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      getCapitalizaciones();
    }
  }, []);

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    if (isChecked) {
      const allIds = capitalizaciones.map((capitalizacion) => capitalizacion.id);
      setSelectedRows(allIds);
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (e, id) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedRows((prevSelected) => [...prevSelected, id]);
    } else {
      setSelectedRows((prevSelected) => prevSelected.filter((selectedId) => selectedId !== id));
    }
  };

  const isRowSelected = (id) => selectedRows.includes(id);

  const handleView = (id) => {
    console.log(`View capitalizacion with ID: ${id}`);
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
              <h1>Capitalizaciones</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                {selectedRows.length > 0 && (
                  <button type="button" className="btn btn-block btn-secondary" onClick={openModal}>
                    Modificar Asesor
                  </button>
                )}
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
                  <th><input type="checkbox" checked={selectAll} onChange={handleSelectAll} /></th>
                  <th>ID</th>
                  <th>Nombres</th>
                  <th>Empresa</th>
                  <th>Localidad</th>
                  <th>Asesor</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(capitalizaciones) && capitalizaciones.map((capitalizacion) => (
                  (capitalizacion.estado === 'capitalización' || capitalizacion.estado === 'formación') && (
                    <tr key={capitalizacion.id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={isRowSelected(capitalizacion.id)}
                          onChange={(e) => handleSelectRow(e, capitalizacion.id)}
                        />
                      </td>
                      <td>{capitalizacion.id}</td>
                      <td>
                        <strong>{`${capitalizacion.primerNombre} ${capitalizacion.segundoNombre} ${capitalizacion.primerApellido} ${capitalizacion.segundoApellido}`}</strong>
                        <br />
                        <i className="fas fa-envelope text-muted"></i> <span className="text-muted">{capitalizacion.correoElectronico}</span>
                      </td>
                      <td>
                        <strong>{capitalizacion.nombreEmprendimiento}</strong>
                        <br />
                        NIT: {capitalizacion.numeroRUTNIT}
                        <br />
                        C.C: {capitalizacion.numeroDocumento}
                      </td>
                      <td>{capitalizacion.localidad}</td>
                      <td>{asesorNames[capitalizacion.relAsesor]}</td>
                      <td>
                      {(() => {
                        switch (capitalizacion.estado) {
                          case 'caracterización':
                            return <span className="badge badge-warning">{capitalizacion.estado}</span>;
                          case 'formación':
                            return <span className="badge badge-info">{capitalizacion.estado}</span>;
                          case 'capitalización':
                            return <span className="badge badge-success">{capitalizacion.estado}</span>;
                          case 'retirado':
                            return <span className="badge badge-danger">{capitalizacion.estado}</span>;
                          default:
                            return <span className="badge badge-info">{capitalizacion.estado}</span>;
                        }
                      })()}
                    </td>
                      <td className="project-actions text-left">
                        <Link to={`/verCapitalizacion/${capitalizacion.id}`}>
                          <div className="button-container">
                            <button className="btn btn-info btn-sm mb-1 fondo-azul-plan-inversion" onClick={() => handleView(capitalizacion.id)}>Plan de inversión</button>
                            </div>
                        </Link>
                        <Link to={`/verCaracterizacion/${capitalizacion.id}`}>
                          <div className="button-container">
                            <button className="btn border btn-sm mb-1 fondo-blanco-botones" onClick={() => handleView(capitalizacion.id)}>Ver datos</button>
                            </div>
                        </Link>
                        <Link to={`/verCapitalizacion/${capitalizacion.id}`}>
                          <div className="button-container">
                            <button className="btn border btn-sm mb-1 fondo-blanco-botones" onClick={() => handleView(capitalizacion.id)}>Descargar</button>
                            </div>
                        </Link>
                          
                      </td>

                    </tr>
                  )
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </section>

      {/* Ventana modal */}
      {showModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Listado de Asesores</h2>
            <form onSubmit={updateSelectedAsesors}>
              <div className="form-group">
                <label htmlFor="asesor">Seleccionar Asesor:</label>
                <select
                  className="form-control"
                  id="asesor"
                  value={selectedAsesor}
                  onChange={(e) => setSelectedAsesor(e.target.value)}
                >
                  {availableAsesors.map((asesor) => (
                    <option key={asesor.id} value={asesor.id}>
                      {`${asesor.firstName} ${asesor.lastName}`}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Actualizar</button>
              <button type="button" className="btn btn-secondary mr-2" onClick={closeModal}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

