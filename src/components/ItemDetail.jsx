import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
  };

  return (
    <div className="flex gap-8 p-12 max-w-4xl">
      <img
        className="max-w-xs rounded"
        src={`../../public/img/${product.image}.jpeg`}
        alt={product.name}
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-normal">{product.name}</h1>
          <p className="font-bold text-lg">{product.price}</p>
          <p className="text-gray-400 py-3">{product.description}</p>
        </div>
        {quantity === 0 ? (
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        ) : (
          <>
            <div className="mb-10">Agregaste {quantity} items.</div>
            <button
              className="bg-amber-200 p-4 rounded-2xl font-semibold hover:bg-amber-300 ease-in-out"
              onClick={() => navigate("/cart")}
            >
              Terminar mi compra
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
