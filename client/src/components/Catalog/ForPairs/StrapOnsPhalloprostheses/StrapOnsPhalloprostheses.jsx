import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";

import Context from "../../../../context/Context";

import { useQuery } from "@apollo/react-hooks";
import PRODUCTS_QUERY from "../../../../graphql/queries/products";

import Filter from "../../../assets/Filter/Filter";
import ProductCont from "../../../assets/Product/ProductCont";
import LoadMoreButton from "../../../assets/Filter/LoadMoreButton";
import FixedToCartButton from "../../../assets/FloatActionBtn/FixedToCartButton";
import CategoryCard from "../../../assets/CategoryCard/CategoryCard";

const catalogData = [
  {
    photo: "/static/beltless.jpg",
    path: "/catalog/for-pairs/strap-ons-phalloprostheses/beltless",
    name: "Безремневые",
  },
  {
    photo: "/static/female_staps.jpg",
    path: "/catalog/for-pairs/strap-ons-phalloprostheses/female-strapon",
    name: "Женские страпоны",
  },
  {
    photo: "/static/male_staps.jpg",
    path: "/catalog/for-pairs/strap-ons-phalloprostheses/male-strapon",
    name: "Мужские страпоны",
  },
  {
    photo: "/static/panties.jpg",
    path:
      "/catalog/for-pairs/strap-ons-phalloprostheses/panties-and-attachments",
    name: "Трусики и насадки",
  },
  {
    photo: "/static/fallopros.jpg",
    path: "/catalog/for-pairs/strap-ons-phalloprostheses/falloprostheses",
    name: "Фаллопротезы",
  },
];

const ForPairs = () => {
  const [loadingOnButton, setLoadingOnButton] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [radio, setRadio] = useState("block");
  const [orderBy, setOrderBy] = useState("DEFAULT");

  const { filter } = useContext(Context);

  const { data, loading, fetchMore, refetch } = useQuery(PRODUCTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      filter,
      main: ["Страпоны, фаллопротезы"],
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
                <Link to="/catalog/for-pairs" className="orange-text">
                  BDSM
                </Link>
              </li>
              <li className="black-text">
                {" "}
                {window.innerWidth <= 425 && <br />}
                Страпоны, фаллопротезы
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            {catalogData.map((dat, index) => (
              <CategoryCard dat={dat} key={index} />
            ))}
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

export default ForPairs;
