import { ItemListContainer } from "../components/pages/ItemListContainer/ItemListContainer"
import CarritoContainer from "../components/pages/carrito/CarritoContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import DetalleContainer from "../components/pages/detalle/DetalleContainer";

export const rutasApp = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categorias",
    path: "/Categorias/:nombreCategoria",
    Element: ItemListContainer,
  },
  {
    id: "lineas",
    path: "/Linea/:nombreLinea",
    Element: ItemListContainer,
  },
  {
    id: "detalle",
    path: "/DetalleProducto/:id",
    Element: DetalleContainer,
  },
  {
    id: "carrito",
    path: "/Carrito",
    Element: CarritoContainer,
  },
  {
    id: "login",
    path: "/Checkout",
    Element: CheckoutContainer,
  },


];

