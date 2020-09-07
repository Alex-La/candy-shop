import React, { useRef, useEffect } from "react";

import M from "materialize-css";

const date = new Date();

const Overview = ({ product, size, setSize, color, setColor }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (product.size.length === 1) setSize(product.size[0]);
    if (product.color.length === 1) setColor(product.color[0]);
  }, [product, setSize, setColor]);

  useEffect(() => {
    if (sliderRef.current) {
      M.Slider.init(sliderRef.current);
    }
  }, []);

  const onSizeChange = (e) => {
    setSize(e.target.id);
  };

  const onColorChange = (e) => {
    setColor(e.target.id);
  };

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

        {product.size.length !== 1 && product.size[0].length !== 0 && (
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col s2">
              <b>Размер:</b>
            </div>
            <div className="col s10">
              <div className="row">
                {product.size.map((siz, index) => (
                  <div key={index} className="col">
                    <div
                      className={`${siz === size && "grey"} lighten-2`}
                      onClick={onSizeChange}
                      id={siz}
                      style={{
                        border: "1px solid black",
                        padding: 5,
                        margin: 1,
                        cursor: "pointer",
                      }}
                    >
                      {siz}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {product.color.length !== 0 && product.color[0].length !== 0 && (
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col s2">
              <b>Цвет:</b>
            </div>
            <div className="col s10">
              <div className="row">
                {product.color.map((col, index) => (
                  <div key={index} className="col">
                    <div
                      className={`${col === color && "grey"} lighten-2`}
                      onClick={onColorChange}
                      id={col}
                      style={{
                        border: "1px solid black",
                        padding: 5,
                        margin: 1,
                        cursor: "pointer",
                      }}
                    >
                      {col}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
