const ItemDetail = ({ producto }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <img src={producto.foto} alt="" className="w-100" />
      </div>
      <div className="col-md-6">
        <h2>Nombre: {producto.nombre}</h2>
        <h3>Descripción: {producto.descripcion}</h3>
        <h4>Precio: ${producto.precio}</h4>
      </div>
    </div>
  );
};

export default ItemDetail;
