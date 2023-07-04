import { useContext } from "react";
import Carrito from "./Carrito";
import { CartContext } from "../../../context/CartContext";
import CarritoVacio from "./CarritoVacio";
import Swal from "sweetalert2";

const CarritoContainer = () => {
  //consumo el contexto carrito, le tengo que poner qué contexto uso
  const { cart, limpiarCarrito, eliminarElemento, totalPrecio, totalPeso } = useContext(CartContext);
  

  const preguntaLimpiar = () => {
    Swal.fire({
      title: "¿Vaciar el carrito?",
      icon: "warning",
      showCancelButton: true,
      background: "lightGrey",
      confirmButtonColor: "cadetBlue",
      cancelButtonColor: "lightCoral",
      confirmButtonText: "Vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        limpiarCarrito();
        Swal.fire({
          title: "Listo",
          text: "El carrito se vació",
          icon: "success",
          background: "lightGrey",
          confirmButtonColor: "cadetBlue",
        });
      }
    });
  };

  const darPrecioTotal = totalPrecio()
  const darPesoTotal = totalPeso()
  return (
    <>
      {cart.length > 0 ? (
        <Carrito
          cart={cart}
          eliminarElemento={eliminarElemento}
          preguntaLimpiar={preguntaLimpiar}
          darPrecioTotal={darPrecioTotal}
          darPesoTotal={darPesoTotal}
        />
      ) : (
        <CarritoVacio />
      )}
    </>
  );
};

export default CarritoContainer;
