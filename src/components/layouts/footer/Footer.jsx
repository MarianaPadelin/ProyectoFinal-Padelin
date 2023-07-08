import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

const Footer = () => {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "CadetBlue",
          display: "flex",
          bottom: "0",
          width:"94%",
          marginTop: "auto"
        }}
      >
        <Navbar.Brand href="#home">
          <Image
            alt="logo"
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1685833673/productos/Logo_ve995f.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={{ marginLeft: 20 }}
            roundedCircle
          />{" "}
          MGGM
        </Navbar.Brand>
        <h4>Mariana Padelin - Comisión 43240</h4>
      </Navbar>
    </div>
  );
};

export default Footer;
