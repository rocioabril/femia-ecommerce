import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useLang } from "../context/LangContext"; 
import { useCart } from "../context/CartContext";

function ItemDetail({ product }) {
  const { language } = useLang();

  const { cart, addProduct } = useCart();
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  console.log("cart", cart)
  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
    addProduct({ ...product, quantity: quantityToAdd });
  };

  return (
    <div className="flex gap-8 p-12 max-w-4xl">
      <img
        className="max-w-xs rounded"
        src={`../../public/img/${product.name}.jpeg`}
        alt={product.name}
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-normal">{language[product.name]}</h1>
          <p className="font-bold text-xl">${product.price}</p>
          <p className="text-gray-400 py-3 text-base">{language[`${product.name}-description`]}</p>
        </div>
        {quantity === 0 ? (
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        ) : (
          <>
            <div>{language["añadiste"]} {quantity} {language["items"]}.</div>
            <button
              className="bg-amber-200 w-fit p-4 rounded-2xl font-semibold hover:bg-amber-300 ease-in-out"
              onClick={() => navigate("/cart")}
            >
              {language[`terminar_compra`]}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
