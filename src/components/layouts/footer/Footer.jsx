import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "CadetBlue",
        }}
      >
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src="src\Logo.jpeg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          MGGM
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Footer;
