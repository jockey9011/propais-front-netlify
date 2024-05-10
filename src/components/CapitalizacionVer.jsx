import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css';


function CapitalizacionVer() {
  const { id } = useParams();
  const token = localStorage.getItem('token');

  const [descripcionNegocio, setDescripcionNegocio] = useState('');
  const [objetivoPlanInversion, setObjetivoPlanInversion] = useState('');
  const [editable, setEditable] = useState(false);
  const [otraInformacion, setOtraInformacion] = useState({});
  const [file, setFile] = useState(null);
  const [fileMessage, setFileMessage] = useState('');
  const [uploadResponse, setUploadResponse] = useState('');
  const [archivoSeleccionado, setArchivoSeleccionado] = useState([]);
  const [fileName, setFileName] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]); // Para almacenar nombres de archivos
  const [filePaths, setFilePaths] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]); 
  const [filePathBanco, setFilePathBanco] = useState('');
  const [banco, setBanco] = useState('');
const [tipoCuenta, setTipoCuenta] = useState('');
const [numeroCuenta, setNumeroCuenta] = useState('');
const [tipoDocumento, setTipoDocumento] = useState('');
const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
const [fileMessageBanco, setFileMessageBanco] = useState('');





  const [avance, setAvance] = useState(0);
  const [capacitaciones, setCapacitaciones] = useState([
    {nombre: 'Alístate para crecer', certificado: null },
    {nombre: 'Conectándome con mi Mercado', certificado: null },
    {nombre: 'Conectándome con el Ambiente', certificado: null },
    {nombre: 'Proyectando mi futuro', certificado: null },
    {nombre: 'Conectándome con mi negocio', certificado: null },
    {nombre: 'Conexiones Digitales', certificado: null },
    // ... otros items de capacitación
  ]);

  const [aprobacionAsesor, setAprobacionAsesor] = useState(false);
    const [aprobacionPropais, setAprobacionPropais] = useState(false);


    const [formState, setFormState] = useState({
      rubro: '',
      descripcion: '',
      unidad: '',
      cantidad: '',
      precioUnitario: '',
      archivos: []
    });
    
    const [dataFromDB, setDataFromDB] = useState([]);
    const [registroExistente, setRegistroExistente] = useState(false);




  const fetchOtraInformacion = async (id) => {
    try {
      // Obtener información de caracterizations
      const response = await axios.get(`https://propais-back-render.onrender.com/caracterizations/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      let data = response.data;
  
      // Obtener firstName y lastName del asesor
      const asesorData = await fetchAsesorData(data.relAsesor);
  
      // Agregar el nombre del asesor a los datos de characterizations
      data = {
        ...data,
        relAsesorName: `${asesorData.firstName} ${asesorData.lastName}`
      };
  
      setOtraInformacion(data);
    } catch (error) {
      console.error('Error fetching additional data:', error);
    }
  };

  const fetchAsesorData = async (asesorId) => {
    try {
      const response = await axios.get(`https://propais-back-render.onrender.com/users/${asesorId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching asesor data for ID ${asesorId}:`, error);
      return {};
    }
  };

  const parseFilePaths = (filePathsString) => {
    const regex = /"([^"]+)"/g;
    let match;
    const paths = [];
  
    while ((match = regex.exec(filePathsString)) !== null) {
      paths.push(match[1]);
    }
  
    return paths;
  };
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://propais-back-render.onrender.com/capitalization/relCaracterization/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const { descripcionNegocio, objetivoPlanInversion, archivoRuta } = response.data;
        setDescripcionNegocio(descripcionNegocio || '');
        setObjetivoPlanInversion(objetivoPlanInversion || '');
        
        // Transformar archivoRuta a un array de rutas
        const parsedFilePaths = parseFilePaths(archivoRuta);
        setFilePaths(parsedFilePaths);
  
        // Obtener información adicional
        fetchOtraInformacion(id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, [id, token]);
  
  
  

  const checkIfExist = async () => {
    try {
        const response = await axios.get(`https://propais-back-render.onrender.com/capitalization/relCaracterization/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data !== null;  // Asumiendo que el servidor devuelve null si no existe
    } catch (error) {
        console.error('Error checking existence:', error);
        return false; // Asumimos que no existe si hay un error
    }
};

const fetchDataOrInitialize = async () => {
  try {
    const response = await axios.get(`https://propais-back-render.onrender.com/capitalization/relCaracterization/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.data) {
      const {
        descripcionNegocio,
        objetivoPlanInversion,
        archivoRuta,
        banco,
        tipoCuenta,
        numeroCuenta,
        tipoDocumento,
        numeroIdentificacion,
        archivoAdjunto,
        validation1,
        validation2,
        capacitacion1,
        capacitacion2,
        capacitacion3,
        capacitacion4,
        capacitacion5,
        capacitacion6
      } = response.data;

      setDescripcionNegocio(descripcionNegocio || '');
      setObjetivoPlanInversion(objetivoPlanInversion || '');
      setBanco(banco || '');
      setTipoCuenta(tipoCuenta || '');
      setNumeroCuenta(numeroCuenta || '');
      setTipoDocumento(tipoDocumento || '');
      setNumeroIdentificacion(numeroIdentificacion || '');
      setFilePathBanco(archivoAdjunto || '');
      setAprobacionAsesor(validation1 || 'Sin Información');
      setAprobacionPropais(validation2 || 'Sin Información');

      setCapacitaciones([
        { nombre: 'Alístate para crecer', certificado: capacitacion1 ? 'visto' : null },
        { nombre: 'Conectándome con mi Mercado', certificado: capacitacion2 ? 'visto' : null },
        { nombre: 'Conectándome con el Ambiente', certificado: capacitacion3 ? 'visto' : null },
        { nombre: 'Proyectando mi futuro', certificado: capacitacion4 ? 'visto' : null },
        { nombre: 'Conectándome con mi negocio', certificado: capacitacion5 ? 'visto' : null },
        { nombre: 'Conexiones Digitales', certificado: capacitacion6 ? 'visto' : null }
      ]);

      const parsedFilePaths = parseFilePaths(archivoRuta || '[]');
      setFilePaths(parsedFilePaths);

      fetchOtraInformacion(id); // Información adicional
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log('No se encontró ningún registro para el ID:', id);
    } else {
      console.error('Error fetching or initializing data:', error);
    }
  }
};




useEffect(() => {
  fetchDataOrInitialize();
}, [id]); 


const createNewRecord = async () => {
  try {
    const newData = {
      relCaracterization: id,
      // otros datos predeterminados necesarios para inicializar
    };
    const response = await axios.post(`https://propais-back-render.onrender.com/capitalization`, newData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    // Configura los estados con los datos del nuevo registro creado
  } catch (error) {
    console.error('Error creating new record:', error);
  }
};

  
const handleSubmit = async (e) => {
  e.preventDefault();

  const capacitacionesData = {
    capacitacion1: capacitaciones[0].certificado === 'visto',
    capacitacion2: capacitaciones[1].certificado === 'visto',
    capacitacion3: capacitaciones[2].certificado === 'visto',
    capacitacion4: capacitaciones[3].certificado === 'visto',
    capacitacion5: capacitaciones[4].certificado === 'visto',
    capacitacion6: capacitaciones[5].certificado === 'visto'
  };

  const validacionesData = {
    validation1: aprobacionAsesor,
    validation2: aprobacionPropais
  };

  const datosBancarios = {
    banco,
    tipoCuenta,
    numeroCuenta,
    tipoDocumento,
    numeroIdentificacion,
    archivoAdjunto: filePathBanco
  };

  const data = {
    descripcionNegocio,
    objetivoPlanInversion,
    relCaracterization: id,
    ...capacitacionesData,
    ...validacionesData,
    ...datosBancarios
  };

  try {
    const exists = await checkIfExist();

    if (exists) {
      await axios.put(`https://propais-back-render.onrender.com/capitalization/${id}`, data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('Datos actualizados');
    } else {
      await axios.post(`https://propais-back-render.onrender.com/capitalization`, data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('Datos guardados');
    }
  } catch (error) {
    console.error('Error al guardar los datos:', error.response?.data || error.message);
  }
};




  
  
  
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setArchivoSeleccionado(files);
  };
  
  
  const uploadFile = async () => {
    try {
      if (!archivoSeleccionado) {
        setFileMessage('No file selected');
        return;
      }
  
      console.log(`Uploading file for capitalization with ID: ${id}`);
  
      const formData = new FormData();
      for (let i = 0; i < archivoSeleccionado.length; i++) {
        formData.append('files', archivoSeleccionado[i]);
      }
  
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      };
  
      const response = await axios.post(`https://propais-back-render.onrender.com/capitalization/upload/${id}`, formData, config);
  
      if (response.status === 200) {
        setUploadResponse('File uploaded successfully');
        
        // Agregar el nuevo archivo a la lista filePaths
        setFilePaths(prevFilePaths => [...prevFilePaths, ...archivoSeleccionado.map(file => file.name)]);
        
        // Limpiar la variable archivoSeleccionado
        setArchivoSeleccionado(null);
      } else {
        setUploadResponse('Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
  
      if (error.response) {
        setUploadResponse(error.response.data.message || 'Error uploading file');
      } else {
        setUploadResponse('Error uploading file');
      }
    }
};

  
  
const downloadFile = async (filePath) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.get(`https://propais-back-render.onrender.com/capitalization/${id}/download?filePath=${encodeURIComponent(filePath)}`, {
      responseType: 'blob', // Tipo de respuesta esperado
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // Crear un objeto URL del blob y descargarlo
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', extractFileName(filePath)); // Establecer el nombre del archivo
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  } catch (error) {
    console.error('Error downloading file:', error);
  }
};


const extractFileName = (filePath) => {
  const pathSegments = filePath.split('/');
  return pathSegments[pathSegments.length - 1];
};

const handleDeleteFile = async (filePathToDelete) => {
  try {
    const response = await axios.delete(`https://propais-back-render.onrender.com/capitalization/${id}/delete`, {
      data: { filePath: filePathToDelete },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.status === 200) {
      // Actualizar el estado para reflejar los cambios
      setFilePaths(prevFilePaths => prevFilePaths.filter(filePath => filePath !== filePathToDelete));
      // Informar al usuario
      alert('Archivo eliminado exitosamente');
    } else {
      alert('Error al eliminar el archivo');
    }
  } catch (error) {
    console.error('Error deleting file:', error);
    alert('Error al eliminar el archivo');
  }
};


//------------------------------CODIGO PARA MANEJAR EL CAMBIO DEL ESTADO DE LAS CAPACITACIONES---------------------------------*/

// Calculamos el progreso total basado en la cantidad de elementos completados
useEffect(() => {
  const itemsVistos = capacitaciones.filter(item => item.certificado === 'visto').length;
  const nuevoAvance = (itemsVistos / capacitaciones.length) * 100;
  setAvance(nuevoAvance);
}, [capacitaciones]);

useEffect(() => {
  const fetchCapacitaciones = async () => {
    try {
      const response = await axios.get(`https://propais-back-render.onrender.com/capitalization/relCaracterization/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setCapacitaciones([
        { nombre: 'Alístate para crecer', certificado: response.data.capacitacion1 ? 'visto' : null },
        { nombre: 'Conectándome con mi Mercado', certificado: response.data.capacitacion2 ? 'visto' : null },
        { nombre: 'Conectándome con el Ambiente', certificado: response.data.capacitacion3 ? 'visto' : null },
        { nombre: 'Proyectando mi futuro', certificado: response.data.capacitacion4 ? 'visto' : null },
        { nombre: 'Conectándome con mi negocio', certificado: response.data.capacitacion5 ? 'visto' : null },
        { nombre: 'Conexiones Digitales', certificado: response.data.capacitacion6 ? 'visto' : null },

        
      ]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchCapacitaciones();
}, [id, token]); // Dependencias para el efecto


const handleCertificado = (nombre) => {
  setCapacitaciones(prevCapacitaciones => 
    prevCapacitaciones.map(c => 
      c.nombre === nombre ? 
        (c.certificado === 'visto' ? { ...c, certificado: null } : { ...c, certificado: 'visto' }) 
        : c
    )
  );
};
/* ------------------- FIN DEL CODIGO PARA MANEJAR EL CAMBIO DEL ESTADO DE LAS CAPACITACIONES--------------------*/

//------------------------------CODIGO PARA MANEJAR EL CAMBIO DEL ESTADO DE LAS VALIDACIONES---------------------------------*/
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://propais-back-render.onrender.com/capitalization/relCaracterization/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setAprobacionAsesor(response.data.validation1);
      setAprobacionPropais(response.data.validation2);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [id, token]);

/* ------------------- FIN DEL CODIGO PARA MANEJAR EL CAMBIO DEL ESTADO DE LAS VALIDACIONES--------------------*/

//------------------------------------ FORMULACIONES -----------------------------------------------------*

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormState(prevState => ({
    ...prevState,
    [name]: value
  }));
};


const handleFormulationSubmit = async (e) => {
  e.preventDefault();

  const cantidad = parseInt(formState.cantidad);
  const precioUnitario = parseFloat(formState.precioUnitario);
  const valorTotal = cantidad * precioUnitario;

  // Crear el registro en la base de datos primero
  const data = {
    relCapitalization: id,
    ...formState,
    cantidad,
    precioUnitario,
    valorTotal
  };

  try {
    // Agregar nuevo registro
    const newFormulation = await axios.post(`https://propais-back-render.onrender.com/formulation`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('New data saved', newFormulation.data);

    // Luego subimos los archivos usando el ID del nuevo registro
    const formData = new FormData();
    for (let i = 0; i < archivoSeleccionado.length; i++) {
      formData.append('files', archivoSeleccionado[i]);
    }

    if (archivoSeleccionado.length > 0) {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      };

      const response = await axios.post(`https://propais-back-render.onrender.com/formulation/upload/${newFormulation.data.id}`, formData, config);

      if (response.status === 200) {
        setUploadResponse('Files uploaded successfully');
        setFilePaths(prevFilePaths => [...prevFilePaths, ...archivoSeleccionado.map(file => file.name)]);
      } else {
        setUploadResponse('Failed to upload files');
      }
    }

    setFormState({
      rubro: '',
      descripcion: '',
      unidad: '',
      cantidad: '',
      precioUnitario: ''
    });
    setArchivoSeleccionado([]);

    await fetchDataFromDB(id);

  } catch (error) {
    console.error('Error:', error);
  }
};

const handleFileChangeFormulacion = (e) => {
  const files = Array.from(e.target.files);
  setArchivoSeleccionado(files);
};

const fetchDataFromDB = async (id) => {
  try {
    const response = await axios.get(`https://propais-back-render.onrender.com/formulation?relCapitalization=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    setDataFromDB(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized:', error.response.data.message);
    }
  }
};

useEffect(() => {
  fetchDataFromDB(id);
}, [id]);


const downloadFileFormulacion = async (filePath) => {
  try {
    const response = await axios.get(`https://propais-back-render.onrender.com/formulation/${id}/download?filePath=${encodeURIComponent(filePath)}`, {
      responseType: 'blob',
      headers: { Authorization: `Bearer ${token}` }
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', extractFileName(filePath));
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  } catch (error) {
    console.error('Error downloading file:', error);
  }
};


// Filtrar y sumar los valores totales para el rubro "Setenta y cinco porciento (75%)"
const totalSetentaCinco = dataFromDB.reduce((total, item) => {
  if (item.relCapitalization.toString() === id && item.rubro.startsWith("Setenta y cinco porciento (75%) |")) {
    return total + (item.cantidad * item.precioUnitario);
  } else {
    return total;
  }
}, 0);

// Filtrar y sumar los valores totales para el rubro "Veinticinco porciento (25%)"
const totalVeinticinco = dataFromDB.reduce((total, item) => {
  if (item.relCapitalization.toString() === id && item.rubro.startsWith("Veinticinco porciento (25%) |")) {
    return total + (item.cantidad * item.precioUnitario);
  } else {
    return total;
  }
}, 0);

// Calcular el total general sumando ambos totales
const totalGeneral = totalSetentaCinco + totalVeinticinco;

/* ------------------- FIN DEL CODIGO PARA MANEJAR EL CAMBIO DEL ESTADO DE LAS FORMULACIONES--------------------*/

/* ------------------- CODIGO PARA MANEJAR EL CAMBIO DEL ESTADO DE LA INFORMACION BANCARIA--------------------*/

const handleFileChangeBanco = (e) => {
  // Asumiendo que solo se sube un archivo
  const file = e.target.files[0];
  if (file) {
    setFilePathBanco(file);
  }
};

const uploadFileBanco = async () => {
  if (!filePathBanco) {
    setFileMessage('No file selected');
    return;
  }

  const formData = new FormData();
  formData.append('file', filePathBanco);

  try {
    const response = await axios.post(`https://propais-back-render.onrender.com/capitalization/uploadBankCertification/${id}`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      }
    });

    if (response.status === 200) {
      console.log('Bank certification uploaded successfully');
      setFilePathBanco(response.data.filePath);  // Asumiendo que el servidor retorna la ruta del archivo guardado
    }
  } catch (error) {
    console.error('Error uploading bank certification:', error);
  }
};


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://propais-back-render.onrender.com/capitalization/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = response.data;
      setBanco(data.banco);
      setTipoCuenta(data.tipoCuenta);
      setNumeroCuenta(data.numeroCuenta);
      setTipoDocumento(data.tipoDocumento);
      setNumeroIdentificacion(data.numeroIdentificacion);
      setFilePathBanco(data.archivoAdjunto); // Suponiendo que así se guarda el path del archivo
    } catch (error) {
      console.error('Error fetching bank data:', error);
    }
  };

  fetchData();
}, [id, token]); // Dependencias en useEffect para garantizar que se carguen los datos correctos




/* ------------------- FIN DEL CODIGO PARA MANEJAR EL CAMBIO DEL ESTADO DE LA INFORMACION BANCARIA--------------------*/



  return (
    <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Capitalización</h1>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 ml-5">
          <div className="card card-outline">
            <div className="card-body box-profile">
              <h3 className="profile-username text-center"><strong>{otraInformacion.nombreEmprendimiento}</strong></h3>
              <p className="text-muted text-center">{otraInformacion.primerNombre} {otraInformacion.segundoNombre} {otraInformacion.primerApellido} {otraInformacion.segundoApellido}</p>
              <ul className="list-group list-group-unbordered mb-3">
              <li className="list-group-item">
                  <b>ID</b> <a className="float-right">{otraInformacion.id}</a>
                </li>
                <li className="list-group-item">
                  <b>Estado</b> <a className="float-right">{otraInformacion.estado}</a>
                </li>
                <li className="list-group-item">
                  <b>Asesor</b> <a className="float-right">{otraInformacion.relAsesorName}</a>
                </li>
                <li className="list-group-item">
                  <b>Localidad</b> <a className="float-right">{otraInformacion.localidad}</a>
                </li>
              </ul>
              <a href="#" className="btn boton-color-rojo btn-block"><b>Generar Ficha</b></a>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          {/* About Me Box */}
          
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-8 ml-5">
          <div className="card">
            <div className="card-header p-2">
              <ul className="nav nav-pills">
              <li className="nav-item"><a className="nav-link active" href="#datos" data-toggle="tab">Datos</a></li>
              <li className="nav-item"><a className="nav-link" href="#capacitacion" data-toggle="tab">Capacitacion</a></li>
                <li className="nav-item"><a className="nav-link" href="#validacion" data-toggle="tab">Validaciones</a></li>
                <li className="nav-item"><a className="nav-link" href="#formulacion" data-toggle="tab">Formulación</a></li>
                <li className="nav-item"><a className="nav-link" href="#infoBancaria" data-toggle="tab">Información Bancaria</a></li>
                <li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab">Resumen</a></li>
                
              </ul>
            </div>{/* /.card-header */}
                <div className="card-body">
                  <div className="tab-content mt-3 ml-2 mr-3">
                    <div className="active tab-pane" id="datos">
                      <form id="miFormulario" className="form-horizontal" onSubmit={handleSubmit}>
                        <div className="form-group row">
                          <label htmlFor="textDescripcionNegocio" className="col-sm-2 col-form-label">Descripción del negocio</label>
                          <div className="col-sm-10">
                            {editable ? (
                              <textarea
                                type="text"
                                className="form-control"
                                id="textDescripcionNegocio"
                                rows="8"
                                value={descripcionNegocio}
                                onChange={(e) => setDescripcionNegocio(e.target.value)}
                              />
                            ) : (
                              <p className='justify-text'>{descripcionNegocio}</p>
                            )}
                          </div>
                        </div>

                        <div className="form-group row">
                          <label htmlFor="textObjetivoInversion" className="col-sm-2 col-form-label">Necesidades y retos</label>
                          <div className="col-sm-10">
                            {editable ? (
                              <textarea
                                type="text"
                                className="form-control"
                                id="textObjetivoInversion"
                                rows="8"
                                value={objetivoPlanInversion}
                                onChange={(e) => setObjetivoPlanInversion(e.target.value)}
                                placeholder="(Haga un breve resumen de los principales hallazgos y retos del modelo de negocio de acuerdo con los resultados del diagnóstico)"
                              />
                            ) : (
                              <p className='justify-text'>{objetivoPlanInversion}</p>
                            )}
                          </div>
                        </div>


                        <div className="form-group row">
                          <label htmlFor="fileUpload" className="col-sm-2 col-form-label">Evidencia Fotográfica</label>
                          <div className="col-sm-8">
                            <input
                              type="file"
                              className="form-control-file"
                              id="fileUpload"
                              onChange={handleFileChange}
                              disabled={!editable}
                              multiple
                            />
                          </div>
                          <div className="col-sm-2">
                            <button type="button" className="btn btn-info" onClick={uploadFile} disabled={!editable}>
                              Subir Archivo
                            </button>
                            {fileMessage && <p className="text-info">{fileMessage}</p>}
                          </div>
                        </div>

                        {/* Mostrar la lista de archivos subidos */}
                        
                        {filePaths.length > 0 && (
                          <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                              <h4>Archivos subidos:</h4>
                              <ul>
                                {filePaths.map((filePath, index) => (
                                  <li key={index}>
                                    {extractFileName(filePath)}
                                    <button className="btn btn-info btn-sm ml-1 mb-1" onClick={() => downloadFile(filePath)}>
                                      Descargar
                                    </button>
                                    <button
                                      className="btn btn-danger btn-sm ml-1 mb-1"
                                      onClick={() => handleDeleteFile(filePath)}
                                      disabled={!editable}  // Deshabilita el botón si !editable es true
                                    >
                                      Eliminar
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}



                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label"></label>
                          <div className="col-sm-10">

                            
                            <div className="form-check mt-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="declarationCheckbox"
                                disabled={!editable}  // Deshabilita la casilla si editable es false
                              />
                              <label className="form-check-label" htmlFor="declarationCheckbox">
                                Declaro que toda la información del plan de inversión aquí consignada fue diligenciada en conjunto con el asesor empresarial a cargo, es verdadera, completa y correcta, la cual puede ser verificada en cualquier momento.
                              </label>
                            </div>

                          </div>
                        </div>
                        


                        
                      </form>
                    </div>

                  {/* /.modulo-DATOS*/}
                    
                    {/* modulo de capicitacion */}
                    <div className="tab-pane" id="capacitacion">
                      <h3>Porcentaje de avance</h3>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: `${avance}%` }} aria-valuenow={avance} aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p>{`${avance.toFixed(2)}%`}</p>

                      <h3>Cápsulas en las que se encuentra inscrito ({capacitaciones.length})</h3>
                      {capacitaciones.map(item => (
                        <div className="row" key={item.nombre}>
                          <div className="col-sm-6">
                            {item.nombre} - {item.certificado === 'visto' ? 'Certificado: ✔' : 'Certificado: ❌'}
                          </div>
                          <div className="col-sm-2">
                          <button className="btn btn-success btn-sm mb-1" onClick={() => handleCertificado(item.nombre, true)} disabled={!editable}>Visto Bueno</button>
                          <button className="btn btn-danger btn-sm mb-1 ml-1" onClick={() => handleCertificado(item.nombre, false)} disabled={!editable}>❌</button>

                          </div>
                        </div>
                      ))}
                    </div>
                    {/* fin modulo de capicitacion */}

                    {/* modulo de validaciones */}
                    <div className="tab-pane" id="validacion">
                      <h3>Validaciones del plan de inversión</h3>

                      <div className="validacion-item ml-3 mr-2">
                        <strong>Aprobación Asesor:</strong>
                        {editable ? (
                          <select className="form-control custom-select mt-1 mb-1" value={aprobacionAsesor ? "true" : "false"} onChange={(e) => setAprobacionAsesor(e.target.value === "true")}>
                            <option value="true">Aprobado</option>
                            <option value="false">Rechazado</option>
                          </select>
                        ) : (
                          <span>{aprobacionAsesor ? "Aprobado" : "Rechazado"}</span>
                        )}
                      </div>

                      <div className="validacion-item mt-2 ml-3 mr-2">
                        <strong>Aprobación Propaís:</strong>
                        {editable ? (
                          <select className="form-control custom-select mt-1 mb-1" value={aprobacionPropais ? "true" : "false"} onChange={(e) => setAprobacionPropais(e.target.value === "true")}>
                            <option value="true">Aprobado</option>
                            <option value="false">Rechazado</option>
                          </select>
                        ) : (
                          <span>{aprobacionPropais ? "Aprobado" : "Rechazado"}</span>
                        )}
                      </div>
                    </div>


                    {/* fin modulo de validaciones */}


                    {/* /.tab-pane */}
                    <div className="tab-pane" id="formulacion">
  <h2>Formulaciones</h2>
  {dataFromDB.length > 0 ? (
    <ul>
      {dataFromDB.map((item, index) => {
        if (item.relCapitalization.toString() === id) {
          return (
            <table key={index} style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ECECEC', padding: '8px', textAlign: 'left' }}>Rubro</th>
                  <th style={{ border: '1px solid #ECECEC', padding: '8px', textAlign: 'left' }}>Descripción</th>
                  <th style={{ border: '1px solid #ECECEC', padding: '8px', textAlign: 'left' }}>Unidad</th>
                  <th style={{ border: '1px solid #ECECEC', padding: '8px', textAlign: 'left' }}>Cantidad</th>
                  <th style={{ border: '1px solid #ECECEC', padding: '8px', textAlign: 'left' }}>Valor Unitario</th>
                  <th style={{ border: '1px solid #ECECEC', padding: '8px', textAlign: 'left' }}>Valor Total</th>
                  <th style={{ border: '1px solid #ECECEC', padding: '8px', textAlign: 'left' }}>Archivos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ECECEC', padding: '8px' }}>{item.rubro}</td>
                  <td style={{ border: '1px solid #ECECEC', padding: '8px' }}>{item.descripcion}</td>
                  <td style={{ border: '1px solid #ECECEC', padding: '8px' }}>{item.unidad}</td>
                  <td style={{ border: '1px solid #ECECEC', padding: '8px' }}>{item.cantidad}</td>
                  <td style={{ border: '1px solid #ECECEC', padding: '8px' }}>{item.precioUnitario}</td>
                  <td style={{ border: '1px solid #ECECEC', padding: '8px' }}>{item.cantidad * item.precioUnitario}</td>
                  <td style={{ border: '1px solid #ECECEC', padding: '8px' }}>
                    {item.archivosFormulacion.length > 0 ? (
                      item.archivosFormulacion.map((archivo, idx) => (
                        <div key={idx}>
                          <button
                            type="button"
                            className="btn btn-link"
                            onClick={() => downloadFileFormulacion(archivo)}
                          >
                            {extractFileName(archivo)}
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDeleteFileFormulacion(archivo, item.id)}
                          >
                            Eliminar
                          </button>
                        </div>
                      ))
                    ) : (
                      <span>No hay archivos</span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          );
        } else {
          return null;
        }
      })}
    </ul>
  ) : (
    <p>No hay formulaciones registradas</p>
  )}

  <div style={{ marginTop: '20px' }}>
    <h3>Resumen de la inversión</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ECECEC', padding: '8px', textAlign: 'left' }}>Rubro</th>
          <th style={{ border: '1px solid #ECECEC', padding: '8px', textAlign: 'left' }}>Valor Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #ECECEC', padding: '8px' }}>Setenta y cinco porciento (75%)</td>
          <td style={{ border: '1px solid #ECECEC', padding: '8px' }}>$ {totalSetentaCinco}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ECECEC', padding: '8px' }}>Veinticinco porciento (25%)</td>
          <td style={{ border: '1px solid #ECECEC', padding: '8px' }}>$ {totalVeinticinco}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ECECEC', padding: '8px' }}>Total General</td>
          <td style={{ border: '1px solid #ECECEC', padding: '8px' }}><strong>$ {totalGeneral}</strong></td>
        </tr>
      </tbody>
    </table>
  </div>

  {editable && (
    <form className="form-horizontal" onSubmit={handleFormulationSubmit}>
      <div className="form-group row">
        <label htmlFor="rubro" className="col-sm-2 col-form-label">Rubro</label>
        <div className="col-sm-10">
          <select
            name="rubro"
            value={formState.rubro}
            onChange={handleInputChange}
            className="form-control"
            id="rubro"
            required
          >
            <option value="">Selecciona un rubro</option>
            <option value="Setenta y cinco porciento (75%) | Cursos de alturas">Setenta y cinco porciento (75%) | Cursos de alturas</option>
            <option value="Setenta y cinco porciento (75%) | Cursos de manipulación de alimentos">Setenta y cinco porciento (75%) | Cursos de manipulación de alimentos</option>
            <option value="Setenta y cinco porciento (75%) | Herramientas y equipos asociados a la actividad productiva">Setenta y cinco porciento (75%) | Herramientas y equipos asociados a la actividad productiva</option>
            <option value="Setenta y cinco porciento (75%) | Insumos vinculados a la fabricación de sus productos">Setenta y cinco porciento (75%) | Insumos vinculados a la fabricación de sus productos</option>
            <option value="Setenta y cinco porciento (75%) | Inventarios relacionados con la actividad comercial">Setenta y cinco porciento (75%) | Inventarios relacionados con la actividad comercial</option>
            <option value="Setenta y cinco porciento (75%) | Maquinaria asociada a la actividad productiva">Setenta y cinco porciento (75%) | Maquinaria asociada a la actividad productiva</option>
            <option value="Setenta y cinco porciento (75%) | Materia prima vinculada a la fabricación de sus productos">Setenta y cinco porciento (75%) | Materia prima vinculada a la fabricación de sus productos</option>
            <option value="Setenta y cinco porciento (75%) | Mobiliario asociado a la actividad productiva">Setenta y cinco porciento (75%) | Mobiliario asociado a la actividad productiva</option>
            <option value="Setenta y cinco porciento (75%) | Póliza de seguros">Setenta y cinco porciento (75%) | Póliza de seguros</option>
            <option value="Veinticinco porciento (25%) | Arrendamiento del micronegocio">Veinticinco porciento (25%) | Arrendamiento del micronegocio</option>
            <option value="Veinticinco porciento (25%) | Bienes o insumos perecederos">Veinticinco porciento (25%) | Bienes o insumos perecederos</option>
            <option value="Veinticinco porciento (25%) | Herramientas y equipos asociados a la actividad productiva">Veinticinco porciento (25%) | Herramientas y equipos asociados a la actividad productiva</option>
            <option value="Veinticinco porciento (25%) | Insumos vinculados a la fabricación de sus productos">Veinticinco porciento (25%) | Insumos vinculados a la fabricación de sus productos</option>
            <option value="Veinticinco porciento (25%) | Inventarios relacionados con la actividad comercial">Veinticinco porciento (25%) | Inventarios relacionados con la actividad comercial</option>
            <option value="Veinticinco porciento (25%) | Maquinaria asociada a la actividad productiva">Veinticinco porciento (25%) | Maquinaria asociada a la actividad productiva</option>
            <option value="Veinticinco porciento (25%) | Materia prima vinculada a la fabricación de sus productos">Veinticinco porciento (25%) | Materia prima vinculada a la fabricación de sus productos</option>
            <option value="Veinticinco porciento (25%) | Mobiliario asociado a la actividad productiva">Veinticinco porciento (25%) | Mobiliario asociado a la actividad productiva</option>
            <option value="Veinticinco porciento (25%) | Servicios públicos del micronegocio">Veinticinco porciento (25%) | Servicios públicos del micronegocio</option>
          </select>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="descripcion" className="col-sm-2 col-form-label">Descripción</label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            name="descripcion"
            value={formState.descripcion}
            onChange={handleInputChange}
            id="descripcion"
            placeholder="Descripción"
            rows="4"
            required
          ></textarea>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="unidad" className="col-sm-2 col-form-label">Unidad</label>
        <div className="col-sm-10">
          <input
            type="text"
            name="unidad"
            value={formState.unidad}
            onChange={handleInputChange}
            className="form-control"
            id="unidad"
            placeholder="Unidad"
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="cantidad" className="col-sm-2 col-form-label">Cantidad</label>
        <div className="col-sm-10">
          <input
            type="number"
            name="cantidad"
            value={formState.cantidad}
            onChange={handleInputChange}
            className="form-control"
            id="cantidad"
            placeholder="Cantidad"
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="precioUnitario" className="col-sm-2 col-form-label">Precio Unitario</label>
        <div className="col-sm-10">
          <input
            type="number"
            step="0.01"
            name="precioUnitario"
            value={formState.precioUnitario}
            onChange={handleInputChange}
            className="form-control"
            id="precioUnitario"
            placeholder="Precio Unitario"
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="archivosFormulacion" className="col-sm-2 col-form-label">Archivos de Formulación</label>
        <div className="col-sm-10">
          <input
            type="file"
            className="form-control-file"
            id="archivosFormulacion"
            multiple
            onChange={handleFileChangeFormulacion}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="offset-sm-2 col-sm-10">
          <button type="submit" className="btn btn-danger">Agregar Formulación</button>
        </div>
      </div>
    </form>
  )}
</div>


                    <div className="tab-pane" id="infoBancaria">
                      <form id="miFormularioBancario" className="form-horizontal" onSubmit={handleSubmit}>
                        <div className="form-group row">
                          <label htmlFor="banco" className="col-sm-2 col-form-label">Nombre del Banco</label>
                          <div className="col-sm-10">
                            <select className="form-control" id="banco" value={banco} onChange={(e) => setBanco(e.target.value)} disabled={!editable}>
                            <option value="">Seleccione una opción</option>
                              <option value="Davivienda">Davivienda</option>
                              <option value="Bancolombia">Bancolombia</option>
                              <option value="BBVA">BBVA</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label htmlFor="tipoCuenta" className="col-sm-2 col-form-label">Tipo de Cuenta</label>
                          <div className="col-sm-10">
                            <select className="form-control" id="tipoCuenta" value={tipoCuenta} onChange={(e) => setTipoCuenta(e.target.value)}>
                            <option value="">Seleccione una opción</option>
                              <option value="Ahorros">Cuenta de Ahorros</option>
                              <option value="Corriente">Cuenta Corriente</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label htmlFor="numeroCuenta" className="col-sm-2 col-form-label">Número de Cuenta</label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="numeroCuenta"
                              value={numeroCuenta}
                              onChange={(e) => setNumeroCuenta(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label htmlFor="tipoDocumento" className="col-sm-2 col-form-label">Tipo de Documento del Titular</label>
                          <div className="col-sm-10">
                            <select className="form-control" id="tipoDocumento" value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)}>
                              <option value="">Seleccione una opción</option>
                              <option value="CC">Cédula de Ciudadanía</option>
                              <option value="CE">Cédula de Extranjería</option>
                              <option value="NIT">NIT</option>
                              <option value="Pasaporte">Pasaporte</option>
                              <option value="PTP">Permiso Temporal de Permanencia</option>
                              <option value="PEP">Permiso Especial de Permanencia</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label htmlFor="numeroIdentificacion" className="col-sm-2 col-form-label">Número de Identificación</label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="numeroIdentificacion"
                              value={numeroIdentificacion}
                              onChange={(e) => setNumeroIdentificacion(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label htmlFor="archivoAdjunto" className="col-sm-2 col-form-label">Certificación Bancaria</label>
                          <div className="col-sm-8">
                            <input
                              type="file"
                              className="form-control-file"
                              id="archivoAdjunto"
                              onChange={handleFileChangeBanco}
                              disabled={!editable}
                            />
                          </div>
                          <div className="col-sm-2">
                            <button type="button" className="btn btn-info" onClick={uploadFileBanco} disabled={!editable}>
                              Subir Archivo
                            </button>
                            {fileMessageBanco && <p className="text-info">{fileMessageBanco}</p>}
                          </div>
                        </div>
                      </form>
                    </div>

                
                {/* /.tab-pane */}
                
              </div>
              {/* /.tab-content */}

            </div>{/* /.card-body */}
            
          </div>




          <div className="form-group row">
                <div className="offset-sm-0 col-sm-10">
                  {editable ? (
                    <>
                      <button type="submit" className="btn btn-danger" form="miFormulario">Guardar</button>
                      <button
                        type="button"
                        className="btn btn-secondary ml-2"
                        onClick={() => setEditable(false)} // Deshabilitar la edición de los campos
                        form="miFormulario"
                      >
                        Dejar de Editar
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      className="btn boton-color-rojo"
                      onClick={() => setEditable(true)} // Habilitar la edición de los campos
                      form="miFormulario"
                    >
                      Editar Información
                    </button>
                  )}
                </div>
              </div>
          {/* /.card */}
        </div>    
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>


  )
}

export default CapitalizacionVer