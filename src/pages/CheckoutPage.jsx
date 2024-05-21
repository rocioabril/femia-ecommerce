import { useState, useEffect } from "react";
import { useLang } from "../contexts/LangContext";
import { useCart } from "../contexts/CartContext";
import { collection, doc, getDoc, addDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import imgProducts from "../assets/productos-2.jpg";
import { db } from "../firebase-config";
import { useProducts } from "../contexts/ProductsContext";

const CheckoutPage = () => {
  const { language } = useLang();
  const { cart, totalPriceWithOffers, clearCart } = useCart();
  const { fetchProducts } = useProducts();
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
      items: cart
        .filter(({ checked }) => checked)
        .map((item) => ({
          id: item.id,
          quantity: item.quantity,
          price: item.discount
            ? ((item.price * (100 - item.discount)) / 100) * item.quantity
            : (item.price) * item.quantity
        })),
      date: new Date().toISOString(),
      total: totalPriceWithOffers,
    };

    // add order
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => navigate(`/order/${id}`));
    console.log("Form Data order:", order);

    // decrease stocks
    order.items.forEach(async ({ id, quantity }) => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      await updateDoc(docRef, { stock: docSnap.data().stock - quantity });
    });

    fetchProducts();
    clearCart();
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
      <img
        src={imgProducts}
        alt="imagen promocional de productos"
        className="w-6/12"
      />

      <form
        className="flex flex-col flex-1 items-center justify-center p-8 gap-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center gap-8 w-full max-w-md">
          {formFields.map((field) => (
            <div key={field.name} className="flex flex-col gap-1">
              <label htmlFor={field.name}>{language[field.name]}</label>
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
          className="bg-amber-200 p-4 px-10 rounded-2xl font-semibold hover:bg-amber-300 ease-in-out"
        >
          {language["enviar"]}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
