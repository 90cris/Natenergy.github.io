import React from "react";
import home_fotovoltaico from "/src/assets/home_fotovoltaico.jpg";
import "../css/Stylo.css";

export const SinServicio = () => {
  return (
    <div className="card">
      <h1 className="card-title">SITIO EN MANTENCIÓN</h1>
      <img src={home_fotovoltaico} alt="Mantenimiento" className="mantencion-img" />
    </div>
  );
};
