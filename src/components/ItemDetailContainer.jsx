import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { useProducts } from "../context/ProductsContext"
import { useLang } from "../context/LangContext"; 



//Filtar por ID qué producto mostrar y se lo pasa a ItemDetail por props
function ItemDetailContainer() {
  const { idProduct } = useParams();
  const { products, isLoading } = useProducts();
  const { language } = useLang();

  const product = products.find(product => product.id === idProduct);

  if (isLoading) return <Loader />;

  if (!product) return <h2  className="flex flex-1 items-center">{language["producto_no_encontrado"]}</h2>;

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
