import React from "react";

export const PostVenta = () => {
  return (
    <div className="postventa">
      <div className="row p-2">
        <div className="col-sm-106 w-80 p-3" style={{ width: "30rem" }}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">VII REGIÓN </h3>
              <p className="card-text">Contacto: +56 933868225</p>
              <p className="card-text">
                Dirección: 19 sur #710, Villa Santa Elvira
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-106 w-80 p-3" style={{ width: "30rem" }}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">VIII REGIÓN </h3>
              <p className="card-text">Contacto: +56 940901342</p>
              <p className="card-text"></p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
