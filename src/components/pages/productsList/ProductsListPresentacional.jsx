import ProductCard from "../../common/ProductCard/ProductCard";
import "./ProductsList.css";


const ProductsListPresentacional = ({ items }) => {
  return (
    <>
    <br></br>
      <div className="cards-container">
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </>
  );
};

export default ProductsListPresentacional;

