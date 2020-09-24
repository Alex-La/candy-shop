import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import PRODUCTS_QUERY from "../../../../graphql/queries/products";

import Filter from "../../../assets/Filter/Filter";
import ProductCont from "../../../assets/Product/ProductCont";
import LoadMoreButton from "../../../assets/Filter/LoadMoreButton";
import FixedToCartButton from "../../../assets/FloatActionBtn/FixedToCartButton";

const catalogData = [
  {
    path:
      "/catalog/all-for-sex/cosmetics-with-pheromones/perfumes-and-lubricants-for-female",
    name: "Духи и смазки для женщин",
  },
  {
    path:
      "/catalog/all-for-sex/cosmetics-with-pheromones/perfumes-and-lubricants-for-male",
    name: "Духи и смазки для мужчин",
  },
  {
    path:
      "/catalog/all-for-sex/cosmetics-with-pheromones/pheromone-concentrates",
    name: "Концентраты феромонов",
  },
  {
    path:
      "/catalog/all-for-sex/cosmetics-with-pheromones/body-care-products-cosmetics",
    name: "Средства по уходу за телом, косметика",
  },
];

const BodyCareProductsCosmetics = () => {
  const [loadingOnButton, setLoadingOnButton] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [radio, setRadio] = useState("block");
  const [orderBy, setOrderBy] = useState("DEFAULT");

  const { data, loading, fetchMore, refetch } = useQuery(PRODUCTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      subsection: "Средства по уходу за телом, косметика",
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
                </Link>
              </li>
              <li>
                <Link to="/catalog/all-for-sex" className="orange-text">
                  Принадлежности
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog/all-for-sex/cosmetics-with-pheromones"
                  className="orange-text"
                >
                  Косметика с феромонами
                </Link>
              </li>
              <li className="black-text">
                Средства по уходу за телом, косметика
              </li>
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

export default BodyCareProductsCosmetics;
