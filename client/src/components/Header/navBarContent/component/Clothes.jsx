/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, Fragment } from "react";

import { Link } from "react-router-dom";

import M from "materialize-css";

import ClothesContent from "../content/Clothes";

const Clothes = () => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (dropdownRef.current) {
      M.Dropdown.init(dropdownRef.current, {
        constrainWidth: false,
        coverTrigger: false,
        hover: true,
      });
    }
  }, []);

  return (
    <Fragment>
      <Link
        to="/catalog/erotic-clothes"
        className="dropdown-trigger btn-large transparent under-line"
        data-target="Clothes"
        ref={dropdownRef}
      >
        Одежда
      </Link>

      <div id="Clothes" className="dropdown-content dropdown-scroll">
        <ClothesContent />
      </div>
    </Fragment>
  );
};

export default Clothes;
