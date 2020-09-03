import React from "react";

const FullDescription = ({ product }) => {
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
            <b>Производитель:</b> {product.manufacturer}
          </li>
          <li className="collection-item grey lighten-5">
            <b>Вес:</b> {product.gross_weight}г.
          </li>
          <li className="collection-item grey lighten-5">
            <b>Батарейки:</b> {product.batteries}
          </li>
          <li className="collection-item grey lighten-5">
            <b>Отгрузка со склада:</b> {product.shipment_time}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FullDescription;
