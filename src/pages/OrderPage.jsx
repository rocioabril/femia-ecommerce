import { useEffect, useState } from "react";
import icon from "../assets/order-icon.jpg";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLang } from "../contexts/LangContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

function OrderPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { language } = useLang();
  const [isValidating, setIsValidating] = useState(true);
  const [validationError, setValidationError] = useState(false);

  useEffect(() => {
    const validateOrder = async () => {
      const docRef = doc(db, "orders", orderId);
      try {
        const docSnap = await getDoc(docRef);
        if (!docSnap.data()) {
          throw new Error();
        }
      } catch (err) {
        setValidationError(true);
      } finally {
        setIsValidating(false);
      }
    };

    validateOrder();
  }, [orderId]);

  if (isValidating) return null;

  if (validationError) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center gap-1">
        <div className="w-152"></div>
        <h3 className="font-bold">{language["order_error_title"]}</h3>
        <p className="italic">{language["order_error_subtitle"]}</p>
        <button
          className="bg-amber-200 w-fit p-4 rounded-2xl font-semibold hover:bg-amber-300 ease-in-out"
          onClick={() => navigate("/")}
        >
          {language["volver_tienda"]}
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-1">
      <img src={icon} alt="" width={200} />
      <h3 className="font-bold">{language["gracias_compra"]}</h3>
      <div className="flex items-center justify-center gap-1">
        <p>{language["referencia_orden"]}</p>
        <p className="bg-amber-300 italic">{orderId}</p>
      </div>
      <button
        className="bg-amber-200 w-fit p-4 rounded-2xl font-semibold hover:bg-amber-300 ease-in-out mt-4"
        onClick={() => navigate("/")}
      >
        {language["volver_tienda"]}
      </button>
    </div>
  );
}

export default OrderPage;
