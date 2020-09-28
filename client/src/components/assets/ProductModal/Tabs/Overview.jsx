import React, { useRef, useEffect, useContext, useState } from "react";

import M from "materialize-css";

import Context from "../../../../context/Context";

import Swipe from "react-easy-swipe";
import useDragHandler from "../../../../hooks/useDragHandler";

const date = new Date();

const Overview = ({ product, size, setSize, color, setColor }) => {
  const sliderRef = useRef(null);
  const [instance, setInstance] = useState(null);

  const { productsInCart, setProductsInCart } = useContext(Context);
  const { onDrag, onDragEnd, onDragStart } = useDragHandler(instance);

  useEffect(() => {
    const include =
      productsInCart &&
      productsInCart.some((el) => el.vendor_code === product.vendor_code);

    if (
      !include &&
      product &&
      product.size.length !== 0 &&
      product.size[0].length !== 0
    )
      setSize(product.size[0]);

    if (
      !include &&
      product &&
      product.color.length !== 0 &&
      product.color[0].length !== 0
    )
      setColor(product.color[0]);
  }, [productsInCart, product, setColor, setSize]);

  useEffect(() => {
    if (productsInCart) {
      for (let i in productsInCart) {
        if (productsInCart[i].vendor_code === product.vendor_code) {
          productsInCart[i]["color"] = color;
          productsInCart[i]["size"] = size;
          setProductsInCart(productsInCart);
          localStorage.setItem(
            "products_in_cart",
            JSON.stringify(productsInCart)
          );
        }
      }
    }
  }, [product, productsInCart, setProductsInCart, color, size]);

  useEffect(() => {
    if (sliderRef.current) {
      const instance = M.Slider.init(sliderRef.current);
      setInstance(instance);
    }
  }, []);

  const onSwipeLeft = () => {
    instance.next();
  };

  const onSwipeRight = () => {
    instance.prev();
  };

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="slider" ref={sliderRef}>
          <Swipe onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
            <ul
              className="slides"
              onDragStart={onDragStart}
              onDrag={onDrag}
              onDragEnd={onDragEnd}
            >
              {product.photos
                .filter((photo) => photo.length !== 0)
                .map((photo, index) => (
                  <li key={index}>
                    <img src={photo} alt={photo} />
                  </li>
                ))}
            </ul>
          </Swipe>
        </div>
      </div>

      <div className="col s12 m6">
        <h4>{product.name}</h4>
        <p>
          <b>Артикул:</b> {product.vendor_code}, ID: {product.aid}
        </p>
        <p>
          <b>Дата отгрузки: </b>
          {date.getFullYear() +
            "." +
            (date.getMonth() + 1) +
            "." +
            (date.getHours() > parseInt(product.shipment_time) + 12
              ? date.getDate() + 1
              : date.getDate()) +
            " " +
            (parseInt(product.shipment_time) + 12) +
            ":00:00"}{" "}
          <span className="green white-text" style={{ padding: 5 }}>
            <b style={{ whiteSpace: "nowrap" }}>
              НА СКЛАДЕ: {product.in_stock}
            </b>
          </span>
        </p>

        <p>{product.description}</p>

        {product && product.size.length !== 0 && product.size[0].length !== 0 && (
          <div className="row">
            <div className="col">
              <b>Размер: </b>
            </div>
            {product.size.map((s, i) => (
              <div
                key={i}
                className={`col ${s === size && "grey lighten-2"}`}
                style={{
                  border: "1px solid black",
                  margin: 2,
                  cursor: "pointer",
                }}
                onClick={() => setSize(s)}
              >
                {s}
              </div>
            ))}
          </div>
        )}
        {product &&
          product.color.length !== 0 &&
          product.color[0].length !== 0 && (
            <div className="row">
              <div className="col">
                <b>Цвет: </b>
              </div>
              {product.color.map((c, i) => (
                <div
                  key={i}
                  className={`col ${c === color && "grey lighten-2"}`}
                  style={{
                    border: "1px solid black",
                    margin: 2,
                    cursor: "pointer",
                  }}
                  onClick={() => setColor(c)}
                >
                  {c}
                </div>
              ))}
            </div>
          )}
        <br />
        <h4 className="orange-text ">
          {product.price_retail.slice(0, product.price_retail.length - 3) +
            " р."}
        </h4>
      </div>
    </div>
  );
};

export default Overview;
