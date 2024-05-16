import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import PriceWithOffer from "./PriceWithOffer";

const ItemList = ({ products }) => {
  const { language } = useLang();

  //irder on sale first
  const compareProducts = (a, b) => {
    if (a.onSale && !b.onSale) return -1;
    if (!a.onSale && b.onSale) return 1;
    return 0;
  };
  products.sort(compareProducts);

  return (
    <>
      {products.map(({ id, name, price, onSale }) => (
        <Link
          key={id}
          to={`/detail/${id}`}
          className="max-w-xs flex flex-col items-center"
        >
          <img
            src={`../../public/img/${name}.jpeg`}
            alt={language[name]}
            className="rounded"
          />
          <h3 className="font-semibold">{language[name]}</h3>
          {onSale ? (
            <div className="flex flex-col items-center gap-1">
              <PriceWithOffer price={price} />
            </div>
          ) : (
            <>
              <p className="font-semibold">${price.toFixed(2)}</p>
              <div className="invisible bg-red-700 p-1 text-white">30%</div>
            </>
          )}
        </Link>
      ))}
    </>
  );
};
export default ItemList;
