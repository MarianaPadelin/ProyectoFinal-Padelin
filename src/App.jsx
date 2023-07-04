import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer.jsx";
import DetalleContainer from "./components/pages/detalle/DetalleContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarritoContainer from "./components/pages/carrito/CarritoContainer.jsx";
import Layouts from "./components/layouts/Layouts.jsx";
import Error from "./components/pages/error/Error.jsx";
import Login from "./components/pages/login/Login.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";

import CheckoutContainer from "./components/pages/checkout/CheckoutContainer.jsx";

function App() {
  return (
    <div style={{ backgroundColor: "gray", minHeight: 800 }}>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layouts />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/DetalleProducto/:id"
                element={<DetalleContainer />}
              />
              <Route path="/Carrito" element={<CarritoContainer />} />
              <Route
                path="/Categorias/:nombreCategoria"
                element={<ItemListContainer />}
              />
              <Route
                path="/Linea/:nombreLinea"
                element={<ItemListContainer />}
              />
              <Route path="/Login" element={<Login />} />
              <Route path="/Checkout" element={<CheckoutContainer />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
