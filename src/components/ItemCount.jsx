import { useState } from "react";
import { useLang } from "../context/LangContext";
import QuantitySelector from "./QuantitySelector";

function ItemCount({ stock, initial, onAdd }) {
  const [quantity, setQuantity] = useState(initial);
  const { language } = useLang();

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity <= stock && quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-fit">
      <QuantitySelector
        quantity={quantity}
        onIncrement={increment}
        onDecrement={decrement}
      />
      <button
        className="bg-amber-200 p-4 rounded-2xl font-semibold hover:bg-amber-300 ease-in-out"
        onClick={() => onAdd(quantity)}
        disabled={!stock}
      >
        {language["añadir_al_carrito"]}
      </button>
    </div>
  );
}

export default ItemCount;
