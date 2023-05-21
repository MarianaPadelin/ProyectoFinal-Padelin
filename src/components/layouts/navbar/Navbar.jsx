import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "./CartWidget.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export const Navegacion = () => {
  return (
    <Navbar expand="lg" style={{ display: "flex" }}>
      <Container style={{ display: "flex" }}>
        <Navbar.Brand href="#home">
          <img
            src="src/Logo.jpeg"
            width="60"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home">MGGM</Navbar.Brand>

        <Nav.Link style={{ paddingInline: "1vw" }} href="#home">
          Home
        </Nav.Link>
        <NavDropdown
          style={{ paddingInline: "1vw" }}
          menuVariant="dark"
          title="Productos"
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item>Tazas</NavDropdown.Item>
          <NavDropdown.Item>Mates</NavDropdown.Item>
          <NavDropdown.Item>Platos</NavDropdown.Item>
          <NavDropdown.Item>Macetas</NavDropdown.Item>
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

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar producto"
            placeholderTextColor="black"
            className="me-2"
            aria-label="Buscar"
            style={{ backgroundColor: "lightcoral", paddingInline: "1vw" }}
          />
          <Button variant="outline-dark">Search</Button>
        </Form>
        <CartWidget />
      </Container>
    </Navbar>
  );
};



