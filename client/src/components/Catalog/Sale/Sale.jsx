import React, { Fragment, useState, useContext } from "react";
import Context from "../../../context/Context";

import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import PRODUCTS_QUERY from "../../../graphql/queries/products";

import Filter from "../../assets/Filter/Filter";
import ProductCont from "../../assets/Product/ProductCont";
import LoadMoreButton from "../../assets/Filter/LoadMoreButton";
import FixedToCartButton from "../../assets/FloatActionBtn/FixedToCartButton";

const catalogData = [
  {
    name: "",
  },
];

const Sale = () => {
  const [loadingOnButton, setLoadingOnButton] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [radio, setRadio] = useState("block");
  const [orderBy, setOrderBy] = useState("DEFAULT");

  const { filter } = useContext(Context);

  const { data, loading, fetchMore, refetch } = useQuery(PRODUCTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      filter,
      sale: true,
      orderBy,
      priceRange: priceRange.length !== 0 ? priceRange : [],
    },
  });

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
              <li>
                <Link to="/catalog" className="orange-text">
                  Каталог
                  {window.innerWidth <= 375 && <br />}
                </Link>
              </li>
              <li className="black-text">Распродажа</li>
            </ul>
          </div>
        </div>
      </div>

      <Filter
        setLoadingOnButton={setLoadingOnButton}
        catalogData={catalogData}
        setPriceRange={setPriceRange}
        radio={radio}
        setRadio={setRadio}
        setOrderBy={setOrderBy}
        price_range={data && data.products && data.products.price_range}
      />

      <ProductCont
        data={data && data.products && data.products.products}
        refetch={data && data.products.refetch_require && refetch}
        loading={loading}
        loadingOnButton={loadingOnButton}
        radio={radio}
      />

      <LoadMoreButton
        cursor={data && data.products && data.products.cursor}
        hasMore={data && data.products && data.products.hasMore}
        loading={loading}
        setLoadingOnButton={setLoadingOnButton}
        fetchMore={fetchMore}
      />

      <FixedToCartButton />
    </Fragment>
  );
};

export default Sale;
