import React, { Fragment } from "react";

import AllForSex from "./AllForSex";
import ForFemale from "./ForFemale";
import ForMale from "./ForMale";
import ForPairs from "./ForPairs";
import Clothes from "./Clothes";

import { Link } from "react-router-dom";

const Catalog = () => {
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
              <li className="black-text">Каталог</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <AllForSex />
            <ForFemale />
            <ForMale />
            <ForPairs />
            <Clothes />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Catalog;
