/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, Fragment, useState } from "react";

import { useHistory } from "react-router-dom";

import M from "materialize-css";

import AllForSexContent from "../content/AllForSex";

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
      history.push("/catalog/all-for-sex");
    }
  };

  return (
    <Fragment>
      <a
        onClick={handleClick}
        className="dropdown-trigger btn-large transparent under-line"
        data-target="AllForSex"
        ref={dropdownRef}
      >
        Всё для секса
      </a>

      <div id="AllForSex" className="dropdown-content dropdown-scroll">
        <AllForSexContent />
      </div>
    </Fragment>
  );
};

export default AllForSex;
