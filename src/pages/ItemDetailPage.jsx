import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import Loader from "../components/Loader";
import { useProducts } from "../contexts/ProductsContext"
import { useLang } from "../contexts/LangContext";

//Filtar por ID qué producto mostrar y se lo pasa a ItemDetail por props
function ItemDetailPage() {
  const { productId } = useParams();
  const { products, isLoading } = useProducts();
  const { language } = useLang();

  const product = products.find(product => product.id === productId);

  if (isLoading) return <Loader />;

  if (!product) return <h2  className="flex flex-1 items-center">{language["producto_no_encontrado"]}</h2>;

  return <ItemDetail product={product} />;
}

export default ItemDetailPage;
