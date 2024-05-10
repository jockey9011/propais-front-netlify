import React from 'react'

export default function Footer() {
  // Verifica si hay un token en el almacenamiento local
  const token = localStorage.getItem('token');

  // Si no hay token, no se muestra el footer
  if (!token) {
    return null;
  }
  return (
    <>
    <footer className="main-footer">
  <div className="float-right d-none d-sm-block">
    <b>Version</b> 1.0.0
  </div>
  <strong>Copyright © 2024 <a href="#"></a>ProPaís.</strong> Todos los derechos reservados.
</footer>
<aside className="control-sidebar control-sidebar-dark">
  {/* Control sidebar content goes here */}
</aside>
</>


  )
}
