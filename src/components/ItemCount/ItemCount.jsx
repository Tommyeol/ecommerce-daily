import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  function suma() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function resta() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const agregar = () => {
    onAdd(count);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={suma}>sumar</button>
      <button onClick={resta}>restar</button>
      <button onClick={agregar}>agregar</button>
    </>
  );
};

export default ItemCount;
