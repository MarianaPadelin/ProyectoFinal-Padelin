import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ProductCard.css"
import { Link } from "react-router-dom";


const ProductCard = ({ elemento }) => {
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
              <Link to="/Carrito">
                <Button variant="dark" className="botonComprar">
                  Agregar al carrito
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCard;
