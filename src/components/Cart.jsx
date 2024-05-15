import "./cart.css";
import { useCart } from "../context/CartContext";
import { useLang } from "../context/LangContext";
import { BsTrash3 } from "react-icons/bs";
import QuantitySelector from "./QuantitySelector";

function Cart() {
  const { cart, updateProductQuantity, removeProduct } = useCart();

  console.log(cart);
  const { language } = useLang();


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
                <p className="font-bold">{product.stock}</p>

                <p className="text-gray-400 max-w-md">
                  {language[`${product.name}-description`].substring(0, 150)}{" "}
                  (...)
                </p>
                <QuantitySelector
                  quantity={product.quantity}
                  onIncrement={() =>
                    updateProductQuantity(product.id, product.quantity < product.stock ? product.quantity + 1 : product.quantity)
                  }
                  onDecrement={() =>
                    updateProductQuantity(product.id, product.quantity === 1 ? product.quantity : product.quantity - 1 )
                  }
                />
              </div>
              <p className="font-bold"> ${product.price * product.quantity}</p>
              <button className="ml-6">
                <BsTrash3 size={20} onClick={()=>{removeProduct(product)}} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
