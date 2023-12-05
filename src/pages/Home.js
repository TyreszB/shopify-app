import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <div>
      {products.map((product) => (
        <Link to={`/products/${product.handle}`}>
          <h1 key={product.title}>{product.title}</h1>
        </Link>
      ))}
    </div>
  );
}
