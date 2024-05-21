import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";



function CartWidget() {
  const navigate = useNavigate();
  const { cart } = useCart();

  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
  return (
    <button className="relative mr-6 hover:scale-110 ease-in-out" onClick={() => navigate("/cart")}>
      <FiShoppingCart size="34px" />
      {totalQuantity > 0 && (
        <span className="inline-block bg-orange-500 text-white text-xs rounded-full px-2 py-1 pt-0.5 absolute top-1 right-0 transform translate-x-1/2 -translate-y-1/2">
          <div>{totalQuantity}</div>
        </span>
      )}
    </button>
  );
}

export default CartWidget;
