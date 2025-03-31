import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css"; 

export const Nabvar = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("/SinServicio"); // Ruta por defecto

  useEffect(() => {
    // Actualiza la ruta activa cuando cambia la ubicación
    setActiveRoute(location.pathname);
  }, [location]);

  return (
    <div className="Contenedor-Nav">
      <ul className="nav justify-content-center nav-tabs">
        <li className="nav-item">
          <Link
            className={`nav-link ${activeRoute === "/SinServicio" ? "active" : ""}`}
            to="/SinServicio"
          >
            Sitio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activeRoute === "/PostVenta" ? "active" : ""}`}
            to="/PostVenta"
          >
            Post-Venta
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activeRoute === "/Cotizacion" ? "active" : ""}`}
            to="/Cotizacion"
          >
            Cotización
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activeRoute === "/Contacto" ? "active" : ""}`}
            to="/Contacto"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
};
