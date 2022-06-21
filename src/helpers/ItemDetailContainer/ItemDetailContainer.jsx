import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFetch } from "../ItemDescription/itemDescription";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    getFetch(id)
      .then((resp) => setProducto(resp))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="border border-1 border-primary">
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
