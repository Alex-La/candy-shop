import React, { useRef, useEffect, Fragment } from "react";

import { Link } from "react-router-dom";

import M from "materialize-css";

import ForMaleContent from "../content/ForMale";

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
        to="/catalog/for-male"
        className="dropdown-trigger btn-large transparent under-line"
        data-target="ForMale"
        ref={dropdownRef}
      >
        Для мужчин
      </Link>

      <div id="ForMale" className="dropdown-content dropdown-scroll">
        <ForMaleContent />
      </div>
    </Fragment>
  );
};

export default AllForSex;
