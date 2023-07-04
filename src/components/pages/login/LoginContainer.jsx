import { useFormik } from "formik"
import Login from "./Login"
import * as Yup from "yup"
// import {useContect, useState} from "react"
// import { database } from "../../../firebaseConfig"
// import {collection, addDoc} from "firebase/firestore"
const LoginContainer = () => {
    // const {cart, getTotalPrice} = useContext ({ CartContext })
    const { handleSubmit, handleChange, errors } = useFormik({
      initialValues: {
        usuario: "",
        contraseña: "",
      },
      onSubmit: (data) => {
        console.log(data);
        // let ordenDeCompra = {
        //     comprador: {data},
        //     items: {cart},
        //     total: 0
        // }
        // let orderCollection = collection(database, "orders")
        // addDoc(orderCollection, ordenDeCompra )
      },

      validateOnChange: false,
      validationSchema: Yup.object({
        usuario: Yup.string().min(5, "debe tener más de 5 caracteres"),
        contraseña: Yup.string()
          .required()
          .matches(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            "La contraseña debe tener entre 6 y 15 caracteres. Debe tener al menos una mayúscula, una minúscula, un número y un caracter especial."
          ),
      }),
    });

    // const { handleSubmit, handleChange, errors } = useFormik({
    //   initialValues: {
    //     usuario: "",
    //     contraseña: "",
    //   },
    //   onSubmit: (datosEnviados) => {
    //     console.log("El formulario se envió correctamente");
    //     console.log(datosEnviados);
    //   },
    //   validationSchema: Yup.object({
    //     usuario: Yup.string().min(5, "debe tener más de 5 caracteres"),
    //     contraseña: Yup.string()
    //       .required()
    //       .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, "La contraseña debe tener entre 6 y 15 caracteres. Debe tener al menos una mayúscula, una minúscula, un número y un caracter especial."),
    //   }),
    // });

  return (
    <Login handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
  )
}

export default LoginContainer