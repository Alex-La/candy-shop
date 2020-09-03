import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import Filter from "../../assets/Filter/Filter";

import SALES_QUERY from "../../../graphql/queries/sales";

const Sale = () => {
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
              <li>
                <Link to="/catalog" className="orange-text">
                  Каталог
                </Link>
              </li>
              <li className="black-text">Cкидки</li>
            </ul>
          </div>
        </div>
      </div>

      <Filter QUERY={SALES_QUERY} />
    </Fragment>
  );
};

export default Sale;
