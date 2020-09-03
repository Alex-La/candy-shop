/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, Fragment, useState } from "react";

import { useHistory } from "react-router-dom";

import M from "materialize-css";

import ClothesContent from "../content/Clothes";

const Clothes = () => {
  const [counter, setCounter] = useState(false);

  const history = useHistory();

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (dropdownRef.current) {
      M.Dropdown.init(dropdownRef.current, {
        constrainWidth: false,
        coverTrigger: false,
        onOpenEnd: () => setCounter(true),
        onCloseEnd: () => setCounter(false),
      });
    }
  }, []);

  const handleClick = () => {
    if (counter) {
      history.push("/catalog/erotic-clothes");
    }
  };

  return (
    <Fragment>
      <a
        className="dropdown-trigger btn-large transparent under-line"
        data-target="Clothes"
        ref={dropdownRef}
        onClick={handleClick}
      >
        Одежда
      </a>

      <div id="Clothes" className="dropdown-content dropdown-scroll">
        <ClothesContent />
      </div>
    </Fragment>
  );
};

export default Clothes;
