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
  const [checkout, setCheckout] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const createCheckout = async () => {
    const newCheckout = await client.checkout.create();
    localStorage.setItem("checkout_id", newCheckout.id);
    console.log(newCheckout);
    setCheckout(newCheckout);
  };

  const fetchCheckout = async (checkoutId) => {
    const fetchedCheckout = await client.checkout.fetch(checkoutId);
    setCheckout(fetchedCheckout);
  };

  const addItemToCheckout = async (variantId, quantity) => {
    if (checkout === null) {
      const newCheckoutCart = createCheckout();
    }
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    const newCheckout = await client.checkout.addLineItems(
      checkout.id,
      lineItemsToAdd
    );
    setCheckout(newCheckout);
    setIsCartOpen(true);
  };
  const removeLineItem = async (ItemId) => {};
  const fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    setProducts(products);
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
