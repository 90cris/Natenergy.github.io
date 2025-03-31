import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";
import "./App.css";
import Header from "./componentes/header";
import { Nabvar } from "./componentes/Nabvar";
import { SinServicio } from "./componentes/SinServicio";
import { Contacto } from "./pages/Contacto";
import { PostVenta } from "./pages/PostVenta";
import { Cotizacion } from "./pages/Cotizacion";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <div className="header-nav-container">
          <Header />
          <Nabvar />
        </div>


        <div className="content">
          <Routes>
            <Route path="/SinServicio" element={<SinServicio />} />
            <Route path="/PostVenta" element={<PostVenta />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Cotizacion" element={<Cotizacion />} />
            <Route path="*" element={<Navigate to="/SinServicio" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
