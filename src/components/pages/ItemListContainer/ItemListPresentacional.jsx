import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

export const ItemListPresentacional = ({greeting}) => {
  return (
    <div>
      <Container
        className="Container fluid"
        style={{
          backgroundColor: "CadetBlue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Image
          src="src\Logo.jpeg"
          style={{ opacity: "70%", width: "20%" }}
          className="Imagen"
          roundedCircle
        />

        <h1>{greeting}</h1>

        <img
          src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1684851787/pez4jlmuc1evdofiprqx.jpg"
        ></img>
      </Container>
    </div>
  );
};
