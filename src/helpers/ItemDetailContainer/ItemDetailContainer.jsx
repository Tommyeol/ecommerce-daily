import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFetchOne } from "../ItemDescription/itemDescription";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  useEffect(() => {
    getFetchOne().then((resp) =>
      setProducto(resp).catch((err) => console.log(err))
    );
  }, []);

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
