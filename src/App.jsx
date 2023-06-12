import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer.jsx";
import DetalleContainer from "./components/pages/detalle/DetalleContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarritoContainer from "./components/pages/carrito/carritoContainer.jsx";
import Layouts from "./components/layouts/Layouts.jsx";
import Error from "./components/pages/error/Error.jsx";

function App() {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/DetalleProducto/:id" element={<DetalleContainer />} />
            <Route path="/Carrito" element={<CarritoContainer />} />
            <Route path="/Categorias/:category" element={<ItemListContainer />}/>
            <Route path="/Linea/:linea" element={<ItemListContainer />}/>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
