import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { Box, Grid, Image, Text } from "@chakra-ui/react";

export default function Home() {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <Box>
      <Grid templateColumns={"repeat(3, 1fr)"}>
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box _hover={{ opacity: "80%" }} textAlign={"center"}>
              <Image src={product.images[0].src} />
              <Text>{product.title}</Text>
              <Text>{`$${product.variants[0].price.amount}0`}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}
