import Image from "react-bootstrap/Image";
import ProductCard from "../../common/ProductCard/ProductCard";
import "./ItemList.css";
import { AnimateKeyframes } from "react-simple-animate";

export const ItemList = ({ greeting, items }) => {
  return (
    <div>
      <AnimateKeyframes
        play
        duration={5}
        keyframes={["opacity: 0", "opacity: 1"]}
      >
        <div className="greeting">
          <Image
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1687124707/productos/WhatsApp_Image_2023-06-17_at_15.02.16_gch9zx.jpg"
            style={{ opacity: "70%", width: "20%" }}
            className="Imagen"
            roundedCircle
          />

          <h1>{greeting}</h1>

          <Image
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1684851787/pez4jlmuc1evdofiprqx.jpg"
            className="Imagen"
          />
        </div>
      </AnimateKeyframes>

      <br></br>
      <div className="cards-container">
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};
