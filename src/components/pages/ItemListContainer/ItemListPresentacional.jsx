import Image from "react-bootstrap/Image";
import ProductCard from "../../common/ProductCard/ProductCard";
import "./ItemList.css"


export const ItemListPresentacional = ({greeting, items}) => {
  return (
    <div>
      <div className="greeting" >
        <Image
          src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1685833673/productos/Logo_ve995f.jpg"
          style={{ opacity: "70%", width: "20%" }}
          className="Imagen"
          roundedCircle
        />

        <h1>{greeting}</h1>

        <Image src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1684851787/pez4jlmuc1evdofiprqx.jpg" className="Imagen" />
      </div>

      <br></br>
      <div className="cards-container">
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};
