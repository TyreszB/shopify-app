import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

export default function Cart() {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);

  return (
    <>
      <Drawer isOpen={isCartOpen} placement="right" onClose={closeCart}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>This is your Cart.</DrawerBody>

          <DrawerFooter>
            <Button colorScheme="blue">Checkout Here</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
