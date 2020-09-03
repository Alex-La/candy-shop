import React, { Fragment, useState, useEffect, createRef } from "react";

import { useHistory } from "react-router-dom";

import M from "materialize-css";

const Dropdowns = ({ catalogData, setOrderBy, setLoadingOnButton }) => {
  const [selectRefs, setSelectRefs] = useState([]);

  const history = useHistory();

  useEffect(() => {
    setSelectRefs((selectRef) =>
      Array(2)
        .fill()
        .map((_, i) => selectRef[i] || createRef())
    );
  }, []);

  useEffect(() => {
    for (let i in selectRefs) {
      if (selectRefs[i].current) {
        M.FormSelect.init(selectRefs[i].current);
      }
    }
  }, [selectRefs]);

  const onCategoryChange = (event) => {
    history.push(event.target.value);
  };

  const onOrderByChange = (event) => {
    setLoadingOnButton(false);
    setOrderBy(event.target.value);
  };

  return (
    <Fragment>
      <div className="input-field col s12 m4">
        <select
          ref={selectRefs[0]}
          onChange={onCategoryChange}
          className="dropdown-scroll"
        >
          <option disabled selected>
            Категория товара
          </option>
          {catalogData.map((dat, i) => (
            <option key={i} value={dat.path}>
              {dat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="input-field col s12 m4">
        <select
          ref={selectRefs[1]}
          onChange={onOrderByChange}
          className="dropdown-scroll"
        >
          <option value="DEFAULT">По умолчанию</option>
          <option value="PRICE_DESC">Сначала дорогие</option>
          <option value="PRICE_ASC">Сначала дешевые</option>
        </select>
        <label>Сортировать по:</label>
      </div>
    </Fragment>
  );
};

export default Dropdowns;
