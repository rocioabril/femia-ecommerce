import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [quantity, setQuantity] = useState(initial);

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
    <div className="flex flex-col gap-4 w-fit items-center">
      <div className="flex gap-8 shadow-md shadow-gray-150 py-2 px-6 border border-gray-150 rounded-2xl w-full justify-center text-lg">
        <button onClick={decrement}>-</button>
        <div>{quantity}</div>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button
          className="bg-amber-200 p-4 rounded-2xl font-semibold hover:bg-amber-300 ease-in-out"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
