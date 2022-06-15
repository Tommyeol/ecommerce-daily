import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Titulo from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./helpers/ItemDetailContainer/ItemDetailContainer";

function App() {
  const onAdd = (cant) => {
    console.log(cant);
  };

  return (
    <>
      <NavBar />
      <Titulo />
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
      <ItemDetailContainer />
    </>
  );
}

export default App;
