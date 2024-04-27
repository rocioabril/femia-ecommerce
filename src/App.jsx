import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:idCategory"
            element={<ItemListContainer />}
          />
          <Route
            exact
            path="/detail/:idProduct"
            element={<ItemDetailContainer />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
