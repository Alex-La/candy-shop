import React, { useContext } from "react";

import Context from "../../context/Context";
import { useEffect } from "react";

const SearchProducts = () => {
  const { searchInputValue } = useContext(Context);

  useEffect(() => {
    console.log(searchInputValue);
  }, [searchInputValue]);

  return <div></div>;
};

export default SearchProducts;
