import { Link } from "react-router-dom";
//import LangContext from "../langContext";
//import { useContext } from "react";
import { useLang } from "../context/LangContext"; 

const ItemList = ({ products }) => {

  const { language } = useLang();
  //const { language } = useContext(LangContext);

  return (
    <>
      {products.map(({ id, name, price }) => (
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
          <h3>{language[name]}</h3>
          <p>${price}</p>
        </Link>
      ))}
    </>
  );
};
export default ItemList;
