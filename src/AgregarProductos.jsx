import { Button } from "react-bootstrap"
import { addDoc, collection } from "firebase/firestore"
import { database } from "./firebaseConfig"

export const AgregarProductos = () => {

    const rellenar = () => {
        let products
        //en products poner un formulario con los campos a rellenar
        let coleccion = collection(database,"products")
        products.forEach((elemento) => {
            addDoc(coleccion, elemento)

        })
        //const actualizar
        //const eliminar
    }
  return (
    <div>
        <Button className="botonComprar" onClick={rellenar}>+</Button>
    </div>
  )
}
