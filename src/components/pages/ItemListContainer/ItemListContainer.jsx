import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

export const ItemListContainer = () => {
  let greeting = "¡Bienvenidos a nuestro sitio!";

  return (
    <Container
      className="Container fluid"
      style={{
        backgroundColor: "CadetBlue",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src="src\Logo.jpeg"
        style={{ opacity: "70%", width: "20%"}}
        className="Imagen"
        roundedCircle
      />

      <h1>{greeting}</h1>

    </Container>
  );
};
