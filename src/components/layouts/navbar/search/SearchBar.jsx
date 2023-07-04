import { Form, Button } from "react-bootstrap";

const SearchBar = ({handleSubmit, handleChange}) => {
  return (
    <form
      className="d-flex"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit
      }}
    >
      <Form.Control
        placeholder="Buscar producto"
        className="me-2"
        aria-label="Buscar"
        name="busqueda"
        onChange={handleChange}
        style={{ backgroundColor: "lightcoral", paddingInline: "1vw" }}
      />
      <Button type="submit" variant="outline-dark">
        Buscar
      </Button>
    </form>
  );
}

export default SearchBar