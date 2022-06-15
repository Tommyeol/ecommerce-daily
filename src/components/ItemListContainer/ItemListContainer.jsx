import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/ItemDescription/itemDescription";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch()
      .then((resp) => {
        setProductos(resp);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(productos);

  return (
    <div>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        productos.map((prod) => (
          <div className="col-md-2 p-1" key={prod.id}>
            <div className="card w-100 mt-2">
              <div className="card-header">
                {`${prod.nombre} - ${prod.descripcion}`}
              </div>
              <div className="card-body">
                {<img src={prod.foto} alt="" className="w+50" />}
              </div>
              <div>Precio ${prod.precio}</div>
              <div className="card-footer">
                <button className="btn btn-outline-primary btn-block">
                  Detalle del producto
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemListContainer;
