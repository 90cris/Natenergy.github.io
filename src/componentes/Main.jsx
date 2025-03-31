import React from "react";
import image from "../../public/assets/home_fotovoltaico.jpg";

export const Main = () => {
  return (

    <header className="grilla">
      <div className="box">
      {/* <img src={`${process.env.PUBLIC_URL}/assets/home_fotovoltaico.jpg`} alt="Fotovoltaico" width="100px" /> */}
        <img src={image} alt="" width="100px" />
      </div>
    </header>
  );
};
