import React, { useContext, useState, Fragment } from "react";

import Context from "../../context/Context";

import { useQuery } from "@apollo/react-hooks";
import SEARCH_PRODUCTS_QUERY from "../../graphql/queries/searchProducts";

import Filter from "../assets/Filter/Filter";
import ProductCont from "../assets/Product/ProductCont";
import LoadMoreButton from "../assets/Filter/LoadMoreButton";
import FixedToCartButton from "../assets/FloatActionBtn/FixedToCartButton";

const catalogData = [
  {
    path: "/search",
    name: "Поиск",
  },
];

const SearchProducts = () => {
  const { searchInputValue, filter } = useContext(Context);

  const [loadingOnButton, setLoadingOnButton] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [radio, setRadio] = useState("block");
  const [orderBy, setOrderBy] = useState("DEFAULT");

  const { data, loading, fetchMore, refetch } = useQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        filter,
        name: searchInputValue,
        orderBy,
        priceRange: priceRange.length !== 0 ? priceRange : [],
      },
    }
  );

  return (
    <Fragment>
      <Filter
        setLoadingOnButton={setLoadingOnButton}
        catalogData={catalogData}
        setPriceRange={setPriceRange}
        radio={radio}
        setRadio={setRadio}
        setOrderBy={setOrderBy}
        price_range={
          data && data.searchProducts && data.searchProducts.price_range
        }
      />

      <ProductCont
        data={data && data.searchProducts && data.searchProducts.products}
        refetch={data && data.searchProducts.refetch_require && refetch}
        loading={loading}
        loadingOnButton={loadingOnButton}
        radio={radio}
      />

      <LoadMoreButton
        cursor={data && data.searchProducts && data.searchProducts.cursor}
        hasMore={data && data.searchProducts && data.searchProducts.hasMore}
        loading={loading}
        setLoadingOnButton={setLoadingOnButton}
        fetchMore={fetchMore}
      />

      <FixedToCartButton />
    </Fragment>
  );
};

export default SearchProducts;
