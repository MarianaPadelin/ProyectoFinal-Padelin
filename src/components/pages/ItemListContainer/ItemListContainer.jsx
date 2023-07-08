import { ItemListPresentacional } from "./ItemListPresentacional";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../../../firebaseConfig";
import {collection, getDocs, query, where} from "firebase/firestore"
import Loader from "../../common/Loader";


export const ItemListContainer = () => {
  let greeting = "¡Bienvenidos al sitio!";
  const [items, setItems] = useState([]);
  const { nombreCategoria } = useParams();
  const { nombreLinea } = useParams();

  useEffect(() => {
    let coleccion = collection(database, "products");
    let busqueda;
    if (nombreCategoria) {
      busqueda = query(coleccion, where("category", "==", nombreCategoria));
    } else {
      busqueda = coleccion;
    }

    getDocs(busqueda)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return { id: elemento.id, ...elemento.data() };
        });
        setItems(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nombreCategoria]);

   useEffect(() => {
     let linea = collection(database, "products");
     let busqueda;
     if (nombreLinea) {
       busqueda = query(linea, where("linea", "==", nombreLinea));
     } else {
       busqueda = linea;
     }

     getDocs(busqueda)
       .then((res) => {
         let products = res.docs.map((elemento) => {
           return { id: elemento.id, ...elemento.data() };
         });
         setItems(products);
       })
       .catch((err) => {
         console.log(err);
       });
   }, [nombreLinea]);

  return (
    <div>
      {items.length > 0 ? (
        <div>
          <ItemListPresentacional greeting={greeting} items={items} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};