import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";


const SearchBar = ({ handleSubmit, handleChange }) => {
  return (
    <div onSubmit={handleSubmit} className="d-flex">
      <TextField
        placeholder="Buscar producto"
        onChange={handleChange}
        name="searchbar"
        style={{
          backgroundColor: "lightcoral",
          paddingInline: "1vw",
          maxHeight: 50,
        }}
      ></TextField>
      <Button className="botonComprar" size="sm" type="submit">
        Buscar
      </Button>
    </div>
  );
};  

export default SearchBar;
