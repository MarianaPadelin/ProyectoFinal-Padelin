import { createContext, useState } from "react";

//creo el contexto
export const CartContext = createContext();

//creo un componente que va a ser el proveedor del contexto
export const CartContextProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );



const agregarProductos =(nuevo)=> {
    let existe = elementosRepetidos(nuevo.id)
    if(existe){
        let nuevoArray = cart.map(producto=>{
            if (producto.id === nuevo.id){
                return {
                    ...producto,
                    quantity: nuevo.quantity
                }

            }else {
                return producto
            }
        })
        setCart(nuevoArray)
        localStorage.setItem("cart", JSON.stringify(nuevoArray));
    }else {
        setCart([...cart, nuevo])
         localStorage.setItem("cart", JSON.stringify([...cart, nuevo]));

    }
}

  //si no hay elementos iguales en el carrito los agrego, si ya están solo aumento su cantidad
  const elementosRepetidos = (id) => {
    let existeElemento = cart.some((elemento) => elemento.id === id);
    return existeElemento;
  };

  const limpiarCarrito = () => {
    setCart([])
    localStorage.removeItem("cart")}

  const eliminarElemento = (id) => {
    let arraySinElemento = cart.filter((producto) => producto.id !== id)
    setCart(arraySinElemento)
    localStorage.setItem("cart", JSON.stringify(arraySinElemento));
  }

  const cantidad = (id) => {
    let producto = cart.find(elemento => elemento.id === id)
    return producto?.quantity
    //si no es undefined, pide la cantidad
  }


  const totalElementos = () => {
    let total = cart.reduce((acc, elemento)=> {
        return acc + elemento.quantity
    }, 0)
    return total
  }

  const totalPrecio = () => {
    let total = cart.reduce((acc, elemento) => {
    return acc + (elemento.price* elemento.quantity)
  }, 0);
  return total;}

  const totalPeso = () => {
    let total = cart.reduce((acc,elemento) => {
        return acc + (elemento.peso * elemento.quantity)
    }, 0)
    return total}
  //acá voy a poner todos los elementos que quiera usar en otro lado de la pagina
  let data = {
    cart,
    agregarProductos,
    limpiarCarrito,
    eliminarElemento,
    cantidad,
    totalElementos,
    totalPrecio,
    totalPeso
  };

  return (
    //pongo a disposición el contexto con children
    <CartContext.Provider value={data}> {children}</CartContext.Provider>
  );
}