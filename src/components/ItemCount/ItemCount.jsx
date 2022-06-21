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
      <div className="container m-5 w-25 border rounded border-3 border-primary">
        <span className="alert alert-success w-100">{count}</span>
        <div>
          <button onClick={suma} className="btn btn-primary w-50">
            +
          </button>
          <button onClick={resta} className="btn btn-danger w-50">
            -
          </button>
          <button onClick={agregar} className="btn btn-success w-100">
            agregar
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
