import React, { useRef, useEffect, Fragment } from "react";

import { Link } from "react-router-dom";

import M from "materialize-css";

import ForPairsContent from "../content/ForPairs";

const ForPairs = () => {
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
        to="/catalog/for-pairs"
        className="dropdown-trigger btn-large transparent under-line"
        data-target="ForPairs"
        ref={dropdownRef}
      >
        Парам
      </Link>

      <div id="ForPairs" className="dropdown-content dropdown-scroll">
        <ForPairsContent />
      </div>
    </Fragment>
  );
};

export default ForPairs;
