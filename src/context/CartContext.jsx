import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

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

  return (
    <CartContext.Provider
      value={{
        cart,
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
