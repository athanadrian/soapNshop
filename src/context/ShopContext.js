import React, { useEffect, useState, createContext, useCallback } from 'react';
import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API_ACCESS_TOKEN,
});

const ShopContext = createContext();

const initialState = {
  product: {},
  products: [],
  checkout: {},
  isCartOpen: false,
  isMenuOpen: false,
};

export const ShopProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const createCheckOut = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem('checkout_id', checkout.id);
    setState((preState) => ({ ...preState, checkout }));
  };

  const fetchCheckOut = async (checkoutId) => {
    const checkout = await client.checkout.fetch(checkoutId);
    setState((preState) => ({ ...preState, checkout }));
  };

  const addItemToCheckOut = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    const checkout = await client.checkout.addLineItems(
      state.checkout.id,
      lineItemsToAdd
    );
    setState((preState) => ({ ...preState, checkout }));
    openCart();
  };

  const removeLineItem = async (lineItemIdToRemove) => {
    const lineItemIdsToRemove = [lineItemIdToRemove];
    const checkout = await client.checkout.removeLineItems(
      state.checkout.id,
      lineItemIdsToRemove
    );
    setState((preState) => ({ ...preState, checkout }));
  };

  const fetchAllProducts = useCallback(async () => {
    const products = await client.product.fetchAll();
    setState((preState) => ({ ...preState, products }));
  }, []);

  const fetchProductWithHandle = useCallback(async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    setState((preState) => ({ ...preState, product }));
  }, []);

  const openCart = () => {
    setState((preState) => ({ ...preState, isCartOpen: true }));
  };
  const closeCart = () => {
    setState((preState) => ({ ...preState, isCartOpen: false }));
  };
  const openMenu = () => {
    console.log('opening menu.....');
    setState((preState) => ({ ...preState, isMenuOpen: true }));
  };
  const closeMenu = () => {
    setState((preState) => ({ ...preState, isMenuOpen: false }));
  };

  useEffect(() => {
    if (localStorage.checkout_id) {
      fetchCheckOut(localStorage.checkout_id);
    } else {
      createCheckOut();
    }
  }, []);

  return (
    <ShopContext.Provider
      value={{
        ...state,
        fetchAllProducts,
        fetchProductWithHandle,
        createCheckOut,
        fetchCheckOut,
        addItemToCheckOut,
        removeLineItem,
        openCart,
        closeCart,
        openMenu,
        closeMenu,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
