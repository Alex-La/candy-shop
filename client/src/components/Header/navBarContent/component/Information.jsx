import React, { useRef, useEffect, Fragment } from "react";

import { Link } from "react-router-dom";

import M from "materialize-css";

import InformationContent from "../content/Information";

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
        to="/info"
        className="dropdown-trigger btn-large transparent under-line right"
        data-target="Info"
        ref={dropdownRef}
      >
        Информация
      </Link>

      <div id="Info" className="dropdown-content dropdown-scroll">
        <InformationContent />
      </div>
    </Fragment>
  );
};

export default AllForSex;
