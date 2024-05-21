import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceWithOffers, setTotalPriceWithOffer] = useState(0);

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
      setCart([...cart, { ...product, checked: true }]);
    }
  };

  const removeProduct = (product) => {
    const newCart = cart.filter(({ id }) => id !== product.id);
    setCart(newCart);
  };

  const clearCart = () => {
    const newCart = cart.filter(({ checked }) => !checked);
    setCart(newCart);
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

  const updateProductChecked = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    setCart(newCart);
  };

  const getProductQuantityInCart = (id) => {
    const foundProduct = cart.find((prod) => prod.id === id);
    if (foundProduct) {
      return foundProduct.quantity;
    }
    return 0;
  };

  const calculateTotalPrice = () => {
    const newTotalPrice = cart
      .filter(({ checked }) => checked)
      .reduce((total, product) => total + product.price * product.quantity, 0);
    setTotalPrice(newTotalPrice);
  };

  const calculateTotalPriceWithOffers = () => {
    const newTotalPrice = cart
      .filter(({ checked }) => checked)
      .reduce(
        (total, product) =>
          total +
          (product.discount
            ? ((product.price * (100 - product.discount)) / 100)
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
        addProduct,
        removeProduct,
        clearCart,
        getProductQuantityInCart,
        updateProductQuantity,
        updateProductChecked,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
