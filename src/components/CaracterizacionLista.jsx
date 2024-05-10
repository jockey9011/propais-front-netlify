import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import './caracterizacionLista.css';

export default function CaracterizacionLista() {
  const [caracterizaciones, setCaracterizaciones] = useState([]);
  const [asesorNames, setAsesorNames] = useState({});
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [availableAsesors, setAvailableAsesors] = useState([]);
  const [selectedAsesor, setSelectedAsesor] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

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

  useEffect(() => {
    if (selectedRows.length === 1) {
      // Si solo hay un elemento seleccionado, obtenemos el asesor asociado a ese elemento
      const caracterizacion = caracterizaciones.find(caracterizacion => caracterizacion.id === selectedRows[0]);
      setSelectedAsesor(caracterizacion?.relAsesor || "");
    } else {
      // Si hay múltiples elementos seleccionados o ninguno, dejamos el asesor seleccionado como una cadena vacía
      setSelectedAsesor("");
    }
  }, [selectedRows, caracterizaciones]);

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
  
        console.log(`Updated caracterizacion with ID ${id}:`, response.data);
      }
  
      getCaracterizaciones(); 
      closeModal();
    } catch (error) {
      console.error('Error updating asesors:', error.response ? error.response.data : error.message);
    }
  };

  const getCaracterizaciones = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('https://propais-back-render.onrender.com/caracterizations', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCaracterizaciones(response.data);
      fetchAsesorNames(response.data);
    } catch (error) {
      console.error('Error fetching caracterizaciones:', error);
    }
  };

  const fetchAsesorNames = async (caracterizacionesData) => {
    const token = localStorage.getItem('token');
    const names = {};
    for (const caracterizacion of caracterizacionesData) {
      try {
        const response = await axios.get(`https://propais-back-render.onrender.com/users/${caracterizacion.relAsesor}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        names[caracterizacion.relAsesor] = `${response.data.firstName} ${response.data.lastName}`;
      } catch (error) {
        console.error(`Error fetching asesor name for ID ${caracterizacion.relAsesor}:`, error);
      }
    }
    setAsesorNames(names);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      getCaracterizaciones();
    }
  }, []);

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    if (isChecked) {
      const allIds = caracterizaciones.map((caracterizacion) => caracterizacion.id);
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
    console.log(`View caracterizacion with ID: ${id}`);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('Archivo seleccionado:', file); // Verifica si el archivo se captura correctamente
    setSelectedFile(file); // Establece el archivo en el estado selectedFile
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');  
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
        const response = await fetch('https://propais-back-render.onrender.com/caracterizations/upload-bulk', {
            method: 'POST',
            body: formData,
            headers: {
              Authorization: `Bearer ${token}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message); // Mensaje de éxito del servidor
        } else {
            const errorData = await response.json();
            console.error('Error al subir el archivo:', errorData.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
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
              <h1>Caracterizaciones</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                {selectedRows.length > 0 && (
                  <button type="button" className="btn btn-block btn-secondary fondo-azul-emprendimiento" onClick={openModal}>
                    Modificar Asesor
                  </button>
                )}
              </ol>
              {/* <ol className="breadcrumb float-sm-right mr-1">
              <form onSubmit={handleSubmit}>
    <input type="file" onChange={handleFileChange} accept=".csv" />
    <button type="submit">Subir Archivo</button>
</form>

</ol> */}

              <ol className="breadcrumb float-sm-right mr-1">
                <Link to="/agregarCaracterizacion">
                  <button type="button" className="btn btn-block btn-primary fondo-azul-emprendimiento">Agregar Emprendimiento</button>
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
                {Array.isArray(caracterizaciones) && caracterizaciones.map((caracterizacion) => (
                  <tr key={caracterizacion.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={isRowSelected(caracterizacion.id)}
                        onChange={(e) => handleSelectRow(e, caracterizacion.id)}
                      />
                    </td>
                    <td>{caracterizacion.id}</td>
                    <td>
                      <strong>{`${caracterizacion.primerNombre} ${caracterizacion.segundoNombre} ${caracterizacion.primerApellido} ${caracterizacion.segundoApellido}`}</strong>
                      <br />
                      <i className="fas fa-envelope text-muted"></i> <span className="text-muted">{caracterizacion.correoElectronico}</span>
                    </td>
                    <td>
                      <strong>{caracterizacion.nombreEmprendimiento}</strong>
                      <br />
                      NIT: {caracterizacion.numeroRUTNIT}
                      <br />
                      C.C: {caracterizacion.numeroDocumento}
                    </td>
                    <td>{caracterizacion.localidad}</td>
                    <td>{asesorNames[caracterizacion.relAsesor]}</td>
                    <td>
                      {(() => {
                        switch (caracterizacion.estado) {
                          case 'caracterización':
                            return <span className="badge badge-warning">{caracterizacion.estado}</span>;
                          case 'formación':
                            return <span className="badge badge-info">{caracterizacion.estado}</span>;
                          case 'capitalización':
                            return <span className="badge badge-success">{caracterizacion.estado}</span>;
                          case 'retirado':
                            return <span className="badge badge-danger">{caracterizacion.estado}</span>;
                          default:
                            return <span className="badge badge-info">{caracterizacion.estado}</span>;
                        }
                      })()}
                    </td>

                    <td className="project-actions text-left">
                      <Link to={`/verCaracterizacion/${caracterizacion.id}`}>
                        <button className="btn btn-primary fondo-azul-emprendimiento btn-md mr-1" onClick={() => handleView(caracterizacion.id)}>Editar</button>
                      </Link>
                    </td>
                  </tr>
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
            
            {/* Aquí va el formulario */}
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
