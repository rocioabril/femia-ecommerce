import { useState, useEffect } from "react";
import { useLang } from "../context/LangContext";
import { useCart } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import imgProducts from "../assets/productos-2.jpg";

const Checkout = () => {
  const { language } = useLang();
  const { selectedProducts, totalPriceWithOffers } = useCart();
  const navigate = useNavigate();

  const [userData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const validationErrors = validate();
      setErrors(validationErrors);
    }
  }, [language]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...userData,
      [name]: value,
    });
  };

  const postOrder = () => {
    const order = {
      buyer: {
        name: userData.name,
        phone: userData.phone,
        email: userData.email,
      },
      items: selectedProducts.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      date: new Date().toISOString(),
      total: totalPriceWithOffers,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => navigate(`/order/${id}`));
    console.log("Form Data order:", order);
  };

  const validate = () => {
    const newErrors = {};
    if (!userData.name) newErrors.name = language["campo_obligatorio"];
    if (!userData.phone) newErrors.phone = language["campo_obligatorio"];
    if (!userData.email) {
      newErrors.email = language["campo_obligatorio"];
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = language["invalid_email"];
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      postOrder();
    }
  };

  const formFields = [
    { name: "name", type: "text" },
    { name: "phone", type: "tel" },
    { name: "email", type: "email" },
  ];

  return (
    <div className="flex flex-1 items-center justify-center">
      <img src={imgProducts} alt="imagen promocional de productos" className="w-6/12"/>

      <form
        className="flex flex-col flex-1 items-center justify-center p-8 gap-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center gap-8 w-full max-w-md">
          {formFields.map((field) => (
            <div key={field.name} className="flex flex-col gap-1">
              <label htmlFor={field.name}>
                {language[field.name]}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={userData[field.name]}
                className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                  errors[field.name]
                    ? "ring-red-500 focus:ring-red-500"
                    : "ring-gray-300 focus:ring-gray-300"
                }`}
                onChange={handleChange}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm">{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-amber-200 p-4 rounded-2xl font-semibold hover:bg-amber-300 ease-in-out self-end"
        >
          {language["enviar"]}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
