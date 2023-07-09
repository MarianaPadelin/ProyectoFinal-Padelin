import { useFormik } from "formik";
import SearchBar from "./SearchBar";
// import { useNavigate } from "react-router-dom";



const SearchBarContainer = () => {
      const { handleSubmit, handleChange } = useFormik({
        initialValues: {
          searchbar: "",
        },
        isValidating: false, 
        isSubmitting: true, 
        onSubmit: (datosEnviados) => {
          console.log(datosEnviados);
          console.log("hola")
          // useNavigate(/)
        },
      });

  return <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />;
};

export default SearchBarContainer;
