import React from 'react'
import "../css/Stylo.css";
import { Link } from 'react-router-dom';

export const Narvar = () => {
  return (

<ul className="nav justify-content-center nav-tabs">
  <li className="nav-item">
    <Link className="nav-link " to="/SinServicio">Sitio</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/PostVenta">Post-Venta</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" to="/Cotizacion">Cotización</Link>
  </li> *
  <li className="nav-item">
    <Link className="nav-link" to="/Contacto">Contacto</Link>
  </li>

</ul>

  )
}
