import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "./CartWidget.jsx";

import Image from "react-bootstrap/Image";
import "./Navbar.css";
import { Link } from "react-router-dom";
import IconoLogin from "./IconoLogin.jsx";
import SearchBar from "./search/SearchBar.jsx";


export const Navegacion = () => {
  return (
    <Navbar expand="lg" style={{ display: "flex" }}>
      <Container style={{ display: "flex" }}>
        <Link to="/" className="link" title="Home">
          <Navbar.Brand>
            <Image
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1687124707/productos/WhatsApp_Image_2023-06-17_at_15.02.16_gch9zx.jpg"
              width="60"
              className="d-inline-block align-top"
              alt="Logo"
              roundedCircle
            />
          </Navbar.Brand>
          <Navbar.Brand id="titulo">MGGM</Navbar.Brand>
        </Link>

        <NavDropdown
          style={{ paddingInline: "1vw" }}
          menuVariant="dark"
          title="Productos"
          id="basic-nav-dropdown"
        >
          <Link to="/" className="dropdown-item" role="button" tabIndex="0">
            Todos
          </Link>
          <Link to="Categorias/Tazas" className="dropdown-item">
            Tazas
          </Link>
          <Link to="Categorias/Mates" className="dropdown-item">
            Mates
          </Link>
          <Link to="Categorias/Platos" className="dropdown-item">
            Platos
          </Link>
          <Link to="Categorias/Bowls" className="dropdown-item">
            Bowls y compoteras
          </Link>
          <Link to="Categorias/Jaboneras" className="dropdown-item">
            Jaboneras
          </Link>
          <Link to="Categorias/Chopp" className="dropdown-item">
            Chopps
          </Link>
        </NavDropdown>
        <NavDropdown
          style={{ paddingInline: "1vw" }}
          menuVariant="dark"
          title="Líneas"
          id="basic-nav-dropdown"
        >
          <Link to="/" className="dropdown-item">
            Todas
          </Link>
          <Link to="Linea/Acuarela" className="dropdown-item">
            Acuarela
          </Link>
          <Link to="Linea/Sandía" className="dropdown-item">
            Sandía
          </Link>
          <Link to="Linea/Cítricos" className="dropdown-item">
            Cítricos
          </Link>
          <Link to="Linea/Rococó" className="dropdown-item">
            Rococó
          </Link>
          <Link to="Linea/Flores" className="dropdown-item">
            Flores
          </Link>
          <Link to="Linea/Gatitos" className="dropdown-item">
            Gatitos
          </Link>
          <Link to="Linea/Crackelado" className="dropdown-item">
            Crackelado
          </Link>
        </NavDropdown>
        <NavDropdown
          style={{ paddingInline: "1vw" }}
          menuVariant="dark"
          title="Explorá"
        >
          <NavDropdown.Item>Novedades</NavDropdown.Item>
          <NavDropdown.Item>Promociones</NavDropdown.Item>
          <NavDropdown.Item>Contactanos</NavDropdown.Item>
          <NavDropdown.Divider style={{ backgroundColor: "CadetBlue" }} />
          <NavDropdown.Item
            href="https://www.instagram.com/mggmceramica/"
            target="_blank"
          >
            Visitá nuestro instagram
          </NavDropdown.Item>
        </NavDropdown>

        <SearchBar />
        <IconoLogin />
        <CartWidget />
      
      </Container>
    </Navbar>
  );
};
