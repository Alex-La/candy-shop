/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useRef, useContext } from "react";

import { Link } from "react-router-dom";

import M from "materialize-css";

import Context from "../../context/Context";

const Search = () => {
  const autocompleteRef = useRef(null);

  const { searchInputValue } = useContext(Context);

  useEffect(() => {
    if (autocompleteRef.current) {
      M.Autocomplete.init(autocompleteRef.current, {
        data: {
          Apple: null,
          Data: null,
        },
      });
    }
  }, []);

  return (
    <Fragment>
      <div className="section">
        <div className="row">
          <div className="col s12">
            <ul className="breadcrumb">
              <li>
                <Link to="/" className="orange-text">
                  Главная страница
                </Link>
              </li>
              <li className="black-text">Поиск</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="input-field col s10">
              <input
                type="text"
                id="autocomplete-input"
                className="autocomplete"
                autoComplete="off"
                ref={autocompleteRef}
              />
              <label for="autocomplete-input">{searchInputValue}</label>
            </div>
            <div className="col s2">
              <a
                className="waves-effect waves-light btn orange"
                style={{ marginTop: 20 }}
              >
                <i className="material-icons">search</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
