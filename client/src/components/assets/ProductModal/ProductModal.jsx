/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, useContext, useState } from "react";

import M from "materialize-css";

import Context from "../../../context/Context";

import { useQuery } from "@apollo/react-hooks";
import PRODUCT_QUERY from "../../../graphql/queries/product";

import Tabs from "./Tabs/Tabs";

const ProductModal = () => {
  const modalRef = useRef(null);

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const [inCart, setInCart] = useState(false);
  const [instance, setInstance] = useState(null);

  const { currentVendorCode, productsInCart, setProductsInCart } = useContext(
    Context
  );

  const { data, loading, refetch } = useQuery(PRODUCT_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      vendorCode: currentVendorCode,
    },
  });

  useEffect(() => {
    if (productsInCart !== null) {
      for (let i in productsInCart) {
        if (productsInCart[i].vendor_code === currentVendorCode.toString()) {
          setSize(productsInCart[i].size);
          setColor(productsInCart[i].color);
        }
      }
    }
  }, [productsInCart, currentVendorCode]);

  useEffect(() => {
    if (productsInCart !== null) {
      let isInCart = false;
      for (let i in productsInCart) {
        if (productsInCart[i].vendor_code === currentVendorCode.toString()) {
          isInCart = true;
        }
      }
      setInCart(isInCart);
    }
  }, [currentVendorCode, productsInCart]);

  useEffect(() => {
    if (modalRef.current) {
      const instance = M.Modal.init(modalRef.current, {
        endingTop: "15%",
      });
      setInstance(instance);
    }
  }, []);

  const onAddToCard = () => {
    let pr;
    if (data.product.product.sale) {
      pr = parseInt(
        data.product.product.price_retail.slice(
          0,
          data.product.product.price_retail.length - 3
        ),
        10
      );
      pr = (pr * (100 - data.product.product.sale)) / 100;
    } else {
      pr = data.product.product.price_retail.slice(
        0,
        data.product.product.price_retail.length - 3
      );
    }

    const productToCard = {
      sale: data.product.product.sale,
      vendor_code: data.product.product.vendor_code,
      image_small: data.product.product.photo_small,
      name: data.product.product.name,
      size,
      color,
      price: pr + " р.",
    };

    if (productsInCart === null && !inCart) {
      localStorage.setItem("products_in_cart", JSON.stringify([productToCard]));
      setProductsInCart([productToCard]);
    }

    if (productsInCart !== null && !inCart) {
      const products = productsInCart;
      products.push(productToCard);
      localStorage.setItem("products_in_cart", JSON.stringify(products));
      setProductsInCart(products.slice());
    }

    if (inCart) {
      setInCart(false);
      const filtered = productsInCart.filter(
        (prod) => prod.vendor_code !== currentVendorCode.toString()
      );
      localStorage.setItem("products_in_cart", JSON.stringify(filtered));
      setProductsInCart(filtered);
    }
  };

  return (
    <div id="ProductModal" className="modal dropdown-scroll" ref={modalRef}>
      <div className="modal-content">
        <Tabs
          data={data}
          loading={loading}
          refetch={refetch}
          instance={instance}
          vendorCode={currentVendorCode}
          size={size}
          setSize={setSize}
          color={color}
          setColor={setColor}
        />
      </div>
      <div className="modal-footer">
        <a
          className={`waves-effect waves-dark btn-flat ${
            inCart ? "red-text" : "black-text"
          } ${
            ((data && data.product.refetch_require) ||
              loading ||
              currentVendorCode === 0) &&
            "disabled"
          }`}
          onClick={onAddToCard}
        >
          {inCart ? "Убрать" : "В корзину"}
        </a>
      </div>
    </div>
  );
};

export default ProductModal;
