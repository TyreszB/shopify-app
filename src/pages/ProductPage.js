import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export default function ProductPage() {
  const { handle } = useParams();
  const { fetchProductWithHandle, product, addItemToCheckout } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...</div>;

  return (
    <Box p={"2rem"}>
      <Grid templateColumns={[["repeat(1,1fr)"], "repeat(2, 1fr)"]} m={"auto"}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={product.images[0].src} />
        </Flex>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          px={"2rem"}
        >
          <Heading pb={"2rem"}>{product.title}</Heading>
          <Text
            fontWeight={"bold"}
            pb={"2rem"}
          >{`$${product.variants[0].price.amount}0`}</Text>
          <Text color={"gray.500"} pb={"2rem"}>
            {product.description}
          </Text>
          <Button
            _hover={{ opacity: "70%" }}
            w={"10rem"}
            backgroundColor={"#FF38BD"}
            color={"white"}
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
          >
            Add to Cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
}
