/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useContext } from "react";

import M from "materialize-css";

import Context from "../../../context/Context";

import AllForSex from "./AllForSex";
import ForFemale from "./ForFemale";
import ForMale from "./ForMale";
import ForPairs from "./ForPairs";
import Clothes from "./Clothes";
import Information from "./Information";
import IconNav from "./IconNav";

import { Link } from "react-router-dom";

const SideNav = () => {
  const sideNavRef = useRef(null);

  const { setInstance } = useContext(Context);

  useEffect(() => {
    if (sideNavRef.current) {
      M.Collapsible.init(sideNavRef.current);
      const instance = M.Sidenav.init(sideNavRef.current);
      setInstance(instance);
    }
  }, [setInstance]);

  return (
    <ul
      id="slide-out"
      className="collapsible sidenav grey darken-4"
      ref={sideNavRef}
      style={{ transform: "translateX(-105%)" }}
    >
      <li>
        <a href="#!" className="white-text">
          <h4>Меню</h4>
        </a>
      </li>
      <IconNav />
      <ForFemale />
      <ForMale />
      <AllForSex />
      <ForPairs />
      <Clothes />
      <Information />
      <li>
        <Link to="/catalog/sale" className="white-text">
          Sale(-50%)
        </Link>
      </li>
    </ul>
  );
};

export default SideNav;
