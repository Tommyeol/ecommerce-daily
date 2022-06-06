import { useState } from "react";

function ItemCount() {
  const [count, modificarCount] = useState(0);

  function agregar() {
    modificarCount(count + 1);
  }

  return (
    <div>
      <h2>La cantidad de visitas hasta el momento = {count}</h2>
      <button onClick={agregar}>+</button>
    </div>
  );
}

export default ItemCount;
