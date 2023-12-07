import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function NavMenu() {
  const { isMenuOpen, closeMenu } = useContext(ShopContext);

  return (
    <Drawer
      isOpen={isMenuOpen}
      onClose={closeMenu}
      placement="left"
      size={"sm"}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack p={"2rem"}>
              <Link>About Us</Link>
              <Link>Learn More</Link>
              <Link>Sustainability</Link>
            </VStack>
          </DrawerBody>
          <DrawerFooter textAlign={"center"}>
            <Text w={"100%"}>Copyright</Text>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
