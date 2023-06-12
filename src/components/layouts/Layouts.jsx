import { Outlet } from "react-router-dom"
import { Navegacion } from "./navbar/Navbar"
import Footer from "./footer/Footer"

const Layouts = () => {
  return (
    <>
    <Navegacion />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layouts