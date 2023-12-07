import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import Hero from "../components/Hero";
import ImageWithText from "../components/ImageWithText";
import RichText from "../components/RichText";

export default function Home() {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <Box>
      <Hero />
      <RichText
        title="The relaxation you've been waititng for."
        text="Our Bath bombs guarantee a fun, relaxing and colorful night."
      />
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}>
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box
              _hover={{ opacity: "80%" }}
              textAlign={"center"}
              position={"relative"}
            >
              <Image src={product.images[0].src} />
              <Text
                position={"absolute"}
                bottom={"15%"}
                w={"100%"}
                fontWeight={"bold"}
              >
                {product.title}
              </Text>
              <Text
                position={"absolute"}
                bottom={"5%"}
                w={"100%"}
                color={"grey.300"}
              >{`$${product.variants[0].price.amount}0`}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <RichText title={"Treat Yourself!"} />
      <ImageWithText
        button
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
        heading="Heading"
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
      />
      <ImageWithText
        reverse
        button
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
        heading="Second Heading"
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
      />
    </Box>
  );
}
