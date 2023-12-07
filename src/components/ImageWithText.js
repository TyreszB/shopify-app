import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

export default function ImageWithText({
  reverse,
  image,
  heading,
  text,
  button,
}) {
  const reverseSection = reverse ? "row-reverse" : "row";

  return (
    <Box>
      <Flex flexDir={["column", reverseSection]} w={"100%"}>
        <Image src={image} objectFit={"cover"} w={["100%", "50%"]} />
        <Flex
          v
          flexDir={"column"}
          p={"2rem"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading>{heading && heading}</Heading>
          <Text> {text && text} </Text>
          {button ? (
            <Button
              w={"10rem"}
              backgroundColor={"FF38BD"}
              color={"white"}
              _hover={{ opacity: "70%" }}
            >
              Buy Now
            </Button>
          ) : null}
        </Flex>
      </Flex>
    </Box>
  );
}
