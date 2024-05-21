import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import Loader from "../components/Loader";
import { useProducts } from "../contexts/ProductsContext";

//renderiza la lista de productos por categorías
function ItemListPage() {
  const { products, isLoading } = useProducts();
  const { categoryId } = useParams();

  const filteredProducts = categoryId
    ? products.filter((product) => product.category === categoryId)
    : products;

  if (isLoading) return <Loader />;

  return (
    <div className="flex-1 flex justify-center items-center w-4/5 flex-wrap py-8 px-4 gap-4 md:gap-12 md:p-12">
      <ItemList products={filteredProducts} />
    </div>
  );
}

export default ItemListPage;
