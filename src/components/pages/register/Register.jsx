import { TextField } from "@mui/material";
import "./Register.css"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Register = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div className="camposFormulario">
      <form className="formRegister" onSubmit={handleSubmit}>
        <TextField
          placeholder="nombre"
          label="nombre"
          name="nombre"
          variant="outlined"
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
          onChange={handleChange}
        />

        <TextField
          placeholder="email"
          label="email"
          name="email"
          variant="outlined"
          error={errors.email ? true : false}
          helperText={errors.email}
          onChange={handleChange}
        />
        <TextField
          type="password"
          label="contraseña"
          placeholder="contraseña"
          name="contraseña"
          variant="outlined"
          error={errors.contraseña ? true : false}
          helperText={errors.contraseña}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="dark"
          size="lg"
          style={{ margin: 5, backgroundColor: "lightcoral" }}
        >
          Registrarse
        </Button>
      </form>
      <Link to="/Login">
        <p>¿Ya tenés cuenta? Iniciá sesión</p>
      </Link>
    </div>
  );
};

export default Register