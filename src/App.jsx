import { useState } from "react";
import "./App.css";
import Header from "./componentes/header";
import { Narvar } from "./componentes/Narvar";
import { SinServicio } from "./componentes/SinServicio";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contacto } from "./componentes/Contacto";
import { PostVenta } from "./componentes/PostVenta";
import { NotFound } from "./componentes/NotFound";
import { Cotizacion } from "./componentes/Cotizacion";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <Inicio /> */}
        <Header />
        <Narvar />
        <Routes>
          <Route path="/" element={<SinServicio />} />
          <Route path="/PostVenta" element={<PostVenta />} />
          <Route path="/Contacto" element={<Contacto />} />
          {/* <Route path="/Cotizacion" element={<Cotizacion />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
