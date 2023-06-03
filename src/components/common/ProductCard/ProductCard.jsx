import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ProductCard.css"


const ProductCard = ({ elemento }) => {
  return (
    <div>
      <Row xs={1} md={2} className="g-4 gy-4">
        <Col>
          <Card className="tarjeta">
            <Card.Img className="imgTarjeta" variant="top" src={elemento.img} />
            <Card.Body>
              <Card.Title>{elemento.title}</Card.Title>
              <Card.Text>{elemento.description}</Card.Text>
              <Card.Text>Tamaño: {elemento.tamaño}</Card.Text>
              <Button size="sm" variant="outline-dark">
                Ver detalle
              </Button>
              <Card.Footer className="precios">${elemento.price}</Card.Footer>
              <Button className="botonComprar" variant="dark">Agregar al carrito</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCard;
