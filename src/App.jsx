import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./components/layouts/Layouts.jsx";
import Error from "./components/pages/error/Error.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import { rutasApp } from "./routes/rutasApp.js";

function App() {
  return (
    <div style={{ backgroundColor: "gray",  minHeight: "100vh", display: "flex",  flexDirection: "column"}}>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layouts />}>
              {rutasApp.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
              
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
