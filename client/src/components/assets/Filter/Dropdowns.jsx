/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect, createRef } from "react";

import { Link, withRouter, useHistory } from "react-router-dom";

import M from "materialize-css";

const Dropdowns = ({ catalogData, setOrderBy, setLoadingOnButton }) => {
  const [dropDownRefs, setDropDownRefs] = useState([]);
  const [sortMethod, setSortMethod] = useState("Сортировать по:");

  const history = useHistory();

  useEffect(() => {
    setDropDownRefs((dropDownRef) =>
      Array(2)
        .fill()
        .map((_, i) => dropDownRef[i] || createRef())
    );
  }, []);

  useEffect(() => {
    for (let i in dropDownRefs) {
      if (dropDownRefs[i].current) {
        M.Dropdown.init(dropDownRefs[i].current);
      }
    }
  }, [dropDownRefs]);

  const onCategoryChange = (name) => {
    sessionStorage.setItem("manufacturer", name);
  };

  const onOrderByChange = (event, value) => {
    event.preventDefault();
    setLoadingOnButton(false);
    setOrderBy(value);

    switch (value) {
      case "PRICE_ASC":
        setSortMethod("Сначала дешевые");
        break;
      case "PRICE_DESC":
        setSortMethod("Сначала дорогие");
        break;
      default:
        setSortMethod("По умолчанию");
    }
  };

  return (
    <Fragment>
      {history.location.pathname !== "/search" && (
        <div className="col s12 m4">
          <button
            style={{ marginTop: 15 }}
            id="category"
            className="dropdown-trigger btn-flat"
            data-target="dropdown1"
            ref={dropDownRefs[0]}
          >
            <i className="material-icons right">expand_more</i>
            {history.location.pathname === "/catalog/manufacturer"
              ? "Производитель"
              : "Категория товара"}
          </button>
          <ul id="dropdown1" className="dropdown-content">
            {catalogData.map((dat, i) => (
              <li key={i}>
                <Link to={dat.path} onClick={() => onCategoryChange(dat.name)}>
                  {dat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="input-field col s12 m4">
        <button
          id="category"
          className="dropdown-trigger btn-flat"
          data-target="dropdown2"
          ref={dropDownRefs[1]}
        >
          <i className="material-icons right">expand_more</i>
          {sortMethod}
        </button>
        <ul id="dropdown2" className="dropdown-content">
          <li>
            <a href="" onClick={(e) => onOrderByChange(e, "DEFAULT")}>
              По умолчанию
            </a>
          </li>
          <li>
            <a href="" onClick={(e) => onOrderByChange(e, "PRICE_DESC")}>
              Сначала дорогие
            </a>
          </li>
          <li>
            <a href="" onClick={(e) => onOrderByChange(e, "PRICE_ASC")}>
              Сначала дешевые
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default withRouter(Dropdowns);
