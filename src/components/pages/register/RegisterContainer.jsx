import { useNavigate } from "react-router-dom";
import Register from "./Register"
import { useFormik } from "formik";
import * as Yup from "yup";


const RegisterContainer = () => {

     const navigate = useNavigate();

     const { handleSubmit, handleChange, errors } = useFormik({
       initialValues: {
         nombre: "",
         email: "",
         contraseña: "",
       },
       onSubmit: async (data) => {

        //ACÁ PONER LA LOGICA DEL LOGIN 

        
         // let res = await ingresar(data)
         // console.log(res)
         //serUser(res
         console.log(data);
         navigate("/");
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
  return (
    <Register
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
}

export default RegisterContainer