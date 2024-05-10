import React, { useState } from 'react';
import axios from 'axios';

export default function CaracterizacionAgregar() {
  const [formData, setFormData] = useState({
    codigoActividad: '',
    etapaProceso: '',
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    tipoDocumento: '',
    numeroDocumento: '',
    tipoParticipante: '',
    otraCual: '',
    registradoRUR: '',
    nacionalidad: '',
    otraNacionalidad: '',
    /* nacionalidad1: '',
    nacionalidad2: '', */
    edad: '',
    sexoGenero: '',
    reconocimientoLGBTIQ: '',
    etnia: '',
    tipoDiscapacidad: '',
    departamento: '',
    ciudadMunicipio: '',
    localidad: '',
    zonaGeografica: '',
    registradoSISBENIV: '',
    afiliadoEPSSubsidiado: '',
    nombreEPSSubsidiada: '',
    afiliadoEPSContributivo: '',
    nombreEPSContributiva: '',
    numeroCelularPrincipal: '',
    numeroCelularOpcional: '',
    correoElectronico: '',
    direccionResidencia: '',
    barrioResidencia: '',
    tieneHijos: '',
    cantidadHijos: '',
    hijosEscolarizados: '',
    familiaNoAfiliadaEPS: '',
    jefeHogar: '',
    parentescoJefeHogar: '',
    situacionMigratoria: '',
    razonMigracion: '',
    otraRazonMigracion: '',
    tiempoViviendoColombia: '',
    tiempoViviendoVenezuela: '',
    grupoPoblacional: '',
    nivelEducativo: '',
    programaFormacionTitulo: '',
    areaSectorFormacion: '',
    paisEstudios: '',
    titulosConvalidados: '',
    estudiandoActualmente: '',
    ocupacionPrincipal: '',
    tipoEmpleo: '',
    emprendimientoAnteriorPais: '',
    otroPaisEmprendimiento: '',
    estadoNegocio: '',
    empleosGeneradosEmprendimiento: '',
    empleadosTemporales: '',
    ubicacionEmprendimiento: '',
    otraUbicacionEmprendimiento: '',
    barrioSectorEmprendimiento: '',
    descripcionNegocio: '',
    diferenciacionCompetencia: '',
    registradoEntidades: '',
    numeroRUTNIT: '',
    nombreEmprendimiento: '',
    tiempoInicioOperacion: '',
    sectorPrincipal: '',
    actividadEconomica: '',
    categoriaEmprendimiento: '',
    ingresosVentas: '',
    valorPromedioVentasMes: '',
    valorAnualVentas: '',
    productosServiciosOfrecidos: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form data submitted:', formData);
      const response = await axios.post('https://propais-back-render.onrender.com/caracterizations', formData);
      console.log('Caracterization created:', response.data);
      // Mostrar el modal de éxito
      setShowSuccessModal(true);
      // Limpiar los campos del formulario


      setFormData({
        codigoActividad: '',
        etapaProceso: '',
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        tipoDocumento: '',
        numeroDocumento: '',
        tipoParticipante: '',
        otraCual: '',
        registradoRUR: '',
        nacionalidad: '',
        otraNacionalidad: '',
        edad: '',
        sexoGenero:'',
        reconocimientoLGBTIQ: '',
        etnia:'',
        tipoDiscapacidad: '',
        departamento:'',
        ciudadMunicipio:'',
        localidad:'',
        zonaGeografica: '',
        registradoSISBENIV: '',
        afiliadoEPSSubsidiado: '',
        nombreEPSSubsidiada: '',
        afiliadoEPSContributivo: '',
        nombreEPSContributiva: '',
        numeroCelularPrincipal: '',
        numeroCelularOpcional: '',
        correoElectronico: '',
        direccionResidencia: '',
        barrioResidencia: '',
        tieneHijos: '',
        cantidadHijos: '', 
        hijosEscolarizados: '',
        familiaNoAfiliadaEPS: '',
        jefeHogar: '',
        parentescoJefeHogar: '',
        situacionMigratoria: '',
        razonMigracion: '',
        otraRazonMigracion: '',
        tiempoViviendoColombia: '',
        grupoPoblacional: '',
        nivelEducativo: '',
        programaFormacionTitulo: '',
        areaSectorFormacion: '',
        paisEstudios: '',
        titulosConvalidados: '',
        estudiandoActualmente: '',
        tipoEmpleo: '',
        emprendimientoAnteriorPais: '',
        otroPaisEmprendimiento: '',
        estadoNegocio: '',
        empleosGeneradosEmprendimiento: '',
        empleadosTemporales: '',
        ubicacionEmprendimiento: '',
        otraUbicacionEmprendimiento: '',
        barrioSectorEmprendimiento: '',
        descripcionNegocio: '',
        diferenciacionCompetencia: '',
        registradoEntidades: '',
        numeroRUTNIT: '',
        nombreEmprendimiento: '',
        tiempoInicioOperacion: '',
        sectorPrincipal: '',
        actividadEconomica: '',
        categoriaEmprendimiento: '',
        ingresosVentas: '',
        valorPromedioVentasMes: '',
        valorAnualVentas: '',
        productosServiciosOfrecidos: '' 


        // Restablecer el resto de los campos a su valor inicial
      });
    } catch (error) {
      console.error('Error creating caracterization:', error);
      console.log('Error data:', error.response.data);
    }
  };

  const handleModalClose = () => {
    // Ocultar el modal de éxito
    setShowSuccessModal(false);
  };

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6 ml-5 mr-1">
              <h1>Agregar Emprendimiento</h1>
            </div>
            <div className="col-sm-5">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Inicio</a></li>
                <li className="breadcrumb-item active">Caracterización</li>
              </ol>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div class="row">
          <div class="col-md-7 ml-5 mr-1">
            <div class="card card-primary">
              {/* <div class="card-header">
                <h3 class="card-title">General</h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
              </div> */}
              <div class="card-body p-0 mt-4 mb-4 ml-5 mr-5"> 
              <form onSubmit={handleSubmit}>
          {/* Campos del formulario */}
          <div className="form-group">
            <label htmlFor="codigoActividad">Código de la actividad</label>
            <input
              type="text"
              id="codigoActividad"
              name="codigoActividad"
              className="form-control"
              value={formData.codigoActividad}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="etapaProceso">Etapa del proceso</label>
            <input
              type="text"
              id="etapaProceso"
              name="etapaProceso"
              className="form-control"
              value={formData.etapaProceso}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="primerNombre">Primer nombre</label>
            <input
              type="text"
              id="primerNombre"
              name="primerNombre"
              className="form-control"
              value={formData.primerNombre}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="segundoNombre">Segundo nombre</label>
            <input
              type="text"
              id="segundoNombre"
              name="segundoNombre"
              className="form-control"
              value={formData.segundoNombre}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="primerApellido">Primer apellido</label>
            <input
              type="text"
              id="primerApellido"
              name="primerApellido"
              className="form-control"
              value={formData.primerApellido}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="segundoApellido">Segundo apellido</label>
            <input
              type="text"
              id="segundoApellido"
              name="segundoApellido"
              className="form-control"
              value={formData.segundoApellido}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tipoDocumento">Tipo de documento</label>
            <select
              id="tipoDocumento"
              name="tipoDocumento"
              className="form-control custom-select"
              value={formData.tipoDocumento}
              onChange={handleChange}
            >
              <option value="">Selecciona un tipo de documento</option>
              <option value="TI: Tarjeta de identidad">TI: Tarjeta de identidad</option>
              <option value="CC: Cédula de ciudadanía Colombiana">CC: Cédula de ciudadanía Colombiana</option>
              <option value="PEP: Permiso especial de permanencia">PEP: Permiso especial de permanencia</option>
              <option value="PPT: Permiso por protección temporal">PPT: Permiso por protección temporal</option>
              <option value="CE: Cédula de extranjería">CE: Cédula de extranjería</option>
              <option value="CI: Cédula de identidad venezolana">CI: Cédula de identidad venezolana</option>
              <option value="PAS: Número de pasaporte">PAS: Número de pasaporte</option>
              <option value="RC: Registro civil colombiano">RC: Registro civil colombiano</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="numeroDocumento">Número de documento</label>
            <input
              type="number"
              id="numeroDocumento"
              name="numeroDocumento"
              className="form-control"
              value={formData.numeroDocumento}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tipoParticipante">Tipo de participante</label>
            <select
              id="tipoParticipante"
              name="tipoParticipante"
              className="form-control custom-select"
              value={formData.tipoParticipante}
              onChange={handleChange}
            >
              <option value="">Selecciona un tipo de participante</option>
              <option value="Colombiano(a) Retornado(a)">Colombiano(a) Retornado(a)</option>
              <option value="Comunidad de acogida (Nacional Colombiano)">Comunidad de acogida (Nacional Colombiano)</option>
              <option value="Migrante con otra nacionalidad">Migrante con otra nacionalidad</option>
              <option value="Migrante venezolano(a)">Migrante venezolano(a)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="otraCual">Otro, ¿Cuál?</label>
            <input
              type="text"
              id="otraCual"
              name="otraCual"
              className="form-control"
              value={formData.otraCual}
              onChange={handleChange}
            />
          </div>

                  <div className="form-group">
                    <label htmlFor="registradoRUR">Si es Colombiano retornado: ¿Se encuentra registrado en el registro único de retornados RUR?</label>
                    <select
                      id="registradoRUR"
                      name="registradoRUR"
                      className="form-control custom-select"
                      value={formData.registradoRUR}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Si">Sí</option>
                      <option value="No">No</option>
                      <option value="No Sabe">No sabe</option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="nacionalidad">Nacionalidad</label>
                    <select
                      id="nacionalidad"
                      name="nacionalidad"
                      className="form-control custom-select"
                      value={formData.nacionalidad}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una nacionalidad</option>
                      <option value="Solo Colombiano(a)">Solo Colombiano(a)</option>
                      <option value="Solo Venezolano(a)">Solo Venezolano(a)</option>
                      <option value="Colombo-Venezolano">Colombo-Venezolano</option>
                      <option value="Otra">Otra</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="otraNacionalidad">Otra Nacionalidad, ¿Cuál?</label>
                    <input
                      type="text"
                      id="otraNacionalidad"
                      name="otraNacionalidad"
                      className="form-control"
                      value={formData.otraNacionalidad}
                      onChange={handleChange}
                    />
                  </div>       

                  <div className="form-group">
                    <label htmlFor="edad">Edad</label>
                    <input
                      type="number"
                      id="edad"
                      name="edad"
                      className="form-control"
                      value={formData.edad}
                      onChange={handleChange}
                      maxLength="2"
                      max="99" 
                      required
                    />
                  </div>   

                  <div className="form-group">
                    <label htmlFor="sexoGenero">Sexo / Género</label>
                    <select
                      id="sexoGenero"
                      name="sexoGenero"
                      className="form-control custom-select"
                      value={formData.sexoGenero}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona un tipo de género</option>
                      <option value="Mujer">Mujer</option>
                      <option value="Mujer trans">Mujer trans</option>
                      <option value="Hombre">Hombre</option>
                      <option value="Hombre trans">Hombre trans</option>
                      <option value="Persona no binaria">Persona no binaria</option>
                      <option value="Desea no responder">Desea no responder</option>
                    </select>
                  </div>  

                  <div className="form-group">
                    <label htmlFor="reconocimientoLGBTIQ">¿Se reconoce como parte de la población LGBTIQ+?</label>
                    <select
                      id="reconocimientoLGBTIQ"
                      name="reconocimientoLGBTIQ"
                      className="form-control custom-select"
                      value={formData.reconocimientoLGBTIQ}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="si">Sí</option>
                      <option value="no">No</option>
                      <option value="No Responde">No Responde</option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="etnia">Etnia</label>
                    <select
                      id="etnia"
                      name="etnia"
                      className="form-control custom-select"
                      value={formData.etnia}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione su Etnia</option>
                      <option value="Afrodescendiente">Afrodescendiente</option>
                      <option value="Afrocolombiano(a)">Afrocolombiano(a)</option>
                      <option value="Indígena">Indígena</option>
                      <option value="Palenquero(a)">Palenquero(a)</option>
                      <option value="Negro(a)">Negro(a)</option>
                      <option value="Rom">Rom</option>
                      <option value="Raizal">Raizal</option>
                      <option value="Mestizo(a)">Mestizo(a)</option>
                      <option value="Ninguna">Ninguna</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="tipoDiscapacidad">Tipo de discapacidad</label>
                    <select
                      id="tipoDiscapacidad"
                      name="tipoDiscapacidad"
                      className="form-control custom-select"
                      value={formData.tipoDiscapacidad}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Física">Física</option>
                      <option value="Auditiva">Auditiva</option>
                      <option value="Visual">Visual</option>
                      <option value="Intelectual">Intelectual</option>
                      <option value="Psicosocial">Psicosocial</option>
                      <option value="Múltiple">Múltiple</option>
                      <option value="Ninguna">Ninguna</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="departamento">Departamento</label>
                    <select
                      id="departamento"
                      name="departamento"
                      className="form-control custom-select"
                      value={formData.departamento}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione un departamento</option>
                      <option value="Antioquia">Antioquia</option>
                      <option value="Arauca">Arauca</option>
                      <option value="Atlántico">Atlántico</option>
                      <option value="Bolívar">Bolívar</option>
                      <option value="Cundinamarca">Cundinamarca</option>
                      <option value="Guajira">Guajira</option>
                      <option value="Magdalena">Magdalena</option>
                      <option value="Nariño">Nariño</option>
                      <option value="Norte de Santander">Norte de Santander</option>
                      <option value="Santander">Santander</option>
                      <option value="Valle del Cauca">Valle del Cauca</option>
                      <option value="Bogotá D.C.">Bogotá D.C.</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="ciudadMunicipio">Ciudad / Municipio</label>
                    <select
                      id="ciudadMunicipio"
                      name="ciudadMunicipio"
                      className="form-control custom-select"
                      value={formData.ciudadMunicipio}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una ciudad o municipio</option>
                      <option value="Arauca">Arauca</option>
                      <option value="Barranquilla">Barranquilla</option>
                      <option value="Bello">Bello</option>
                      <option value="Bogotá D.C.">Bogotá D.C.</option>
                      <option value="Bucaramanga">Bucaramanga</option>
                      <option value="Cali">Cali</option>
                      <option value="Cartagena">Cartagena</option>
                      <option value="Cúcuta">Cúcuta</option>
                      <option value="Envigado">Envigado</option>
                      <option value="Golfo de Urabá">Golfo de Urabá</option>
                      <option value="Ipiales">Ipiales</option>
                      <option value="Itagüí">Itagüí</option>
                      <option value="Jamundí">Jamundí</option>
                      <option value="Los Patios">Los Patios</option>
                      <option value="Maicao">Maicao</option>
                      <option value="Medellín">Medellín</option>
                      <option value="Pasto">Pasto</option>
                      <option value="Riohacha">Riohacha</option>
                      <option value="Santa Marta">Santa Marta</option>
                      <option value="Soacha">Soacha</option>
                      <option value="Soledad">Soledad</option>
                      <option value="Villa del Rosario">Villa del Rosario</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="localidad">Localidad</label>
                    <select
                      id="localidad"
                      name="localidad"
                      className="form-control custom-select"
                      value={formData.localidad}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una localidad</option>
                      <option value="Usaquén">Usaquén</option>
                      <option value="Chapinero">Chapinero</option>
                      <option value="Santa Fe">Santa Fe</option>
                      <option value="San Cristóbal">San Cristóbal</option>
                      <option value="Usme">Usme</option>
                      <option value="Tunjuelito">Tunjuelito</option>
                      <option value="Bosa">Bosa</option>
                      <option value="Kennedy">Kennedy</option>
                      <option value="Fontibón">Fontibón</option>
                      <option value="Engativá">Engativá</option>
                      <option value="Suba">Suba</option>
                      <option value="Barrios Unidos">Barrios Unidos</option>
                      <option value="Teusaquillo">Teusaquillo</option>
                      <option value="Los Mártires">Los Mártires</option>
                      <option value="Antonio Nariño">Antonio Nariño</option>
                      <option value="Puente Aranda">Puente Aranda</option>
                      <option value="Candelaria">Candelaria</option>
                      <option value="Rafael Uribe Uribe">Rafael Uribe Uribe</option>
                      <option value="Ciudad Bolívar">Ciudad Bolívar</option>
                      <option value="Sumapaz">Sumapaz</option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="zonaGeografica">Zona Geográfica</label>
                    <select
                      id="zonaGeografica"
                      name="zonaGeografica"
                      className="form-control custom-select"
                      value={formData.zonaGeografica}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Rural">Rural</option>
                      <option value="Urbano">Urbano</option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="registradoSISBENIV">¿Se encuentra registrado en el SISBEN IV?</label>
                    <select
                      id="registradoSISBENIV"
                      name="registradoSISBENIV"
                      className="form-control custom-select"
                      value={formData.registradoSISBENIV}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Si">Sí</option>
                      <option value="No">No</option>
                      <option value="No Sabe">No sabe</option>
                    </select>
                  </div>



                  <div className="form-group">
                    <label htmlFor="afiliadoEPSSubsidiado">¿Se encuentra afiliado(a) a una Entidad Promotora de Salud (EPS) del régimen subsidiado?</label>
                    <select
                      id="afiliadoEPSSubsidiado"
                      name="afiliadoEPSSubsidiado"
                      className="form-control custom-select"
                      value={formData.afiliadoEPSSubsidiado}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Si">Sí</option>
                      <option value="No">No</option>
                      <option value="No Sabe">No sabe</option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="nombreEPSSubsidiada">Si es afirmativa su respuesta, indicar cuál es el nombre de la EPS - Subsidiada</label>
                    <input
                      type="text"
                      id="nombreEPSSubsidiada"
                      name="nombreEPSSubsidiada"
                      className="form-control"
                      value={formData.nombreEPSSubsidiada}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="afiliadoEPSContributivo">¿Se encuentra afiliado(a) a una Entidad Promotora de Salud (EPS) del régimen contributivo?</label>
                    <select
                      id="afiliadoEPSContributivo"
                      name="afiliadoEPSContributivo"
                      className="form-control custom-select"
                      value={formData.afiliadoEPSContributivo}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Si">Sí</option>
                      <option value="No">No</option>
                      <option value="No Sabe">No sabe</option>
                    </select>
                  </div>



                  <div className="form-group">
                    <label htmlFor="nombreEPSContributiva">Si es afirmativa su respuesta, indicar cuál es el nombre de la EPS - Contributiva</label>
                    <input
                      type="text"
                      id="nombreEPSContributiva"
                      name="nombreEPSContributiva"
                      className="form-control"
                      value={formData.nombreEPSContributiva}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="numeroCelularPrincipal">Número de celular (principal)</label>
                    <input
                      type="number"
                      id="numeroCelularPrincipal"
                      name="numeroCelularPrincipal"
                      className="form-control"
                      value={formData.numeroCelularPrincipal}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="numeroCelularOpcional">Número de celular (opcional)</label>
                    <input
                      type="number"
                      id="numeroCelularOpcional"
                      name="numeroCelularOpcional"
                      className="form-control"
                      value={formData.numeroCelularOpcional}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="correoElectronico">Correo electrónico</label>
                    <input
                      type="email"
                      id="correoElectronico"
                      name="correoElectronico"
                      className="form-control"
                      value={formData.correoElectronico}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="direccionResidencia">Dirección de residencia</label>
                    <input
                      type="text"
                      id="direccionResidencia"
                      name="direccionResidencia"
                      className="form-control"
                      value={formData.direccionResidencia}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="barrioResidencia">Barrio de residencia</label>
                    <input
                      type="text"
                      id="barrioResidencia"
                      name="barrioResidencia"
                      className="form-control"
                      value={formData.barrioResidencia}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="tieneHijos">¿Tiene hijos?</label>
                    <select
                      id="tieneHijos"
                      name="tieneHijos"
                      className="form-control custom-select"
                      value={formData.tieneHijos}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="si">Sí</option>
                      <option value="no">No</option>
                      <option value="No Responde">No Responde</option>
                    </select>
                  </div>



                  <div className="form-group">
                    <label htmlFor="cantidadHijos">¿Cuántos hijos tiene? En caso de no tener por favor escriba No aplica</label>
                    <input
                      type="text"
                      id="cantidadHijos"
                      name="cantidadHijos"
                      className="form-control"
                      value={formData.cantidadHijos}
                      onChange={handleChange}
                      required
                    />
                  </div> 

                  <div className="form-group">
                    <label htmlFor="hijosEscolarizados">¿Sus hijos están escolarizados?</label>
                    <select
                      id="hijosEscolarizados"
                      name="hijosEscolarizados"
                      className="form-control custom-select"
                      value={formData.hijosEscolarizados}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Si">Sí</option>
                      <option value="No">No</option>
                      <option value="No Sabe">No Sabe</option>
                      <option value="No Responde">No Responde</option>
                      <option value="No Aplica">No Aplica</option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="familiaNoAfiliadaEPS">¿Su grupo familiar registra niños en edad escolar no afiliados a una EPS o IPS?	</label>
                    <select
                      id="familiaNoAfiliadaEPS"
                      name="familiaNoAfiliadaEPS"
                      className="form-control custom-select"
                      value={formData.familiaNoAfiliadaEPS}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Si">Sí</option>
                      <option value="No">No</option>
                      <option value="No Sabe">No Sabe</option>
                      <option value="No Responde">No Responde</option>
                      <option value="No Aplica">No Aplica</option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="jefeHogar">¿Es el Jefe o Jefa de hogar?</label>
                    <select
                      id="jefeHogar"
                      name="jefeHogar"
                      className="form-control custom-select"
                      value={formData.jefeHogar}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="si">Sí</option>
                      <option value="no">No</option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="parentescoJefeHogar">Si no es el jefe(a) del hogar: ¿Cuál es su parentesco con él/la jefe(a) del hogar?</label>
                    <select
                      id="parentescoJefeHogar"
                      name="parentescoJefeHogar"
                      className="form-control custom-select"
                      value={formData.parentescoJefeHogar}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Esposo(a) / Compañero(a)">Esposo(a) / Compañero(a)</option>
                      <option value="Padre/Madre">Padre/Madre</option>
                      <option value="Hermano(a)/Hermanastro(a)">Hermano(a)/Hermanastro(a)</option>
                      <option value="Hijo(a)/Hijastro(a)">Hijo(a)/Hijastro(a)</option>
                      <option value="Nieto(a)">Nieto(a)</option>
                      <option value="Yerno/Nuera">Yerno/Nuera</option>
                      <option value="Abuelo(a)">Abuelo(a)</option>
                      <option value="Tío(a)">Tío(a)</option>
                      <option value="Sobrino(a)">Sobrino(a)</option>
                      <option value="Primo(a)">Primo(a)</option>
                      <option value="Cuñado(a)">Cuñado(a)</option>
                      <option value="Suegro(a)">Suegro(a)</option>
                      <option value="Padrastro/Madrastra">Padrastro/Madrastra</option>
                      <option value="Otros parientes">Otros parientes</option>
                      <option value="Otros No Parientes (Novio/a - Padrino/Madrina - Compadre/ Comadre- Amigo/a)">Otros No Parientes (Novio/a - Padrino/Madrina - Compadre/ Comadre- Amigo/a)</option>
                      <option value="Unifamiliar">Unifamiliar</option>
                      <option value="No aplica">No aplica</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="situacionMigratoria">Situación migratoria</label>
                    <select
                      id="situacionMigratoria"
                      name="situacionMigratoria"
                      className="form-control custom-select"
                      value={formData.situacionMigratoria}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Regular">Regular</option>
                      <option value="Irregular">Irregular</option>
                      <option value="En trámite">En trámite</option>
                      <option value="Ninguna">Ninguna</option>
                      <option value="No aplica">No aplica</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="razonMigracion">¿Cuál fue la razón principal por la que migró a Colombia?</label>
                    <select
                      id="razonMigracion"
                      name="razonMigracion"
                      className="form-control custom-select"
                      value={formData.razonMigracion}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Violencia basada en género">Violencia basada en género</option>
                      <option value="Para mejorar sus condiciones económicas">Para mejorar sus condiciones económicas</option>
                      <option value="Situación social">Situación social</option>
                      <option value="Por razones políticas">Por razones políticas</option>
                      <option value="Para estar con su familia">Para estar con su familia</option>
                      <option value="Motivo personal">Motivo personal</option>
                      <option value="Por la inseguridad en Venezuela">Por la inseguridad en Venezuela</option>
                      <option value="Por motivos de salud">Por motivos de salud</option>
                      <option value="No aplica">No aplica</option>
                      <option value="No responde">No responde</option>
                      <option value="Otra">Otra</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="otraRazonMigracion">Otra, ¿Cuál?</label>
                    <input
                      type="text"
                      id="otraRazonMigracion"
                      name="otraRazonMigracion"
                      className="form-control"
                      value={formData.otraRazonMigracion}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="tiempoViviendoColombia">¿Cuánto tiempo lleva viviendo en Colombia?</label>
                    <select
                      id="tiempoViviendoColombia"
                      name="tiempoViviendoColombia"
                      className="form-control custom-select"
                      value={formData.tiempoViviendoColombia}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Entre 1 y 6 meses">Entre 1 y 6 meses</option>
                      <option value="Entre 6 meses y 1 año">Entre 6 meses y 1 año</option>
                      <option value="Entre 1 y 2 años">Entre 1 y 2 años</option>
                      <option value="Más de 2 años">Más de 2 años</option>
                      <option value="No aplica">No aplica</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="tiempoViviendoVenezuela">¿Cuánto tiempo vivió en Venezuela?</label>
                    <select
                      id="tiempoViviendoVenezuela"
                      name="tiempoViviendoVenezuela"
                      className="form-control custom-select"
                      value={formData.tiempoViviendoVenezuela}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Entre 1 y 6 meses">Entre 1 y 6 meses</option>
                      <option value="Entre 6 meses y 1 año">Entre 6 meses y 1 año</option>
                      <option value="Entre 1 y 2 años">Entre 1 y 2 años</option>
                      <option value="Más de 2 años">Más de 2 años</option>
                      <option value="No aplica">No aplica</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="grupoPoblacional">¿Hace parte de alguno de los siguiente grupos poblacionales?</label>
                    <select
                      id="grupoPoblacional"
                      name="grupoPoblacional"
                      className="form-control custom-select"
                      value={formData.grupoPoblacional}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="En proceso de reincorporación">En proceso de reincorporación</option>
                      <option value="Desplazado/a">Desplazado/a</option>
                      <option value="Víctima del conflicto armado">Víctima del conflicto armado</option>
                      <option value="Ninguna">Ninguna</option>
                      <option value="No aplica">No aplica</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="nivelEducativo">Último nivel educativo alcanzado</label>
                    <select
                      id="nivelEducativo"
                      name="nivelEducativo"
                      className="form-control custom-select"
                      value={formData.nivelEducativo}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Ninguna">Ninguna</option>
                      <option value="Primaria">Primaria</option>
                      <option value="Secundaria (Grado 9°)">Secundaria (Grado 9°)</option>
                      <option value="Media (Grado 11°) / Bachillerato">Media (Grado 11°) / Bachillerato</option>
                      <option value="CLEI (Educación para adultos)">CLEI (Educación para adultos)</option>
                      <option value="Técnico laboral por competencias ">Técnico laboral por competencias </option>
                      <option value="Técnico profesional">Técnico profesional</option>
                      <option value="Tecnológico / Técnico Superior Universitario TSU">Tecnológico / Técnico Superior Universitario TSU</option>
                      <option value="Profesional universitario / Licenciado">Profesional universitario / Licenciado</option>
                      <option value="Posgrado (Especialización, Maestría o Doctorado)">Posgrado (Especialización, Maestría o Doctorado)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="programaFormacionTitulo">Nombre del programa de formación / título (Máximo 255 caracteres)</label>
                    <textarea
                      type="text"
                      id="programaFormacionTitulo"
                      name="programaFormacionTitulo"
                      className="form-control"
                      rows="5"
                      maxLength="500"
                      value={formData.programaFormacionTitulo}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="areaSectorFormacion">Área / Sector de formación</label>
                    <select
                      id="areaSectorFormacion"
                      name="areaSectorFormacion"
                      className="form-control custom-select"
                      value={formData.areaSectorFormacion}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Administración">Administración</option>
                      <option value="Agrícola">Agrícola</option>
                      <option value="Artes - Diseño">Artes - Diseño</option>
                      <option value="Ciencias humanas">Ciencias humanas</option>
                      <option value="Ciencias sociales">Ciencias sociales</option>
                      <option value="Comercio">Comercio</option>
                      <option value="Comunicaciones - Publicidad">Comunicaciones - Publicidad</option>
                      <option value="Construcción">Construcción</option>
                      <option value="Economía - Finanzas">Economía - Finanzas</option>
                      <option value="Educación">Educación</option>
                      <option value="Gastronomía">Gastronomía</option>
                      <option value="Industrial - Logístico">Industrial - Logístico</option>
                      <option value="Ingeniería">Ingeniería</option>
                      <option value="Minero y energético">Minero y energético</option>
                      <option value="Salud">Salud</option>
                      <option value="Seguridad">Seguridad</option>
                      <option value="Turismo">Turismo</option>
                      <option value="No aplica">No aplica</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="paisEstudios">¿En qué país realizó los estudios de su último nivel educativo alcanzado?</label>
                    <select
                      id="paisEstudios"
                      name="paisEstudios"
                      className="form-control custom-select"
                      value={formData.paisEstudios}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione un país</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Otro">Otro</option>
                      <option value="No aplica">No aplica</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="titulosConvalidados">¿Sus títulos o diplomas se encuentran convalidados?</label>
                    <select
                      id="titulosConvalidados"
                      name="titulosConvalidados"
                      className="form-control custom-select"
                      value={formData.titulosConvalidados}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                      <option value="No responde">No responde</option>
                      <option value="No aplica">No aplica</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="estudiandoActualmente">¿Estudia actualmente?</label>
                    <select
                      id="estudiandoActualmente"
                      name="estudiandoActualmente"
                      className="form-control custom-select"
                      value={formData.estudiandoActualmente}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                      <option value="No responde">No responde</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="ocupacionPrincipal">¿Actualmente cuál es su ocupación principal?</label>
                    <select
                      id="ocupacionPrincipal"
                      name="ocupacionPrincipal"
                      className="form-control custom-select"
                      value={formData.ocupacionPrincipal}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Dueño de otro negocio">Dueño de otro negocio</option>
                      <option value="Empleado en un negocio">Empleado en un negocio</option>
                      <option value="Empleado en una microempresa (menos de 10 empleados)">Empleado en una microempresa (menos de 10 empleados)</option>
                      <option value="Empleado en una pequeña o mediana empresa (entre 10 a 200 empleados)">Empleado en una pequeña o mediana empresa (entre 10 a 200 empleados)</option>
                      <option value="Empleado en una grande empresa (más de 200 empleados)">Empleado en una grande empresa (más de 200 empleados)</option>
                      <option value="Estudiante en Colombia">Estudiante en Colombia</option>
                      <option value="Estudiante en el exterior">Estudiante en el exterior</option>
                      <option value="Independiente - Emprendedor">Independiente - Emprendedor</option>
                      <option value="Labores del hogar">Labores del hogar</option>
                      <option value="Desempleado / No ocupado">Desempleado / No ocupado</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="tipoEmpleo">El tipo de empleo con el que cuenta es:</label>
                    <select
                      id="tipoEmpleo"
                      name="tipoEmpleo"
                      className="form-control custom-select"
                      value={formData.tipoEmpleo}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Formal (cuenta con contrato y pagos a seguridad social)">Formal (cuenta con contrato y pagos a seguridad social)</option>
                      <option value="Informal (No cuenta con un contrato, no realiza aportes a seguridad social)">Informal (No cuenta con un contrato, no realiza aportes a seguridad social)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="emprendimientoAnteriorPais">¿En qué país emprendió anteriormente?</label>
                    <select
                      id="emprendimientoAnteriorPais"
                      name="emprendimientoAnteriorPais"
                      className="form-control custom-select"
                      value={formData.emprendimientoAnteriorPais}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="En Venezuela">En Venezuela</option>
                      <option value="En Colombia">En Colombia</option>
                      <option value="En otro país">En otro país</option>
                      <option value="No responde">No responde</option>
                      <option value="No había emprendido anteriormente">No había emprendido anteriormente</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="otroPaisEmprendimiento">En otro país, ¿Cuál?</label>
                    <input
                      type="text"
                      id="otroPaisEmprendimiento"
                      name="otroPaisEmprendimiento"
                      className="form-control"
                      value={formData.otroPaisEmprendimiento}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="estadoNegocio">¿En qué estado se encuentra actualmente su negocio o emprendimiento?</label>
                    <select
                      id="estadoNegocio"
                      name="estadoNegocio"
                      className="form-control custom-select"
                      value={formData.estadoNegocio}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Solo tengo una idea de negocio">Solo tengo una idea de negocio</option>
                      <option value="Tengo una idea de negocio con un producto y/o servicio ya desarrollado, pero no he realizado ventas">Tengo una idea de negocio con un producto y/o servicio ya desarrollado, pero no he realizado ventas</option>
                      <option value="Tengo un modelo de negocio y he realizado algunas pruebas con posibles clientes que han generado ventas">Tengo un modelo de negocio y he realizado algunas pruebas con posibles clientes que han generado ventas</option>
                      <option value="Tengo un negocio con el cual he realizado ventas continuas por más de 6 meses">Tengo un negocio con el cual he realizado ventas continuas por más de 6 meses</option>
                      <option value="No Aplica">No Aplica</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="empleosGeneradosEmprendimiento">Si su emprendimiento se encuentra en marcha, ¿Cuántos empleos genera adicional a usted como emprendedor?</label>
                    <select
                      id="empleosGeneradosEmprendimiento"
                      name="empleosGeneradosEmprendimiento"
                      className="form-control custom-select"
                      value={formData.empleosGeneradosEmprendimiento}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="Más de 5">Más de 5</option>
                      <option value="Ninguno">Ninguno</option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="empleadosTemporales">De la totalidad de los empleados, ¿Cuántos de estos son empleados temporales u ocasionales (sin contrato)?</label>
                    <select
                      id="empleadosTemporales"
                      name="empleadosTemporales"
                      className="form-control custom-select"
                      value={formData.empleadosTemporales}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="Más de 5">Más de 5</option>
                      <option value="Ninguno">Ninguno</option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="ubicacionEmprendimiento">¿Cuál es el sitio donde tiene ubicado su emprendimiento?</label>
                    <select
                      id="ubicacionEmprendimiento"
                      name="ubicacionEmprendimiento"
                      className="form-control custom-select"
                      value={formData.ubicacionEmprendimiento}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Es su misma vivienda">Es su misma vivienda</option>
                      <option value="Está en su vivienda, pero es un local independiente">Está en su vivienda, pero es un local independiente</option>
                      <option value="Es un local comercial propio y usted vive en otro lugar">Es un local comercial propio y usted vive en otro lugar</option>
                      <option value="Es un local comercial en arriendo y usted vive en otro lugar">Es un local comercial en arriendo y usted vive en otro lugar</option>
                      <option value="Es un sitio al descubierto en la calle (ambulante y estacionario)">Es un sitio al descubierto en la calle (ambulante y estacionario)</option>
                      <option value="Está en un vehículo (con o sin motor)">Está en un vehículo (con o sin motor)</option>
                      <option value="No tengo un establecimiento comercial físico">No tengo un establecimiento comercial físico</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>


                   <div className="form-group">
                    <label htmlFor="otraUbicacionEmprendimiento">Otro ¿Cuál?</label>
                    <input
                      type="text"
                      id="otraUbicacionEmprendimiento"
                      name="otraUbicacionEmprendimiento"
                      className="form-control"
                      value={formData.otraUbicacionEmprendimiento}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="barrioSectorEmprendimiento">¿Cuál es el barrio o sector donde tiene ubicado el emprendimiento?</label>
                    <input
                      type="text"
                      id="barrioSectorEmprendimiento"
                      name="barrioSectorEmprendimiento"
                      className="form-control"
                      value={formData.barrioSectorEmprendimiento}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="descripcionNegocio">Describa brevemente qué hace su negocio o emprendimiento y cuáles son sus principales productos o servicios. (255 caracteres máximo)</label>
                    <textarea
                      id="descripcionNegocio"
                      name="descripcionNegocio"
                      className="form-control"
                      rows="5"
                      maxLength="500"
                      value={formData.descripcionNegocio}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="diferenciacionCompetencia">¿Cómo sus productos o servicios se diferencian de los que ofrece su competencia? (255 caracteres máximo)</label>
                    <textarea
                      type="text"
                      id="diferenciacionCompetencia"
                      name="diferenciacionCompetencia"
                      className="form-control"
                      rows="5"
                      maxLength="500"
                      value={formData.diferenciacionCompetencia}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="registradoEntidades">¿Tiene registrado su negocio ante alguna de las siguientes entidades?</label>
                    <select
                      id="registradoEntidades"
                      name="registradoEntidades"
                      className="form-control"
                      value={formData.registradoEntidades}
                      onChange={handleChange}
                    >
                      <option value="">Seleccionar opción</option>
                      <option value="DIAN (RUT)">DIAN (RUT)</option>
                      <option value="Cámara de Comercio">Cámara de Comercio</option>
                      <option value="Alcaldía">Alcaldía</option>
                      <option value="Corporación Autónoma Regional de su jurisdicción">Corporación Autónoma Regional de su jurisdicción</option>
                      <option value="Ninguna. Mi emprendimiento no está registrado.">Ninguna. Mi emprendimiento no está registrado.</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="numeroRUTNIT">No. de RUT o NIT</label>
                    <input
                      type="text"
                      id="numeroRUTNIT"
                      name="numeroRUTNIT"
                      className="form-control"
                      value={formData.numeroRUTNIT}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="nombreEmprendimiento">Nombre del emprendimiento</label>
                    <input
                      type="text"
                      id="nombreEmprendimiento"
                      name="nombreEmprendimiento"
                      className="form-control"
                      value={formData.nombreEmprendimiento}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="tiempoInicioOperacion">¿Desde hace cuánto tiempo inició operación comercial su emprendimiento? Fecha mm/aa</label>
                    <select
                      id="tiempoInicioOperacion"
                      name="tiempoInicioOperacion"
                      className="form-control custom-select"
                      value={formData.tiempoInicioOperacion}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Menos de 6 meses">Menos de 6 meses</option>
                      <option value="Entre 6 meses y 1 año">Entre 6 meses y 1 año</option>
                      <option value="Entre 1 y 2 años">Entre 1 y 2 años</option>
                      <option value="Más de 2 años">Más de 2 años</option>
                      <option value="No ha iniciado operación">No ha iniciado operación</option>
                      <option value="No Aplica">No aplica</option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="sectorPrincipal">¿Cuál es el sector principal en el que desarrolla su proyecto o negocio?</label>
                    <select
                      id="sectorPrincipal"
                      name="sectorPrincipal"
                      className="form-control custom-select"
                      value={formData.sectorPrincipal}
                      onChange={handleChange}
                    >
                      <option value="">Seleccionar sector</option>
                      <option value="Agricultura">Agricultura</option>
                      <option value="Arte y entretenimiento">Arte y entretenimiento</option>
                      <option value="Comercio">Comercio</option>
                      <option value="Comunicación e información">Comunicación e información</option>
                      <option value="Construcción">Construcción</option>
                      <option value="Energía (Suministro de electricidad, gas, agua)">Energía (Suministro de electricidad, gas, agua)</option>
                      <option value="Manufactura">Manufactura</option>
                      <option value="Minería y petróleo">Minería y petróleo</option>
                      <option value="Otros servicios">Otros servicios</option>
                      <option value="Servicios financieros y empresariales">Servicios financieros y empresariales</option>
                      <option value="Servicios sociales">Servicios sociales</option>
                      <option value="Software">Software</option>
                      <option value="Transporte y almacenamiento">Transporte y almacenamiento</option>
                      <option value="Otros">Otros</option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="actividadEconomica">Actividad económica (CIIU)</label>
                    <select
                      id="actividadEconomica"
                      name="actividadEconomica"
                      className="form-control custom-select"
                      value={formData.actividadEconomica}
                      onChange={handleChange}
                    >
                      <option value="">Seleccionar actividad económica</option>
                      <option value="01">01 - Agricultura, ganadería, caza y actividades de servicios conexas</option>
                      <option value="02">02 - Silvicultura y extracción de madera</option>
                      <option value="03">03 - Pesca y acuicultura</option>
                      <option value="05">05 - Extracción de carbón de piedra y lignito</option>
                      <option value="06">06 - Extracción de petróleo crudo y gas natural</option>
                      <option value="07">07 - Extracción de minerales metalíferos</option>
                      <option value="08">08 - Extracción de otras minas y canteras</option>
                      <option value="09">09 - Actividades de servicios de apoyo para la explotación de minas y canteras</option>
                      <option value="10">10 - Elaboración de productos alimenticios</option>
                      <option value="11">11 - Elaboración de bebidas</option>
                      <option value="12">12 - Elaboración de productos de tabaco</option>
                      <option value="13">13 - Fabricación de productos textiles</option>
                      <option value="14">14 - Confección de prendas de vestir</option>
                      <option value="15">15 - Curtido y cueros; fabricación de calzado, maletas, bolsos, artículos de talabartería; adobo y teñido de pieles</option>
                      <option value="16">16 - Transformación de la madera y fabricación de productos de madera</option>
                      <option value="17">17 - Fabricación de papel, cartón y productos de papel y cartón</option>
                      <option value="18">18 - Actividades de impresión y de producción de copias a partir de grabaciones originales</option>
                      <option value="19">19 - Coquización, fabricación de productos de la refinación del petróleo y actividad de mezcla de combustibles</option>
                      <option value="20">20 - Fabricación de sustancias y productos químicos</option>
                      <option value="21">21 - Fabricación de productos farmacéuticos, sustancias químicas medicinales y productos botánicos de uso farmacéutico</option>
                      <option value="22">22 - Fabricación de productos de caucho y de plástico</option>
                      <option value="23">23 - Fabricación de otros productos minerales no metálicos</option>
                      <option value="24">24 - Fabricación de productos metalúrgicos básicos</option>
                      <option value="25">25 - Fabricación de productos elaborados de metal, excepto maquinaria y equipo</option>
                      <option value="26">26 - Fabricación de productos informáticos, electrónicos y ópticos</option>
                      <option value="27">27 - Fabricación de aparatos y equipo eléctrico</option>
                      <option value="28">28 - Fabricación de maquinaria y equipo n.c.p.</option>
                      <option value="29">29 - Fabricación de vehículos automotores, remolques y semirremolques</option>
                      <option value="30">30 - Fabricación de otros tipos de equipo de transporte</option>
                      <option value="31">31 - Fabricación de muebles, colchones y somieres</option>
                      <option value="32">32 - Otras industrias manufactureras</option>
                      <option value="33">33 - Instalación, mantenimiento y reparación especializado de maquinaria y equipo</option>
                      <option value="35">35 - Suministro de electricidad, gas, vapor y aire acondicionado</option>
                      <option value="36">36 - Captación, tratamiento y distribución de agua</option>
                      <option value="37">37 - Evacuación y tratamiento de aguas residuales</option>
                      <option value="38">38 - Recolección, tratamiento y disposición de desechos, recuperación de materiales</option>
                      <option value="39">39 - Actividades de saneamiento ambiental y otros servicios de gestión de desechos</option>
                      <option value="41">41 - Construcción de edificios</option>
                      <option value="42">42 - Obras de ingeniería civil</option>
                      <option value="43">43 - Actividades especializadas para la construcción de edificios y obras de ingeniería civil</option>
                      <option value="45">45 - Comercio, mantenimiento y reparación de vehículos automotores y motocicletas, sus partes, piezas y accesorios</option>
                      <option value="46">46 - Comercio al por mayor y en comisión o por contrata, excepto el comercio de vehículos automotores y motocicletas</option>
                      <option value="47">47 - Comercio al por menor (incluso el comercio al por menor de combustibles), excepto el de vehículos automotores y motocicletas</option>
                      <option value="49">49 - Transporte terrestre; transporte por tuberías</option>
                      <option value="50">50 - Transporte acuático</option>
                      <option value="51">51 - Transporte aéreo</option>
                      <option value="52">52 - Almacenamiento y actividades complementarias al transporte</option>
                      <option value="53">53 - Correo y servicios de mensajería</option>
                      <option value="55">55 – Alojamiento</option>
                      <option value="56">56 - Actividades de servicios de comidas y bebidas</option>
                      <option value="58">58 - Actividades de edición</option>
                      <option value="59">59 - Actividades cinematográficas, de video y producción de programas de televisión, grabación de sonido y edición de música</option>
                      <option value="60">60 - Actividades de programación, transmisión y/o difusión</option>
                      <option value="61">61 – Telecomunicaciones</option>
                      <option value="62">62 - Desarrollo de sistemas informáticos, consultoría informática y actividades relacionadas</option>
                      <option value="63">63 - Actividades de servicios de información</option>
                      <option value="64">64 - Actividades de servicios financieros, excepto las de seguros y de pensiones</option>
                      <option value="65">65 - Seguros (incluso el reaseguro), seguros sociales y fondos de pensiones, excepto la seguridad social</option>
                      <option value="66">66 - Actividades auxiliares de las actividades de servicios financieros</option>
                      <option value="68">68 - Actividades inmobiliarias</option>
                      <option value="69">69 - Actividades jurídicas y de contabilidad</option>
                      <option value="70">70 - Actividades de administración empresarial; actividades de consultoría de gestión</option>
                      <option value="71">71 - Actividades de arquitectura e ingeniería; ensayos y análisis técnicos</option>
                      <option value="72">72 - Investigación científica y desarrollo</option>
                      <option value="73">73 - Publicidad y estudios de mercado</option>
                      <option value="74">74 - Otras actividades profesionales, científicas y técnicas</option>
                      <option value="75">75 - Actividades veterinarias</option>
                      <option value="77">77 - Actividades de alquiler y arrendamiento</option>
                      <option value="78">78 - Actividades de empleo</option>
                      <option value="79">79 - Actividades de las agencias de viajes, operadores turísticos, servicios de reserva y actividades relacionadas</option>
                      <option value="80">80 - Actividades de seguridad e investigación privada</option>
                      <option value="81">81 - Actividades de servicios a edificios y paisajismo (jardines, zonas verdes)</option>
                      <option value="82">82 - Actividades administrativas y de apoyo de oficina y otras actividades de apoyo a las empresas</option>
                      <option value="84">84 - Administración pública y defensa; planes de seguridad social de afiliación obligatoria</option>
                      <option value="85">85 - Educación</option>
                      <option value="86">86 - Actividades de atención de la salud humana</option>
                      <option value="87">87 - Actividades de atención residencial medicalizada</option>
                      <option value="88">88 - Actividades de asistencia social sin alojamiento</option>
                      <option value="90">90 - Actividades creativas, artísticas y de entretenimiento</option>
                      <option value="91">91 - Actividades de bibliotecas, archivos, museos y otras actividades</option>
                      <option value="92">92 - Actividades de juegos de azar y apuestas</option>
                      <option value="93">93 - Actividades deportivas y actividades recreativas y de esparcimiento</option>
                      <option value="94">94 - Actividades de asociaciones</option>
                      <option value="95">95 - Mantenimiento y reparación de computadores, efectos personales y enseres domésticos</option>
                      <option value="96">96 - Otras actividades de servicios personales</option>
                      <option value="97">97 - Actividades de los hogares individuales como empleadores de personal doméstico</option>
                      <option value="98">98 - Actividades no diferenciadas de los hogares individuales como productores de bienes y servicios para uso propio</option>
                      <option value="99">99 - Actividades de organizaciones y entidades extraterritoriales</option>
                      <option value="Por definir">Por definir</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="categoriaEmprendimiento">De las siguientes opciones, ¿En qué categoría clasifica su emprendimiento?</label>
                    <select
                      id="categoriaEmprendimiento"
                      name="categoriaEmprendimiento"
                      className="form-control custom-select"
                      value={formData.categoriaEmprendimiento}
                      onChange={handleChange}
                    >
                      <option value="">Seleccionar categoría</option>
                      <option value="Arte y cultura">Arte y cultura</option>
                      <option value="Artesanías">Artesanías</option>
                      <option value="Belleza">Belleza</option>
                      <option value="Comercio al detal">Comercio al detal</option>
                      <option value="Construcción">Construcción</option>
                      <option value="Gastronomía">Gastronomía</option>
                      <option value="Moda">Moda</option>
                      <option value="Negocios verdes - Sostenibles">Negocios verdes - Sostenibles</option>
                      <option value="Servicios">Servicios</option>
                      <option value="Software">Software</option>
                      <option value="Tecnología">Tecnología</option>
                      <option value="Transporte">Transporte</option>
                      <option value="Turismo">Turismo</option>
                      <option value="No aplica">No aplica</option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="ingresosVentas">¿Actualmente recibe ingresos por ventas asociadas a su emprendimiento?</label>
                    <select
                      id="ingresosVentas"
                      name="ingresosVentas"
                      className="form-control custom-select"
                      value={formData.ingresosVentas}
                      onChange={handleChange}
                    >
                      <option value="">Seleccionar opción</option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                      <option value="No responde">No responde</option>
                      <option value="No aplica">No aplica</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="valorPromedioVentasMes">¿Cuál es el valor promedio de las ventas de sus productos y/o servicios al mes?</label>
                    <input
                      type="text"
                      id="valorPromedioVentasMes"
                      name="valorPromedioVentasMes"
                      className="form-control"
                      value={formData.valorPromedioVentasMes}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="valorAnualVentas">¿Cuál es el valor anual de las ventas de productos y/o servicios? </label>
                    <input
                      type="text"
                      id="valorAnualVentas"
                      name="valorAnualVentas"
                      className="form-control"
                      value={formData.valorAnualVentas}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="productosServiciosOfrecidos">¿Cuáles son los productos y/o servicios que puede ofrecer? </label>
                    <input
                      type="text"
                      id="productosServiciosOfrecidos"
                      name="productosServiciosOfrecidos"
                      className="form-control"
                      value={formData.productosServiciosOfrecidos}
                      onChange={handleChange}
                    />
                  </div>




                  








                 

                 





















                  

                 




























          {/* Continuar con los demás campos del formulario */}

          <div className="row">
            <div className="col-12">
              <button type="submit" className="btn btn-success float-right">Crear nueva caracterización</button>
            </div>
          </div>
        </form>
          {/* Modal de éxito */}
        {showSuccessModal && (
          <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Éxito</h5>
                  <button type="button" className="close" onClick={handleModalClose}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>¡Caracterización creada con éxito!</p>
                </div>
              </div>
            </div>
          </div>
        )}
            </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

