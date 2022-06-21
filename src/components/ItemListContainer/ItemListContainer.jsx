import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/ItemDescription/itemDescription";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  console.log(categoriaId);

  useEffect(() => {
    if (categoriaId) {
      getFetch()
        .then((resp) => {
          setProductos(
            resp.filter((producto) => producto.categoria === categoriaId)
          );
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      getFetch()
        .then((resp) => setProductos(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  });

  return (
    <div>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        productos.map((prod) => (
          <div className="col-md-2 p-1" key={prod.id}>
            <div className="card w-100 mt-2">
              <div className="card-header">
                {`${prod.nombre} - ${prod.categoria}`}
              </div>
              <div className="card-body">
                {<img src={prod.foto} alt="" className="w-50" />}
              </div>
              <div>Precio ${prod.precio}</div>
              <div className="card-footer">
                <Link to={`/detalle/${prod.id}`}>
                  <button className="btn btn-outline-primary btn-block">
                    Detalle del producto
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemListContainer;
