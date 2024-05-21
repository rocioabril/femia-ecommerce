import { Route, Routes } from "react-router-dom";
import ItemDetailPage from "./pages/ItemDetailPage";
import ItemListPage from "./pages/ItemListPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderPage from "./pages/OrderPage";

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<ItemListPage />} />
    <Route exact path="/category/:categoryId" element={<ItemListPage />} />
    <Route exact path="/detail/:productId" element={<ItemDetailPage />} />
    <Route exact path="/checkout" element={<CheckoutPage />} />
    <Route exact path="/cart" element={<CartPage />} />
    <Route exact path="/order/:orderId" element={<OrderPage />} />
    <Route exact path="*" element={<h1>404 NOT FOUND</h1>} />
  </Routes>
);

export default AppRoutes;
