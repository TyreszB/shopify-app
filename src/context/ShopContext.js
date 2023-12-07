import { createContext, useState } from "react";
import Client from "shopify-buy";

const ShopContext = createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

function ShopProvider({ children }) {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [checkout, setCheckout] = useState();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const createCheckout = async () => {
    const newCheckout = await client.checkout.create();
    setCheckout(newCheckout);
    localStorage.setItem("checkout_id", newCheckout.id);
    return newCheckout;
  };

  const fetchCheckout = async (checkoutId) => {
    const fetchedCheckout = await client.checkout.fetch(checkoutId);
    setCheckout(fetchedCheckout);
    return fetchedCheckout;
  };

  const addItemToCheckout = async (variantId, quantity) => {
    let updatedCheckout = checkout;

    if (!updatedCheckout) {
      const newCheckout = await createCheckout();
      setCheckout(newCheckout);
      updatedCheckout = newCheckout;
    }
    const checkoutId = updatedCheckout.id;

    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    updatedCheckout = await client.checkout.addLineItems(
      checkoutId,
      lineItemsToAdd
    );

    setCheckout(updatedCheckout);
    setIsCartOpen(true);
    return updatedCheckout;
  };

  const removeLineItem = async (lineItemIdsToRemove) => {
    const updatedCheckout = await client.checkout.removeLineItems(
      checkout.id,
      lineItemIdsToRemove
    );

    setCheckout(updatedCheckout);
  };
  const fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    setProducts(products);
    return products;
  };

  const fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    setProduct(product);
  };
  const closeCart = async () => {
    setIsCartOpen(false);
  };
  const openCart = async () => {
    setIsCartOpen(true);
  };
  const closeMenu = async () => {
    setIsMenuOpen(false);
  };
  const openMenu = async () => {
    setIsMenuOpen(true);
  };

  const value = {
    product,
    products,
    checkout,
    isCartOpen,
    isMenuOpen,
    createCheckout,
    fetchCheckout,
    addItemToCheckout,
    removeLineItem,
    fetchAllProducts,
    fetchProductWithHandle,
    closeCart,
    openCart,
    closeMenu,
    openMenu,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export { ShopContext, ShopProvider };
