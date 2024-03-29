import { FiShoppingCart } from "react-icons/fi";

function CartWidget() {
  return (
    <button className="relative mr-6 hover:scale-110 ease-in-out">
      <FiShoppingCart size="34px" />
      <span className="inline-block bg-orange-500 text-white text-xs rounded-full px-2 py-1 absolute top-1 right-0 transform translate-x-1/2 -translate-y-1/2">
        1
      </span>
    </button>
  );
}

export default CartWidget;
