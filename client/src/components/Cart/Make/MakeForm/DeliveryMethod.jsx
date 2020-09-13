/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";

import SdekTerminalModal from "../SdekTerminalModal";
import YandexMap from "../YandexMap";

import CourierMoscowForm from "./CourierMoscowForm";
import RussianPostForm from "./RussianPostForm";
import SdekCourierForm from "./SdekCourierForm";

const DeliveryMethod = ({ adress }) => {
  const [radio, setRadio] = useState("pick_point");
  const [sdekTerminalData, setSdekTerminalData] = useState(null);
  const [pickPointData, setPickPointData] = useState(null);

  const onRadioChange = (e) => {
    setRadio(e.target.name);
  };

  const selectFun = (result) => {
    setPickPointData(result);
  };

  const onSelectPickPoint = (e) => {
    e.preventDefault();
    window.PickPoint.open(selectFun);
    return false;
  };

  return (
    <Fragment>
      <h5 className="first center">2. Способ доставки</h5>

      <div className="col s12">
        <p>
          <label>
            <input
              name="pick_point"
              type="radio"
              checked={radio === "pick_point"}
              onChange={onRadioChange}
            />
            <span className="black-text">
              <b>Терминалы PickPoint</b>
              <br />
              {radio === "pick_point" && (
                <Fragment>
                  <a href="" className="under-line" onClick={onSelectPickPoint}>
                    Выберите пункт выдачи
                  </a>

                  <br />
                  {pickPointData && (
                    <i className="grey-text">
                      {pickPointData.name}
                      <br />
                      {pickPointData.address}
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
                  {sdekTerminalData && (
                    <i className="grey-text">
                      {sdekTerminalData.PVZ.Name}
                      <br />
                      {[
                        sdekTerminalData.PVZ.Address,
                        sdekTerminalData.PVZ.Phone,
                        sdekTerminalData.PVZ.WorkTime,
                      ].join("; ")}
                    </i>
                  )}
                </Fragment>
              )}
            </span>
          </label>
        </p>
      </div>

      {adress && adress.value !== "г Москва" && (
        <div className="col s12">
          <p>
            <label>
              <input
                name="sdek_courier"
                type="radio"
                checked={radio === "sdek_courier"}
                onChange={onRadioChange}
              />
              <span className="black-text">
                <b>Курьером СДЭК по России</b>
              </span>
            </label>
          </p>

          {radio === "sdek_courier" && (
            <div className="col s12 xl8">
              <div className="card-panel white">
                <SdekCourierForm />
              </div>
            </div>
          )}
        </div>
      )}

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

      {adress && adress.value === "г Москва" && (
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

      {adress && adress.value === "г Москва" && (
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
      <YandexMap />
      <SdekTerminalModal setSdekTerminalData={setSdekTerminalData} />
    </Fragment>
  );
};

export default DeliveryMethod;
