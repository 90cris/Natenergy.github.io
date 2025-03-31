import React from "react";
import image from "../../public/assets/home_fotovoltaico.jpg";
import "../css/Stylo.css";

export const SinServicio = () => {
  return (
    <div className="card">
      <h1 className="card-title">SITIO EN MANTENCIÓN</h1>
      <img src={image} alt="Mantenimiento" className="mantencion-img" />
    </div>
  );
};
