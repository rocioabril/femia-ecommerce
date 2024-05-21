import { createContext, useState, useContext, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const ProductsContext = createContext();

export function useProducts() {
  return useContext(ProductsContext);
}

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        const offersCollection = collection(db, "offers");

        const [productsSnapshot, offersSnapshot] = await Promise.all([
          getDocs(productsCollection),
          getDocs(offersCollection),
        ]);

        const allOffers = offersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const allProducts = productsSnapshot.docs.map((doc) => {
          const offer = getProductOffer(allOffers, doc.id);
          return {
            id: doc.id,
            ...doc.data(),
            ...(offer && { discount: offer.discount }),
          };
        });

        setProducts(allProducts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductOffer = (allOffers, id) =>
    allOffers.find(({ product_ids }) =>
      product_ids.some((product_id) => product_id === id)
    );

  return (
    <ProductsContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
}
