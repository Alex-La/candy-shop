import React, { useEffect, useRef, useState } from "react";

import M from "materialize-css";

const FilterSideNav = ({ manufacturers, setManufacturersToFetch }) => {
  const sideNavRef = useRef(null);

  const [instance, setInstance] = useState(null);
  const [checkChange, setCheckChange] = useState(false);
  const [manMore, setManMore] = useState(false);

  const [manufacturersArray, setManufacturersArray] = useState([]);

  useEffect(() => {
    if (sideNavRef.current) {
      const instance = M.Sidenav.init(sideNavRef.current);
      setInstance(instance);
    }
  }, []);

  const handleShowButton = () => {
    setCheckChange(false);
    instance.close();
    sessionStorage.setItem("man_arr", JSON.stringify(manufacturersArray));
    setManufacturersToFetch(manufacturersArray);
  };

  const handleCheckChange = (e) => {
    setCheckChange(true);
    const { value, checked } = e.target;
    if (checked) {
      setManufacturersArray((arr) => [...arr, value]);
    } else {
      setManufacturersArray((arr) => arr.filter((item) => item !== value));
    }
  };

  const LessMore = (array, checker) => {
    if (checker)
      return array.map((val, i) => (
        <li key={i} style={{ marginLeft: 10 }}>
          <label>
            <input type="checkbox" value={val} onChange={handleCheckChange} />
            <span>{val}</span>
          </label>
        </li>
      ));
    else
      return array.slice(0, 7).map((val, i) => (
        <li key={i} style={{ marginLeft: 10 }}>
          <label>
            <input type="checkbox" value={val} onChange={handleCheckChange} />
            <span>{val}</span>
          </label>
        </li>
      ));
  };

  return (
    <ul id="filter-slide" className="sidenav dropdown-scroll" ref={sideNavRef}>
      <li style={{ marginLeft: 10 }}>
        <h5>Производитель</h5>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      {manufacturers && LessMore(manufacturers, manMore)}
      <li
        style={{ marginLeft: 10, cursor: "pointer" }}
        className="under-line blue-text"
        onClick={() => setManMore(!manMore)}
      >
        {manMore ? "Меньше" : "Больше"}
      </li>

      <div style={{ height: 20 }} />
      {checkChange && (
        <span className="show-filter">
          <button
            className="waves-effect waves-light btn orange"
            onClick={handleShowButton}
          >
            Показать
          </button>
        </span>
      )}
    </ul>
  );
};

export default FilterSideNav;
