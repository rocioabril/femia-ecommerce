import { Link } from "react-router-dom";
import { useLang } from "../contexts/LangContext";
import { useProducts } from "../contexts/ProductsContext";
import PriceWithOffer from "./PriceWithOffer";

const ItemList = ({ products }) => {
  const { language } = useLang();

  //irder on sale first
  const compareProducts = (a, b) => {
    if (a.discount && !b.discount) return -1;
    if (!a.discount && b.discount) return 1;
    return 0;
  };

  const sortedProducts = products.toSorted(compareProducts);

  return (
    <>
      {sortedProducts.map(({ id, name, price, discount }) => (
        <Link
          key={id}
          to={`/detail/${id}`}
          className="max-w-xs flex flex-col items-center"
        >
          <img
            src={`/img/${name}.jpeg`}
            alt={language[name]}
            className="rounded h-fit w-28 md:w-64"
          />
          <h3 className="font-semibold">{language[name]}</h3>
          {discount ? (
            <div className="flex flex-col items-center gap-1">
              <PriceWithOffer price={price} discount={discount} />
            </div>
          ) : (
            <>
              <p className="font-semibold">${price.toFixed(2)}</p>
              <div className="invisible bg-red-700 p-1 text-white">30%</div>
              {/* TODO: remove this above */}
            </>
          )}
        </Link>
      ))}
    </>
  );
};
export default ItemList;
