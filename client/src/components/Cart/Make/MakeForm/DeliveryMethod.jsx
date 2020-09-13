import React, { Fragment, useState } from "react";
import { useEffect } from "react";

import SdekTerminalModal from "../SdekTerminalModal";
import YandexMap from "../YandexMap";

import CourierMoscowForm from "./CourierMoscowForm";
import RussianPostForm from "./RussianPostForm";

const DeliveryMethod = ({ adress }) => {
  const [radio, setRadio] = useState("pick_point");
  const [sdekTerminalAdress, setSdekTerminalAdress] = useState(null);

  const onRadioChange = (e) => {
    setRadio(e.target.name);
  };

  return (
    <Fragment>
      <div className="col s12 m8 xl9">
        <h5 className="first center">2. Способ доставки</h5>

        <div className="col s12">
          <p>
            <label>
              <input
                name="sdek_terminals"
                type="radio"
                checked={radio === "sdek_terminals"}
                onChange={onRadioChange}
              />
              <span className="black-text">
                <b>Терминалы СДЭК</b>
                <br />
                {radio === "sdek_terminals" && (
                  <Fragment>
                    <a
                      href="#sdek_terminal_modal"
                      className="modal-trigger under-line"
                    >
                      Выберите пункт выдачи
                    </a>

                    <br />
                    {sdekTerminalAdress && (
                      <i className="grey-text">
                        {sdekTerminalAdress.PVZ.Name}
                        <br />
                        {[
                          sdekTerminalAdress.PVZ.Address,
                          sdekTerminalAdress.PVZ.Phone,
                          sdekTerminalAdress.PVZ.WorkTime,
                        ].join("; ")}
                      </i>
                    )}
                  </Fragment>
                )}
              </span>
            </label>
          </p>
        </div>

        <div className="col s12">
          <p>
            <label>
              <input
                name="russian_post"
                type="radio"
                checked={radio === "russian_post"}
                onChange={onRadioChange}
              />
              <span className="black-text">
                <b>Почта России</b>
              </span>
            </label>
          </p>

          {radio === "russian_post" && (
            <div className="col s12 xl8">
              <div className="card-panel white">
                <RussianPostForm />
              </div>
            </div>
          )}
        </div>

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
                  <a href="#map_modal" className="modal-trigger under-line">
                    Схема проезда
                  </a>
                </span>
              </label>
            </p>
          </div>
        )}
      </div>
      <YandexMap />
      <SdekTerminalModal setSdekTerminalAdress={setSdekTerminalAdress} />
    </Fragment>
  );
};

export default DeliveryMethod;
