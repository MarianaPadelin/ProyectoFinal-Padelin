import { useFormik } from "formik";
import SearchBar from "./SearchBar";
// import { useNavigate } from "react-router-dom";



const SearchBarContainer = () => {
      const { handleSubmit, handleChange, errors } = useFormik({
      initialValues: {
        busqueda:"",
      },
      onSubmit: (datosEnviados) => {
        console.log("el formulario se envio");
        console.log(datosEnviados);
      // useNavigate(/)
      }
      })

  return <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} errors={errors}/>;
};

export default SearchBarContainer;
