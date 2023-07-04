import { useFormik } from "formik";
import Checkout from "./Checkout";
import * as Yup from "yup";

const CheckoutContainer = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "123",
      email: "",
      telefono: "",
    },
    //data son los initialValues con la info ya completada
    onSubmit: (data) => {
      console.log(data);
    },
    validateOnChange: false,
    validateOnBlur: false,
    //validationSchema es de formik, ahi adentro uso yup

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Campo requerido")
        .min(5, "Debe tener al menos 5 caracteres"),
      email: Yup.string()
        .required("Campo requerido")
        .email("Debe ingresar una dirección de email"),
      telefono: Yup.string().required("Campo requerido"),
    }),
  });
    console.log(errors)
  return (
    <Checkout
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default CheckoutContainer;
