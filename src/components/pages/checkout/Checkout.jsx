import { Box, TextField } from "@mui/material"
import { Button } from "react-bootstrap";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "25ch",
            margin: "3vw",
            display: "flex",
            alignContent: "center",
            background:"lightgrey"
          },
        }}
        // noValidate
        // autoComplete="off"
      >
  
        <TextField
          label="Nombre"
          name="nombre"
          placeholder="Ingrese su nombre"
          helperText={errors.nombre}
          error={errors.nombre ? true : false}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          placeholder="Ingrese su email"
          helperText={errors.email}
          error={errors.email ? true : false}
          onChange={handleChange}
        />
        <TextField
          label="Telefono"
          name="telefono"
          placeholder="Ingrese su teléfono"
          helperText={errors.telefono}
          error={errors.telefono ? true : false}
          onChange={handleChange}
        />
        <Button className="botonVolver" type="submit">
          Enviar
        </Button>


      </Box>
    </div>
  );
}

export default Checkout