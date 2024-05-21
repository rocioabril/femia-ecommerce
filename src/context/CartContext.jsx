import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceWithOffers, setTotalPriceWithOffer] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    calculateTotalPrice();
    calculateTotalPriceWithOffers();
  }, [cart]);

  const addProduct = (product) => {
    const foundProduct = cart.find((prod) => prod.id === product.id);

    if (foundProduct) {
      updateProductQuantity(
        foundProduct.id,
        foundProduct.quantity + product.quantity
      );
    } else {
      setCart([...cart, product]);
    }
  };

  const removeProduct = (product) => {
    const newCart = cart.filter(({ id }) => id !== product.id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateProductQuantity = (id, quantity) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });

    setCart(newCart);
  };

  const calculateTotalPrice = () => {
    const newTotalPrice = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  };

  const calculateTotalPriceWithOffers = () => {
    const newTotalPrice = cart.reduce(
      (total, product) =>
        total +
        (product.discount
          ? (product.price * (100 - product.discount)) / 100
          : product.price) *
          product.quantity,
      0
    );
    setTotalPriceWithOffer(newTotalPrice);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        totalPriceWithOffers,
        selectedProducts,
        setSelectedProducts,
        addProduct,
        removeProduct,
        clearCart,
        updateProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
