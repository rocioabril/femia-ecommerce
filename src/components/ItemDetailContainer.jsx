import { useEffect, useState } from "react";
import getData from "../data/getData";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

//Filtar por ID qué producto mostrar y se lo pasa a ItemDetail por props
function ItemDetailContainer() {
  const { idProduct } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData
      .then((response) => {
        const p = response.find(({ id }) => id === idProduct);
        setProduct(p);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [idProduct]);

  if (isLoading) return <Loader />;

  if (!product) return <h2  className="flex flex-1 items-center">Producto no encontrado</h2>;

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
