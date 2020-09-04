import React, { useContext } from "react";

import Context from "../../../../context/Context";

import { Link } from "react-router-dom";

const date = new Date();

const FullDescription = ({ product, instance }) => {
  const { setManufacturer } = useContext(Context);

  const onManufacturer = () => {
    instance.close();
    setManufacturer(product.manufacturer);
  };
  return (
    <div className="row">
      <div className="col s12">
        <h6>
          <b>{product.name}</b>
        </h6>

        <p>{product.description}</p>

        <ul className="collection">
          <li className="collection-item grey lighten-5">
            <b>Артикул:</b> {product.vendor_code}
          </li>
          <li className="collection-item grey lighten-5">
            <b>Упаковка:</b> {product.package}
          </li>
          <li className="collection-item grey lighten-5">
            <b>Материал:</b> {product.material}
          </li>
          <li className="collection-item grey lighten-5">
            <b>Производитель:</b>{" "}
            <Link to="/catalog/manufacturer" onClick={onManufacturer}>
              {product.manufacturer}
            </Link>
          </li>
          <li className="collection-item grey lighten-5">
            <b>Вес:</b> {product.gross_weight}г.
          </li>
          <li className="collection-item grey lighten-5">
            <b>Батарейки:</b> {product.batteries}
          </li>
          <li className="collection-item grey lighten-5">
            <b>Отгрузка со склада:</b>{" "}
            {date.getFullYear() +
              "." +
              (date.getMonth() + 1) +
              "." +
              (date.getHours() > parseInt(product.shipment_time) + 12
                ? date.getDate() + 1
                : date.getDate()) +
              " " +
              (parseInt(product.shipment_time) + 12) +
              ":00:00"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FullDescription;
