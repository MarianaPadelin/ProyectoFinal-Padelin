import { Home } from "./components/pages/Home/Home.jsx";
import { Navegacion } from "./components/layouts/navbar/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsListContainer from "./components/pages/productsList/ProductsListContainer.jsx";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer.jsx";
import Footer from "./components/layouts/footer/Footer.jsx";

function App() {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <Navegacion />
      <ItemListContainer />
      <ProductsListContainer />

      <h4>Mariana Padelin - Comisión 43240</h4>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
