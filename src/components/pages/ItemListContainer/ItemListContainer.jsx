import { ItemListPresentacional } from "./ItemListPresentacional";
import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  let greeting = "¡Bienvenidos al sitio!";
  const [items, setItems] = useState([])
  const { category } = useParams();
  const { linea } = useParams();
 
  //falta el contador
  useEffect(()=> {
      let productosPorCategoria = products.filter((producto)=>producto.category === category)
      const tarea = new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve(category ? productosPorCategoria : products);
          //no anda el false
          reject("algo salio mal")}, 1000)
          
      });

      tarea
        .then((res) => {
          setItems(res)
        })
        .catch((err) => {
          setItems(err)
        });

    }, [category])

useEffect(() => {
      let productosPorLinea = products.filter(
        (producto) => producto.linea === linea
      );
      const tarea = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(linea ? productosPorLinea : products);
          //no anda el false
          reject("algo salio mal");
        }, 1000);
      });

      tarea
        .then((res) => {
          setItems(res);
        })
        .catch((err) => {
          setItems(err);
        });
    }, [linea]);

  return (
    <ItemListPresentacional greeting={greeting} items={items} />
  );
};