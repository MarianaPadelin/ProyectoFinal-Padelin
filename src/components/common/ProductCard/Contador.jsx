import { Link } from "react-router-dom";
import { useCount } from "../../../hooks/useCount";
import "./ProductCard.css"
import { Button } from "react-bootstrap";

export const Contador = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div className="count--container">
        <Button
          className="detalle"
          size="sm"
          variant="outline-dark"
          onClick={decrement}
        >
          -
        </Button>
        <span>{count}</span>
        <Button
          className="detalle"
          size="sm"
          variant="outline-dark"
          onClick={increment}
        >
          +
        </Button>
        <Link to="/Carrito">
          <Button
            className="botonComprar"
            variant="dark"
            onClick={() => onAdd(count)}
          >
            Agregar al carrito
          </Button>
        </Link>
      </div>
    </>
  );
};
