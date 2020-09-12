import React, { Fragment, useState } from "react";

import YandexMap from "../YandexMap";

import CourierMoscowForm from "./CourierMoscowForm";

const DeliveryMethod = ({ adress }) => {
  const [radio, setRadio] = useState("pick_point");

  const onRadioChange = (e) => {
    setRadio(e.target.name);
  };

  return (
    <Fragment>
      <div className="col s12 m8 xl9">
        <h5 className="first center">2. Способ доставки</h5>

        {adress && adress.value !== "г Москва" && (
          <Fragment>
            <div className="col s12">
              <p>
                <label>
                  <input
                    name="courier_moscow"
                    type="radio"
                    checked={radio === "courier_moscow"}
                    onChange={onRadioChange}
                  />
                  <span className="black-text">
                    <b>Курьером по Москве</b>
                  </span>
                </label>
              </p>
            </div>

            {radio === "courier_moscow" && (
              <div className="col s12 xl8">
                <div className="card-panel white">
                  <CourierMoscowForm />
                </div>
              </div>
            )}
          </Fragment>
        )}

        {adress && adress.value !== "г Москва" && (
          <div className="col s12">
            <p>
              <label>
                <input
                  name="pickup"
                  type="radio"
                  checked={radio === "pickup"}
                  onChange={onRadioChange}
                />
                <span className="black-text">
                  <b>Самовывоз м.Автозаводская</b>
                  <br />
                  Время работы: ежедневно с 9 до 21
                  <br />
                  <a href="#map_modal" className="modal-trigger">
                    Схема проезда
                  </a>
                </span>
              </label>
            </p>
          </div>
        )}
      </div>
      <YandexMap />
    </Fragment>
  );
};

export default DeliveryMethod;
