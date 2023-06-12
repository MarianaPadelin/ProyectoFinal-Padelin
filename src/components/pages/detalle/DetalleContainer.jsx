import { useState, useEffect } from "react"
import {DetallePresentacional} from "./DetallePresentacional"
import {useParams} from "react-router-dom"
import {products} from "../../../productsMock"



const DetalleContainer = () => {
      const[seleccionado, setSeleccionado] = useState({})

      const { id } = useParams();

      useEffect(() => {
        let productoEncontrado = products.find((product) => product.id === +id);

        const getProduct = new Promise((res) => {
          res(productoEncontrado);
        });

        getProduct
          .then((res) => setSeleccionado(res))
          .catch((err) => console.log(err));
      }, [id]);

        return (
          <DetallePresentacional seleccionado={seleccionado}/>
        )
      }

export default DetalleContainer