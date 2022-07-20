import { useState } from "react";
import {
  BrowserRouter as Direcciones,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./helpers/ItemDetailContainer/ItemDetailContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartContextProvider from "./components/CartContext/CartContext";

function App() {
  return (
    <CartContextProvider>
      <div className="border border-3 border primary">
        <Direcciones>
          <NavBar />
          <Routes>
            <Route index path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Direcciones>
      </div>
    </CartContextProvider>
  );
}

export default App;
