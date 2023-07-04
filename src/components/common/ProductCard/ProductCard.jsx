import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ProductCard.css";
import { Link, useParams} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Contador } from "./Contador";


const ProductCard = ({ elemento}) => {
   const { id } = useParams();

   const { agregarProductos, cantidad } = useContext(CartContext);
   const cantidadDeProductos = cantidad(id);

   const onAdd = (cantidad) => {
     let data = {
       ...elemento,
       quantity: cantidad,
     };

     agregarProductos(data);
     const Toast = Swal.mixin({
       toast: true,
       position: "center",
       showConfirmButton: false,
       timer: 2000,
       timerProgressBar: true,

       color: "cadetBlue",
       didOpen: (toast) => {
         toast.addEventListener("mouseenter", Swal.stopTimer);
         toast.addEventListener("mouseleave", Swal.resumeTimer);
       },
     });
     Toast.fire({
       icon: "success",
       title: "El producto se agregó al carrito",
     });
   };

  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className="tarjeta">
            <Card.Img className="imgTarjeta" variant="top" src={elemento.img} />
            <Card.Body>
              <Card.Title>{elemento.title}</Card.Title>
              <Card.Text>{elemento.description}</Card.Text>
              <Card.Text>Tamaño: {elemento.tamaño}</Card.Text>
              <Link to={`/DetalleProducto/${elemento.id}`}>
                <Button className="detalle" size="sm" variant="outline-dark">
                  Ver detalle
                </Button>
              </Link>
              <Card.Footer className="precios">${elemento.price}</Card.Footer>
              {elemento.stock > 0 ? (
                <Contador
                  stock={elemento.stock}
                  initial={cantidadDeProductos}
                  onAdd={onAdd}
                />
              ) : 
                <Card.Footer as="h3">SIN STOCK</Card.Footer>
              }
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};


export default ProductCard;
