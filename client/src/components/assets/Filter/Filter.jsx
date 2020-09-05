import React, { useState, useEffect, useCallback } from "react";

import "nouislider/distribute/nouislider.css";
import Nouislider from "nouislider-react";

import wNumb from "wnumb";

import Dropdowns from "./Dropdowns";

const Filter = ({
  setLoadingOnButton,
  catalogData,
  setPriceRange,
  radio,
  setRadio,
  setOrderBy,
  price_range,
}) => {
  const [price, setPrice] = useState([0, 0]);
  const [firstLoad, setFirstLoad] = useState(true);
  const [minMax, setMinMax] = useState([0, 0]);

  useEffect(() => {
    if (price_range && firstLoad) {
      setPrice(price_range);
      setMinMax(price_range);
      setFirstLoad(false);
    }
  }, [price_range, firstLoad]);

  const onSliderSlide = useCallback((value) => {
    setPrice(value);
  }, []);

  const onSliderChange = (value) => {
    setLoadingOnButton(false);
    setPriceRange(value);
  };

  const onRadioChange = (event) => {
    setRadio(event.target.value);
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {catalogData.length !== 0 && (
            <Dropdowns
              catalogData={catalogData}
              setOrderBy={setOrderBy}
              setLoadingOnButton={setLoadingOnButton}
            />
          )}

          <div className="col s12 m4 center">
            <div className="col s6">
              <p>
                <label>
                  <input
                    value="block"
                    type="radio"
                    checked={radio === "block" && true}
                    onChange={onRadioChange}
                  />
                  <span>
                    <i className="material-icons">apps</i>
                  </span>
                </label>
              </p>
            </div>
            <div className="col s3">
              <p>
                <label>
                  <input
                    value="list"
                    type="radio"
                    checked={radio === "list" && true}
                    onChange={onRadioChange}
                  />
                  <span>
                    <i className="material-icons">format_list_bulleted</i>
                  </span>
                </label>
              </p>
            </div>
          </div>

          <div className="col s12">
            <p className="grey-text">
              Цена:{" "}
              {price.length === 0
                ? 0 + " р. - " + 0 + " р."
                : price[0] + " р. - " + price[1] + " р."}
            </p>
            <Nouislider
              disabled={
                firstLoad || price.length === 0 || minMax[0] === minMax[1]
              }
              onSlide={onSliderSlide}
              onChange={onSliderChange}
              range={{
                min: firstLoad
                  ? 0
                  : minMax[0] && minMax[0] !== minMax[1]
                  ? parseInt(minMax[0])
                  : 0,
                max: firstLoad
                  ? 300
                  : minMax[1] && minMax[0] !== minMax[1]
                  ? parseInt(minMax[1])
                  : 300,
              }}
              start={firstLoad ? [0, 300] : price}
              format={wNumb({
                decimals: 0,
              })}
              step={100}
              connect
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
