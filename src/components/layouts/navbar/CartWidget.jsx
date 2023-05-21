import { AiOutlineShoppingCart } from "react-icons/ai";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export const CartWidget = () => {
  return (
    <Button variant="outline-dark" style={{marginLeft:"auto"}}>
      <AiOutlineShoppingCart />
      <Badge pill bg="danger">
        1
      </Badge>
    </Button>
  );
}
