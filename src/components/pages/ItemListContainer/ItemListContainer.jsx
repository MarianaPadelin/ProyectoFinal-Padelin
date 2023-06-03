import { ItemListPresentacional } from "./ItemListPresentacional";

export const ItemListContainer = () => {
  let greeting = "¡Bienvenidos al sitio!";

  return (
    <ItemListPresentacional greeting={greeting}/>
  );
};
