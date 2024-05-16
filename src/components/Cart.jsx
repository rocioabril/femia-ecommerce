import "./cart.css";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useLang } from "../context/LangContext";
import { BsTrash3 } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import QuantitySelector from "./QuantitySelector";
import PriceWithOffer from "./PriceWithOffer";
import EmptyCart from "./EmptyCart";

function Cart() {
  const { cart, updateProductQuantity, removeProduct } = useCart();
  const { language } = useLang();

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceWithOffer, setTotalPriceWithOffer] = useState(0);

  const calculateTotalPrice = () => {
    const newTotalPrice = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  };

  const calculateTotalPriceWithOffer = () => {
    const newTotalPrice = cart.reduce(
      (total, product) =>
        total +
        (product.onSale ? product.price * 0.7 : product.price) *
          product.quantity,
      0
    );
    setTotalPriceWithOffer(newTotalPrice);
  };

  useEffect(() => {
    calculateTotalPrice();
    calculateTotalPriceWithOffer();
  }, [cart]);

  console.log("cart", cart);

  if (cart.length === 0) {
    
    return <EmptyCart />;
  }
  return (
    <div>
      <ul className=" flex flex-col gap-4 p-4">
        {cart.map((product) => (
          <li
            key={product.id}
            className="flex items-center gap-4 px-16 cart_item_container"
          >
            <input type="checkbox" />
            
            <img
              src={`../../public/img/${product.name}.jpeg`}
              alt={product.name}
              className="cart_item_img"
            />
            <div className="flex items-start gap-8">
              <div>
                <p className="font-bold">{language[product.name]}</p>
                <p className="text-gray-400 max-w-md">
                  {language[`${product.name}-description`].substring(0, 150)}{" "}
                  (...)
                </p>
                <QuantitySelector
                  quantity={product.quantity}
                  onIncrement={() =>
                    updateProductQuantity(
                      product.id,
                      product.quantity < product.stock
                        ? product.quantity + 1
                        : product.quantity
                    )
                  }
                  onDecrement={() =>
                    updateProductQuantity(
                      product.id,
                      product.quantity === 1
                        ? product.quantity
                        : product.quantity - 1
                    )
                  }
                />
              </div>
              {product.onSale ? (
                <div className="flex flex-col-reverse gap-1">
                  <PriceWithOffer price={product.price * product.quantity} />
                </div>
              ) : (
                <>
                  <p className="font-semibold">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                  <div className="invisible bg-red-700 p-1 text-white">30%</div>
                </>
              )}
              <button className="ml-6">
                <BsTrash3
                  size={20}
                  onClick={() => {
                    removeProduct(product);
                  }}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-end gap-4 p-4">
        {(totalPrice === totalPriceWithOffer) ? (
          <p className="font-semibold">${totalPrice.toFixed(2)}</p>
        ) : (
          <div>
            <p className="text-gray-400 line-through">${totalPrice.toFixed(2)}</p>
            <div className="flex items-center text-red-700 font-semibold">
              <BsArrowDown /> 
              <p>${totalPriceWithOffer.toFixed(2)}</p>
            </div>
            
          </div>
        )}
        <button className="bg-amber-200 p-4 rounded-2xl font-semibold hover:bg-amber-300 ease-in-out">
          {language["comprar"]}
        </button>
      </div>
    </div>
  );
}

export default Cart;
