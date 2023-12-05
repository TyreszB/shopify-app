import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { Box, Button, Grid, Heading, Image, Text } from "@chakra-ui/react";

export default function ProductPage() {
  const { handle } = useParams();
  const { fetchProductWithHandle, product, addItemToCheckout } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...</div>;

  return (
    <Box>
      <Grid templateColumns={"repeat(2, 1fr"}>
        <Image src={product.images[0].src} />
        <Box>
          <Heading>{product.title}</Heading>
          <Text>{`$${product.variants[0].price.amount}0`}</Text>
          <Text>{product.description}</Text>
          <Button onClick={() => addItemToCheckout(product.id, 1)}>
            Add to Cart
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}
