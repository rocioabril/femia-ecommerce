import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { useProducts } from "../context/ProductsContext"

//renderiza la lista de productos por categorías
function ItemListContainer() {
  const { products, isLoading } = useProducts();
  const { idCategory } = useParams();

  const filteredProducts = idCategory 
  ? products.filter(product => product.category === idCategory) 
  : products;

  if (isLoading) return <Loader />;

  return (
    <div className="flex-1 flex justify-center items-center w-4/5 flex-wrap py-8 px-4 gap-4 md:gap-12 md:p-12">
      <ItemList products={filteredProducts} />
    </div>
  );
}

export default ItemListContainer;
