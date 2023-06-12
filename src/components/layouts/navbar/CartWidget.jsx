import { AiOutlineShoppingCart } from "react-icons/ai";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <>
    <Link to="/Carrito">
      <Button variant="outline-dark" style={{ marginLeft: "auto" }}>
        <AiOutlineShoppingCart />
        <Badge pill bg="danger">
          1
        </Badge>
      </Button>
      </Link>
    </>
  );
}
