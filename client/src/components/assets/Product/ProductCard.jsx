/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";

import Context from "../../../context/Context";

const ProductCard = ({
  vendor_code,
  image_small,
  image,
  name,
  description,
  color,
  size,
  price,
  radio = "block",
}) => {
  const [inCart, setInCart] = useState(false);

  const {
    setCurrentVendorCode,
    setProductsInCart,
    productsInCart,
  } = useContext(Context);

  useEffect(() => {
    if (inCart) {
      let isInCart = false;
      for (let i in productsInCart) {
        if (productsInCart[i].vendor_code === vendor_code) isInCart = true;
      }
      setInCart(isInCart);
    }
  }, [inCart, productsInCart, vendor_code]);

  useEffect(() => {
    if (productsInCart !== null) {
      for (let i in productsInCart) {
        if (productsInCart[i].vendor_code === vendor_code) setInCart(true);
      }
    }
  }, [vendor_code, productsInCart]);

  const onOpenModal = () => {
    setCurrentVendorCode(parseInt(vendor_code, 10));
  };

  const onAddToCard = () => {
    setInCart(true);
    const productToCard = {
      vendor_code,
      image_small,
      name,
      color,
      size,
      price: price.slice(0, price.length - 3) + " р.",
    };

    if (productsInCart !== null && !inCart) {
      const products = productsInCart;
      products.push(productToCard);
      localStorage.setItem("products_in_cart", JSON.stringify(products));
      setProductsInCart(products.slice());
    }

    if (productsInCart === null && !inCart) {
      localStorage.setItem("products_in_cart", JSON.stringify([productToCard]));
      setProductsInCart([productToCard]);
    }

    if (inCart) {
      setInCart(false);
      const products = productsInCart;
      const filtred = products.filter((el) => el.vendor_code !== vendor_code);
      localStorage.setItem("products_in_cart", JSON.stringify(filtred));
      setProductsInCart(filtred);
    }
  };

  return (
    <div
      className={`card ${
        window.innerWidth >= 768 && radio === "list" && "horizontal"
      }`}
    >
      <div className="card-image">
        <img
          className="modal-trigger"
          href="#ProductModal"
          onClick={onOpenModal}
          style={{ cursor: "pointer" }}
          height={radio === "block" ? 350 : 500}
          src={image}
          alt={image}
        />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p
            onClick={onOpenModal}
            className="under-line modal-trigger"
            href="#ProductModal"
            style={{
              fontSize: 20,
              height: radio === "block" ? 100 : "",
              lineHeight: "20px",
              cursor: "pointer",
            }}
          >
            {name}
          </p>
          <p>{radio === "list" && description}</p>
        </div>
        <div className="card-action">
          <a
            className={`waves-effect waves-light btn ${
              inCart ? "red" : "black"
            }`}
            onClick={onAddToCard}
          >
            <i className="material-icons">
              {inCart ? "remove_shopping_cart" : "add_shopping_cart"}
            </i>
          </a>
          <a
            className="waves-effect waves-dark btn white black-text modal-trigger"
            href="#ProductModal"
            style={{ marginLeft: 10 }}
            onClick={onOpenModal}
          >
            <i className="material-icons">open_in_new</i>
          </a>
          <a className="right" style={{ fontSize: 18, marginTop: 4 }}>
            {price.slice(0, price.length - 3) + " р."}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
