/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  Fragment,
  useEffect,
  useState,
  createRef,
  useContext,
} from "react";
import Context from "../../../context/Context";

import { useQuery } from "@apollo/react-hooks";
import DATA_TO_FILTER_QUERY from "../../../graphql/queries/dataToFilter";

import M from "materialize-css";

import { useHistory } from "react-router-dom";

const Filt = () => {
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);

  const [dropDownRefs, setDropDownRefs] = useState([]);

  const { setFilter } = useContext(Context);

  const { data, loading } = useQuery(DATA_TO_FILTER_QUERY);
  const history = useHistory();

  useEffect(() => {
    setDropDownRefs((dropDownRef) =>
      Array(3)
        .fill()
        .map((_, i) => dropDownRef[i] || createRef())
    );
  }, []);

  useEffect(() => {
    for (let i in dropDownRefs) {
      if (dropDownRefs[i].current) {
        M.Dropdown.init(dropDownRefs[i].current, {
          closeOnClick: false,
          constrainWidth: false,
        });
      }
    }
  }, [dropDownRefs]);

  useEffect(() => {
    setFilter({
      manufacturers,
      colors,
      materials,
    });
  }, [colors, materials, manufacturers, setFilter]);

  const onColorsChange = (e) => {
    const val = e.target.value;
    if (e.target.checked) setColors((col) => [...col, val]);
    else setColors((col) => col.filter((item) => item !== val));
  };

  const onMaterialsChange = (e) => {
    const val = e.target.value;
    if (e.target.checked) setMaterials((mat) => [...mat, val]);
    else setMaterials((mat) => mat.filter((item) => item !== val));
  };

  const onManufacturersChange = (e) => {
    const val = e.target.value;
    if (e.target.checked) setManufacturers((man) => [...man, val]);
    else setManufacturers((man) => man.filter((item) => item !== val));
  };

  return (
    <Fragment>
      {history.location.pathname !== "/catalog/manufacturer" && (
        <div style={{ marginTop: 15 }} className="col s12 m4">
          <button
            className={`dropdown-trigger btn-flat ${loading && "disabled"}`}
            data-target="manufacturers"
            ref={dropDownRefs[0]}
          >
            <i className="material-icons right">expand_more</i>
            Производитель
          </button>

          <ul id="manufacturers" className="dropdown-content">
            {data &&
              data.dataToFilter.manufacturers.map((man, i) => (
                <li key={i}>
                  <a>
                    <label>
                      <input
                        type="checkbox"
                        value={man}
                        onChange={onManufacturersChange}
                      />
                      <span>{man}</span>
                    </label>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      )}

      <div style={{ marginTop: 15 }} className="col s12 m4">
        <button
          className={`dropdown-trigger btn-flat ${loading && "disabled"}`}
          data-target="colors"
          ref={dropDownRefs[1]}
        >
          <i className="material-icons right">expand_more</i>
          Цвет
        </button>

        <ul id="colors" className="dropdown-content">
          {data &&
            data.dataToFilter.colors.slice(1).map((color, i) => (
              <li key={i}>
                <a>
                  <label>
                    <input
                      type="checkbox"
                      value={color}
                      onChange={onColorsChange}
                    />
                    <span>{color}</span>
                  </label>
                </a>
              </li>
            ))}
        </ul>
      </div>

      <div style={{ marginTop: 15 }} className="col s12 m4">
        <button
          className={`dropdown-trigger btn-flat ${loading && "disabled"}`}
          data-target="materials"
          ref={dropDownRefs[2]}
        >
          <i className="material-icons right">expand_more</i>
          Материал
        </button>

        <ul id="materials" className="dropdown-content">
          {data &&
            data.dataToFilter.materials.slice(1).map((mat, i) => (
              <li key={i}>
                <a>
                  <label>
                    <input
                      type="checkbox"
                      value={mat}
                      onChange={onMaterialsChange}
                    />
                    <span>{mat}</span>
                  </label>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Filt;
