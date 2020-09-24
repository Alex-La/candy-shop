import React, { useRef, useEffect, Fragment } from "react";

import { Link } from "react-router-dom";

import M from "materialize-css";

import ForFemaleContent from "../content/ForFemale";

const ForFemale = () => {
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
        to="/catalog/for-female"
        className="dropdown-trigger btn-large transparent under-line"
        data-target="ForFemale"
        ref={dropdownRef}
      >
        Для женщин
      </Link>

      <div id="ForFemale" className="dropdown-content dropdown-scroll">
        <ForFemaleContent />
      </div>
    </Fragment>
  );
};

export default ForFemale;
