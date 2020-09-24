import React, { useRef, useEffect, Fragment } from "react";

import { Link } from "react-router-dom";

import M from "materialize-css";

import AllForSexContent from "../content/AllForSex";

const AllForSex = () => {
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
        to="/catalog/all-for-sex"
        className="dropdown-trigger btn-large transparent under-line"
        data-target="AllForSex"
        ref={dropdownRef}
      >
        Принадлежности
      </Link>

      <div id="AllForSex" className="dropdown-content dropdown-scroll">
        <AllForSexContent />
      </div>
    </Fragment>
  );
};

export default AllForSex;
