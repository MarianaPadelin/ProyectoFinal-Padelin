import * as React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Carrito.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";


const Carrito = ({ cart, eliminarElemento, preguntaLimpiar, darPrecioTotal, darPesoTotal }) => {
  return (
    <>
      <div>
        {cart.map((producto) => {
          return (
            <div key={producto.id}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  bgcolor: "lightgray",
                  margin: "3vw",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={producto.img} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={producto.title}
                    secondary={
                      <React.Fragment>
                        {producto.description}
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          — ${producto.price}
                        </Typography>
                        <br></br>
                        Cantidad:
                        {producto.quantity}
                      </React.Fragment>
                    }
                  />
                  <Button
                    className="botonVolver"
                    onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar este producto?",
                        icon: "warning",
                        showCancelButton: true,
                        background: "lightGrey",
                        confirmButtonColor: "cadetBlue",
                        cancelButtonColor: "lightCoral",
                        confirmButtonText: "Eliminar",
                        cancelButtonText: "Cancelar",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          eliminarElemento(producto.id);
                          Swal.fire({
                            title: "Listo",
                            text: "Se eliminó el producto",
                            icon: "success",
                            background: "lightGrey",
                            confirmButtonColor: "cadetBlue",
                          });
                        }
                      });
                    }}
                  >
                    X
                  </Button>
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </div>
          );
        })}

        <Button className="botonVolver" onClick={preguntaLimpiar}>
          Limpiar Carrito
        </Button>
      </div>

      <Link to="/">
        <Button className="botonVolver">Volver</Button>
      </Link>

      <h3>El total de la compra es:${darPrecioTotal}</h3>
      <h4>
        El peso de la encomienda es de {darPesoTotal} eso no lo ve el usuario.
        El valor aproximado del envío es de ${" "}
      </h4>
      <Link to="/Checkout">
    
        <Button className="botonVolver">Finalizar compra</Button>
      </Link>
    </>
  );
};

export default Carrito;
