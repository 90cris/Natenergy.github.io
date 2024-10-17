import React from "react";
import "../css/Stylo.css";

export const Cotizacion = () => {
  return (
    <div className="row p-2">
      <div className="col-sm-106 w-80 p-3" style={{ width: "30rem" }}>
        <div className="card ">
          <img src="https://i.ibb.co/LvxFLzb/panel-de-placa-pana-150-lts.jpg" style={{width:"250px"}} class="card-img-center" alt="" />
          <h3 className="card-title">TERMOPANEL </h3>
          <div className="card-body">
            {/* <p className="card-text">Contacto: </p> */}
            <p className="card-text">Email:</p>
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-106 w-80 p-3" style={{ width: "30rem" }}>
        <div className="card">
          <img src="https://i.ibb.co/M9dHhbp/kit-2-baja-calidad-1mb.jpg"  style={{width:"290px"}} class="card-img-center" alt="" />
          <h3 className="card-title">FOTOVOLAICO </h3>
          <div className="card-body">
            {/* <p className="card-text">Contacto: </p> */}
            <p className="card-text">Email:</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
