import React, { useRef, useEffect } from "react";

import M from "materialize-css";

const date = new Date();

const Overview = ({ product }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      M.Slider.init(sliderRef.current);
    }
  }, []);

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="slider" ref={sliderRef}>
          <ul className="slides">
            {product.photos
              .filter((photo) => photo.length !== 0)
              .map((photo, index) => (
                <li key={index}>
                  <img src={photo} alt={photo} />
                </li>
              ))}
          </ul>
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

        <div className="row" style={{ marginTop: 20 }}>
          <div className="col s2">
            <b>Цвет:</b>
          </div>
          <div className="col s10">
            <div
              className="green"
              style={{
                width: 25,
                height: 25,
                border: "1px solid black",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
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
