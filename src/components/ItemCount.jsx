import { useState } from "react";
import { useLang } from "../contexts/LangContext";
import QuantitySelector from "./QuantitySelector";

function ItemCount({ limitMax, initial, onAdd }) {
  const [quantity, setQuantity] = useState(initial);
  const { language } = useLang();

  const increment = () => {
    if (quantity < limitMax) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity <= limitMax && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-fit">
      {limitMax < 1 ? (
        <p className="text-gray-400">No stock</p>
      ) : (
        <>
          <QuantitySelector
            quantity={quantity}
            onIncrement={increment}
            onDecrement={decrement}
          />
          <button
            className="bg-amber-200 p-4 rounded-2xl font-semibold hover:bg-amber-300 ease-in-out"
            onClick={() => onAdd(quantity)}
            disabled={!limitMax}
          >
            {language["añadir_al_carrito"]}
          </button>
        </>
      )}
    </div>
  );
}

export default ItemCount;
