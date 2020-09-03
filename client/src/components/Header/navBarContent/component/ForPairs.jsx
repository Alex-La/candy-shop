/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, Fragment, useState } from "react";

import { useHistory } from "react-router-dom";

import M from "materialize-css";

import ForPairsContent from "../content/ForPairs";

const ForPairs = () => {
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
      history.push("/catalog/for-pairs");
    }
  };

  return (
    <Fragment>
      <a
        className="dropdown-trigger btn-large transparent under-line"
        data-target="ForPairs"
        ref={dropdownRef}
        onClick={handleClick}
      >
        Парам
      </a>

      <div id="ForPairs" className="dropdown-content dropdown-scroll">
        <ForPairsContent />
      </div>
    </Fragment>
  );
};

export default ForPairs;