import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function RichText({ title, text }) {
  return (
    <Box p={"1rem"}>
      <Center display={"flex"} flexDir={"column"} textAlign={"center"}>
        <Heading py={"2.5rem"}>{title && title}</Heading>
        <Text pb={"2rem"}>{text && text}</Text>
      </Center>
    </Box>
  );
}
