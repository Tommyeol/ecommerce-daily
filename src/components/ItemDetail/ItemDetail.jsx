import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  const { progreso, setProgreso } = useState();

  const onAdd = (cant) => {
    console.log(cant);
    setProgreso(cant);
  };

  return (
    <div className="row">
      <div className="col-md-6 mt-5">
        <img src={producto.foto} alt="" className="w-50 m-5" />
      </div>
      <div className="col-md-6 mt-5">
        <div className="row mt-5">
          <h2>Nombre: {producto.nombre}</h2>
          <h3>Categoria: {producto.categoria}</h3>
          <h4>Precio: ${producto.precio}</h4>
        </div>
        <div className="row">
          <div className="col">
            {progreso ? (
              <Link to="/cart">
                <button className="btn btn-primary">Ir al carrito</button>
              </Link>
            ) : (
              <ItemCount initial={1} stock={10} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
