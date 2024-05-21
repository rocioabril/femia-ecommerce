import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { LangProvider } from "./contexts/LangContext";
import { CartProvider } from "./contexts/CartContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import AppRoutes from "./Routes";
import "./styles.css";

function App() {
  return (
    <LangProvider>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Layout>
              <AppRoutes />
            </Layout>
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </LangProvider>
  );
}

export default App;
