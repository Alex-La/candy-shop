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
  manufacturer: null,
  setManufacturer: () => {},
  cartModalInstance: null,
  setCartModalInstance: () => {},
  priceGlobal: null,
  setPriceGlobal: () => {},
});

export default Context;
