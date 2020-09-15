import React, { Fragment, useState } from "react";
import "./App.css";

import Context from "./context/Context";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

import { ApolloProvider } from "@apollo/react-hooks";
import client from "./startup/apollo/index";

import AgeCheck from "./components/AgeCheck/AgeCheck";
import ScrollToTop from "./routes/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartModal from "./components/assets/CartModal/CartModal";

const App = () => {
  //context state
  const [instance, setInstance] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [currentVendorCode, setCurrentVendorCode] = useState(0);
  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(localStorage.getItem("products_in_cart"))
  );
  const [manufacturer, setManufacturer] = useState(null);
  const [cartModalInstance, setCartModalInstance] = useState(null);

  return (
    <Fragment>
      <AgeCheck />
      <Router>
        <Context.Provider
          value={{
            instance,
            setInstance,
            searchInputValue: searchValue,
            setSearchInputValue: setSearchValue,
            currentVendorCode,
            setCurrentVendorCode,
            productsInCart,
            setProductsInCart,
            manufacturer,
            setManufacturer,
            cartModalInstance,
            setCartModalInstance,
          }}
        >
          <ApolloProvider client={client}>
            <CartModal />
            <div className="cont">
              <Header />
              <ScrollToTop />
              <Routes />
            </div>
            <Footer />
          </ApolloProvider>
        </Context.Provider>
      </Router>
    </Fragment>
  );
};

export default App;
