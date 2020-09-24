/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import AllForSex from "./navBarContent/component/AllForSex";
import ForFemale from "./navBarContent/component/ForFemale";
import ForMale from "./navBarContent/component/ForMale";
import ForPairs from "./navBarContent/component/ForPairs";
import Clothes from "./navBarContent/component/Clothes";
import Info from "./navBarContent/component/Information";

const NavContent = () => {
  return (
    <div
      className="nav-content grey darken-4 hide-on-med-and-down"
      style={{ paddingBottom: 2 }}
    >
      <ForFemale />
      <ForMale />
      <AllForSex />
      <ForPairs />
      <Clothes />
      <Info />
    </div>
  );
};

export default NavContent;
