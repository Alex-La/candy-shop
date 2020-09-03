/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, Fragment, useState } from "react";

import { useHistory } from "react-router-dom";

import M from "materialize-css";

import InformationContent from "../content/Information";

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
      history.push("/info");
    }
  };

  return (
    <Fragment>
      <a
        className="dropdown-trigger btn-large transparent under-line right"
        data-target="Info"
        ref={dropdownRef}
        onClick={handleClick}
      >
        Информация
      </a>

      <div id="Info" className="dropdown-content dropdown-scroll">
        <InformationContent />
      </div>
    </Fragment>
  );
};

export default AllForSex;
