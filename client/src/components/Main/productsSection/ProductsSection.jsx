import React, { Fragment } from "react";

import Clothes from "./Clothes";
import AllForSex from "./AllForSex";
import ForMale from "./ForMale";
import ForPairs from "./ForPairs";
import ForFemale from "./ForFemale";

const ProductsSection = () => {
  return (
    <Fragment>
      <div className="section grey lighten-5">
        <div className="container">
          <Clothes />
        </div>
      </div>
      <div className="section">
        <div className="container">
          <AllForSex />
        </div>
      </div>
      <div className="section grey lighten-5">
        <div className="container">
          <ForMale />
        </div>
      </div>
      <div className="section">
        <div className="container">
          <ForPairs />
        </div>
      </div>
      <div className="section grey lighten-5">
        <div className="container">
          <ForFemale />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsSection;
