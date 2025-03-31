import React from "react";
import "../css/PostVenta.css"; // Importamos el archivo CSS

export const PostVenta = () => {
  return (
    <div className="container-postventa">
      <div className="row">
        <div className="card-postventa">
          <div className="card-body">
            <h3 className="card-title">VII REGIÓN</h3>
            <p className="card-text">Contacto: +56 933868225</p>
            <p className="card-text">Dirección: 19 sur #710, Villa Santa Elvira</p>
          </div>
        </div>

        <div className="card-postventa">
          <div className="card-body">
            <h3 className="card-title">VIII REGIÓN</h3>
            <p className="card-text">Contacto: +56 940901342</p>
            <p className="card-text">Dirección: Sin ubicación</p>
          </div>
        </div>
      </div>
    </div>
  );
};
