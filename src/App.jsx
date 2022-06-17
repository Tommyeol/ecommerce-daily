import { useState } from "react";
import { BrowserRouter as Direcciones, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Titulo from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./helpers/ItemDetailContainer/ItemDetailContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const onAdd = (cant) => {
    console.log(cant);
  };

  return (
    <Direcciones>
      <NavBar />
      <Routes>
        <Route index path="/" element={<ItemListContainer />} />
        <Route
          path="/descripcion/:descripcionId"
          element={<ItemListContainer />}
        />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </Direcciones>
  );
}

export default App;
