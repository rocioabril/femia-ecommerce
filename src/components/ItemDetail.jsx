import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useLang } from "../contexts/LangContext";
import { useCart } from "../contexts/CartContext";
import PriceWithOffer from "./PriceWithOffer";

function ItemDetail({ product }) {
  const { language } = useLang();
  const { getProductQuantityInCart, addProduct } = useCart();
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const quantityInCart = getProductQuantityInCart(product.id);

  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
    addProduct({ ...product, quantity: quantityToAdd });
  };

  return (
    <div className="flex flex-col gap-8 p-12 max-w-4xl md:flex-row">
      <img
        className="max-w-xs rounded h-fit"
        src={`/img/${product.name}.jpeg`}
        alt={product.name}
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-normal">{language[product.name]}</h1>
          {product.discount ? (
            <div className="flex flex-col gap-1">
              <PriceWithOffer
                price={product.price}
                discount={product.discount}
              />
            </div>
          ) : (
            <>
              <p className="font-semibold">${product.price.toFixed(2)}</p>
              {/*<div className="invisible bg-red-700 p-1 text-white">30%</div>*/}
            </>
          )}

          <p className="text-gray-400 py-3 text-base">
            {language[`${product.name}-description`]}
          </p>
        </div>
        {quantity === 0 ? (
          <ItemCount
            initial={1}
            limitMax={product.stock - quantityInCart}
            onAdd={onAdd}
          />
        ) : (
          <>
            <div>
              {language["añadiste"]} {quantity} {language["items"]}.
            </div>
            <button
              className="bg-amber-200 w-fit p-4 rounded-2xl font-semibold hover:bg-amber-300 ease-in-out"
              onClick={() => navigate("/cart")}
            >
              {language[`ir_al_carrito`]}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
