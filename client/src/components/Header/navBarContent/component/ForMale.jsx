/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, Fragment, useState } from "react";

import { useHistory } from "react-router-dom";

import M from "materialize-css";

import ForMaleContent from "../content/ForMale";

const AllForSex = () => {
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
      history.push("/catalog/for-male");
    }
  };

  return (
    <Fragment>
      <a
        className="dropdown-trigger btn-large transparent under-line"
        data-target="ForMale"
        ref={dropdownRef}
        onClick={handleClick}
      >
        Мужчинам
      </a>

      <div id="ForMale" className="dropdown-content dropdown-scroll">
        <ForMaleContent />
      </div>
    </Fragment>
  );
};

export default AllForSex;
