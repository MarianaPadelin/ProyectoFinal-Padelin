import { ItemListContainer } from "../components/pages/ItemListContainer/ItemListContainer"
import CarritoContainer from "../components/pages/carrito/CarritoContainer";
import DetalleContainer from "../components/pages/detalle/DetalleContainer";
import Login from "../components/pages/login/Login";

const rutasApp = () => [
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
    path: "/Login",
    Element: Login,
  },
//   {
//     id: "firebase-auth",
//     path: "/firebase-auth",
//     element: FirebaseAuth
//   }
];

export default rutasApp