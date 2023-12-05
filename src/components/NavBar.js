import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { MdMenu, MdShoppingBasket } from "react-icons/md";

export default function NavBar() {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      backgroundColor={"#FFA8E2"}
      flexDir={"row"}
      justifyContent={"space-between"}
      p={"2rem"}
    >
      <Icon
        cursor={"pointer"}
        fill={"white"}
        as={MdMenu}
        w={30}
        h={30}
        onClick={openMenu}
      ></Icon>
      <Image
        src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
        w={100}
        h={100}
      />
      <Icon
        cursor={"pointer"}
        fill={"white"}
        as={MdShoppingBasket}
        w={30}
        h={30}
        onClick={openCart}
      ></Icon>
    </Flex>
  );
}
