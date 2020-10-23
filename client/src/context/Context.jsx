import { createContext } from "react";

const Context = createContext({
  instance: null,
  setInstance: () => {},
  searchInputValue: "",
  setSearchInputValue: () => {},
  currentVendorCode: 0,
  setCurrentVendorCode: () => {},
  productsInCart: null,
  setProductsInCart: () => {},
  cartModalInstance: null,
  setCartModalInstance: () => {},
  totalPrice: null,
  setTotalPrice: () => {},
  filter: null,
  setFilter: () => {},
});

export default Context;
