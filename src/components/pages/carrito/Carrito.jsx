import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Carrito.css"

const Carrito = () => {
  return (
    <div>
      Esta es la página del carrito
      <Link to="/">
        <Button className="botonVolver">Volver</Button>
      </Link>
    </div>
  );
}

export default Carrito