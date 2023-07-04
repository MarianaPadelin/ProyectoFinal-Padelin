import { AccountCircle } from "@mui/icons-material";
import { Input, InputAdornment, TextField } from "@mui/material"
import { Button } from "react-bootstrap";
import "./Login.css"

const Login = ({handleSubmit, handleChange, /*errors*/}) => {
    
  return (
    <div className="camposFormulario">
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder="usuario"
          label="usuario"
          name="usuario"
          variant="outlined"
          // error={errors.usuario ? true : false}
          // helperText={errors.usuario}
          onChange={handleChange}
        />
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        <TextField
          type="password"
          label="contraseña"
          placeholder="contraseña"
          name="contraseña"
          variant="outlined"
          // error={errors.contraseña ? true : false}
          // helperText={errors.contraseña}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="dark"
          size="lg"
          style={{ margin: 5, backgroundColor: "lightcoral" }}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default Login