import { Home } from "./components/pages/Home/Home.jsx";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer.jsx";
import { Navegacion } from "./components/layouts/navbar/Navbar.jsx";
import { Footer } from "./components/layouts/footer/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
 return (
   <div style={{backgroundColor:"gray"}}>
     <Navegacion />
    <ItemListContainer />
    <h4>Mariana Padelin - Comisión 43240</h4>
    <Home />
    <Footer />
   </div>
 );
}

export default App;
