import React, { Children, createContext, useState } from "react";
import Client from "shopify-buy";

const ShopContext = createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

const createCheckout = async () => {};
const fetchCheckout = async () => {};
const addItemToCheckout = async () => {};
const removeLineItem = async (ItemId) => {};
const fetchAllProducts = async () => {};
const fetchProductWithHandle = async () => {};
const closeCart = async () => {};
const openCart = async () => {};
const closeMenu = async () => {};
const openMenu = async () => {};

function useShopProvider() {
  const [product, setProduct] = useState({});
  const [products, setPoducts] = useState([]);
  const [checkout, setCheckout] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return <ShopContext.Provider>{Children}</ShopContext.Provider>;
}

export { ShopContext };
