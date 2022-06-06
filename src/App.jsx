import { useState } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cuerpo from "./components/Cuerpo/Cuerpo";
import NavBar from "./components/NavBar/NavBar";
import Titulo from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Titulo />
      <Cuerpo />
      <ItemCount />
    </>
  );
}

export default App;
