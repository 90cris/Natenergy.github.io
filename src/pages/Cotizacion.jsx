import React, { useState, useEffect } from "react";
import "../css/Cotizacion.css";
import panel from "../../public/assets/panel_150.jpg";
import kit from "../../public/assets/kit_2.jpg";

export const Cotizacion = () => {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 3000); // Simula la carga por 3 segundos

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, []);

  return (
    <div className="card-cotizacion">
        {cargando ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
      <div className="card-estanque">
        <img src={panel} alt="Panel Termopanel" />
        <h3 className="card-title">TERMOPANEL</h3>
        <div className="card-body">
          <p className="card-text">Email:</p>
          <p className="card-text">rortiz@natenergy.cl</p>
        </div>
      </div>
      <div className="card-placa">
        <img src={kit} alt="Kit Fotovoltaico" />
        <h3 className="card-title">FOTOVOLTAICO</h3>
        <div className="card-body">
          <p className="card-text">Email:</p>
          <p className="card-text">jpvenegas@natenergy.cl</p>
        </div>
      </div>
      </>
      )}
    </div>
  );
};
