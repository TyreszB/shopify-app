import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { handle } = useParams();
  const { fetchProductWithHandle, product, addItemToCheckout } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
}
