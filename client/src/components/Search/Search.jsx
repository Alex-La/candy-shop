/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  Fragment,
  useEffect,
  useRef,
  useContext,
  useMemo,
  useState,
} from "react";

import { Link } from "react-router-dom";

import M from "materialize-css";

import Context from "../../context/Context";

import { useQuery } from "@apollo/react-hooks";
import MAIN_NAMES_QUERY from "../../graphql/queries/mainNames";
import SUBSECTION_NAMES_QUERY from "../../graphql/queries/subsectionNames";
import NAMES_QUERY from "../../graphql/queries/names";
import MANUFACTURERS_QUERY from "../../graphql/queries/manufacturers";

import SearchProducts from "./SearchProducts";

const Search = () => {
  const autocompleteRef = useRef(null);

  const [instance, setInstance] = useState(null);

  const { searchInputValue, setSearchInputValue } = useContext(Context);

  const mains = useQuery(MAIN_NAMES_QUERY);
  const subsections = useQuery(SUBSECTION_NAMES_QUERY);
  const names = useQuery(NAMES_QUERY);
  const manufacturers = useQuery(MANUFACTURERS_QUERY);

  const mainsObject = useMemo(() => {
    if (mains.data) {
      return Object.fromEntries(
        mains.data.mainNames.map((name) => [name + " -> Категория", null])
      );
    }
  }, [mains.data]);

  const subsectionsObject = useMemo(() => {
    if (subsections.data) {
      return Object.fromEntries(
        subsections.data.subsectionNames.map((name) => [
          name + " -> Подкатегория",
          null,
        ])
      );
    }
  }, [subsections.data]);

  const namesObject = useMemo(() => {
    if (names.data) {
      return Object.fromEntries(names.data.names.map((name) => [name, null]));
    }
  }, [names.data]);

  const manufacturersObject = useMemo(() => {
    if (manufacturers.data) {
      return Object.fromEntries(
        manufacturers.data.manufacturers.map((name) => [
          name + " -> Производитель",
          null,
        ])
      );
    }
  }, [manufacturers.data]);

  useEffect(() => {
    if (
      mainsObject &&
      subsectionsObject &&
      namesObject &&
      manufacturersObject
    ) {
      const data = Object.assign(
        mainsObject,
        subsectionsObject,
        namesObject,
        manufacturersObject
      );
      if (instance) instance.updateData(data);
    }
  }, [
    mainsObject,
    subsectionsObject,
    namesObject,
    manufacturersObject,
    instance,
  ]);

  useEffect(() => {
    if (autocompleteRef.current) {
      const instance = M.Autocomplete.init(autocompleteRef.current, {
        minLength: 3,
        limit: 500,
        onAutocomplete: (data) => {
          setSearchInputValue(data);
        },
      });
      setInstance(instance);
    }
  }, [setSearchInputValue]);

  const onEnter = (e) => {
    if (e.key === "Enter") {
      setSearchInputValue(e.target.value);
      instance.close();
    }
  };

  return (
    <Fragment>
      <div className="section">
        <div className="row">
          <div className="col s12">
            <ul className="breadcrumb">
              <li>
                <Link to="/" className="orange-text">
                  Главная страница
                </Link>
              </li>
              <li className="black-text">Поиск</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="input-field col s12">
              <input
                onKeyDown={onEnter}
                placeholder="Поиск..."
                type="text"
                id="autocomplete-input"
                className="autocomplete"
                autoComplete="off"
                ref={autocompleteRef}
              />
              <label htmlFor="autocomplete-input">{searchInputValue}</label>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <SearchProducts />
      </div>
    </Fragment>
  );
};

export default Search;
