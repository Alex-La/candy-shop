import React, { useEffect, useRef } from "react";

import M from "materialize-css";

const FilterSideNav = () => {
  const sideNavRef = useRef(null);

  useEffect(() => {
    if (sideNavRef.current) M.Sidenav.init(sideNavRef.current);
  }, []);

  return (
    <ul id="filter-slide" className="sidenav" ref={sideNavRef}>
      <li style={{ marginLeft: 10 }}>
        <h5>Производитель</h5>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <a className="subheader">Subheader</a>
      </li>
    </ul>
  );
};

export default FilterSideNav;
