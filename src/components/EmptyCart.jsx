import emptyCart from "../assets/empty-cart.png";
import { useNavigate } from "react-router-dom";
import { useLang } from "../contexts/LangContext";


function EmptyCart() {
  const navigate = useNavigate();
  const { language } = useLang();


  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-1">
			<div className="w-152"></div>
      <img src={emptyCart} alt="carrito vacío" className="w-52" />
      <h3 className="font-bold">{language["empty_cart_msg"]}</h3>
      <p className="italic">{language["empty_cart_msg_2"]}</p>
      <button
        className="bg-amber-200 w-fit p-4 rounded-2xl font-semibold hover:bg-amber-300 ease-in-out"
        onClick={() => navigate("/")}
      >
        {language["comienza_a_comprar"]}
      </button>
    </div>
  );
}

export default EmptyCart;
