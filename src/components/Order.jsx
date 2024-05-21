import icon from "../assets/order-icon.jpg";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";

function Order() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { language } = useLang();

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-1">
      <img src={icon} alt="" width={200} />
      <h3 className="font-bold">{language["gracias_compra"]}</h3>
      <p className="flex items-center justify-center gap-1">
        <div>{language["referencia_orden"]}</div>
        <div className="bg-amber-300 italic">{orderId}</div>
      </p>
      <button
        className="bg-amber-200 w-fit p-4 rounded-2xl font-semibold hover:bg-amber-300 ease-in-out mt-4"
        onClick={() => navigate("/")}
      >
        {language["volver_tienda"]}
      </button>
    </div>
  );
}

export default Order;
