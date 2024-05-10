import React from 'react';
import axios from 'axios';

const DescargaMasiva = () => {

  const handleDescargarClick = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No se encontró el token de autenticación');
        return;
      }

      const response = await axios.post(
        'https://propais-back-render.onrender.com/descargar',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
          responseType: 'blob' // Indicamos que esperamos una respuesta tipo blob (archivo)
        }
      );

      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'text/csv;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'datos.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Error en la solicitud:', response.statusText);
      }
    } catch (error) {
      console.error('Error al descargar los datos:', error);
    }
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>
          Descarga Masiva de Datos
        </h1>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              
              <div className="box-body">
                <button className="btn btn-primary" onClick={handleDescargarClick}>Descargar CSV</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DescargaMasiva;
