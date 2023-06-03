import { useEffect } from "react";
import { useState } from "react";
import ProductsListPresentacional from "./ProductsListPresentacional";
import { products } from "../../../productsMock";

const ProductsListContainer = () => {
const [items, setItems] = useState([])
    console.log(items)
    useEffect(()=> {
      const tarea = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(products);
        reject("algo salio mal")}, 1000)
        
    });

    /*con async await
    const getData = async () => {
      try {let res = await tarea
      setFrase(res)}
      catch {
        console.log("error")
      }
      
    }
    getData()
    */

    /*con then y catch, vamos a usar este en la clase*/
    tarea
      .then((res) => {
        setItems(res)
      })
      .catch((err) => {
        setItems(err)
      });

  }, [])


  return <ProductsListPresentacional items={items} />;
    
  
};

export default ProductsListContainer;
