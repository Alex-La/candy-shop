/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, Fragment, useState } from "react";

import { useHistory } from "react-router-dom";

import M from "materialize-css";

import ForFemaleContent from "../content/ForFemale";

const ForFemale = () => {
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
      history.push("/catalog/for-female");
    }
  };

  return (
    <Fragment>
      <a
        className="dropdown-trigger btn-large transparent under-line"
        data-target="ForFemale"
        ref={dropdownRef}
        onClick={handleClick}
      >
        Женщинам
      </a>

      <div id="ForFemale" className="dropdown-content dropdown-scroll">
        <ForFemaleContent />
      </div>
    </Fragment>
  );
};

export default ForFemale;
