import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getData from "../data/getData";
import ItemList from "./ItemList";
import Loader from "./Loader";

//renderiza la lista de productos por categorías
function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idCategory } = useParams();

  useEffect(() => {
    getData
      .then((response) => {
        if (idCategory) {
          const productsByCategory = response.filter(
            ({ category }) => category === idCategory
          );
          setProducts(productsByCategory);
        } else {
          setProducts(response);
        }
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [idCategory]);

  if (isLoading) return <Loader />;
  
  return (
    <div className="flex-1 flex justify-center items-center w-4/5 flex-wrap gap-12 p-12">
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
