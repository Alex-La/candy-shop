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
    path: "/catalog/for-female/falloimetators/anal-vaginal-phalluses",
    name: "Анально-вагинальные",
  },
  {
    path: "/catalog/for-female/falloimetators/vaginal-plugs",
    name: "Вагинальные пробки",
  },
  {
    path: "/catalog/for-female/falloimetators/giants",
    name: "Гиганты",
  },
  {
    path: "/catalog/for-female/falloimetators/bilateral-phalluses",
    name: "Двусторонние",
  },
  {
    path: "/catalog/for-female/falloimetators/classic-dildos",
    name: "Классичиские дилдо",
  },
  {
    path: "/catalog/for-female/falloimetators/realistic-phalluses",
    name: "Реалистичные",
  },
  {
    path: "/catalog/for-female/falloimetators/glass-phalluses",
    name: "Стеклянные фаллосы",
  },
  {
    path: "/catalog/for-female/falloimetators/g-spot-stimulants-phalluses",
    name: "Стимуляторы точки G",
  },
];

const VaginalPlugs = () => {
  const [loadingOnButton, setLoadingOnButton] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [radio, setRadio] = useState("block");
  const [orderBy, setOrderBy] = useState("DEFAULT");

  const { data, loading, fetchMore, refetch } = useQuery(PRODUCTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      subsection: "Вагинальные пробки",
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
                <Link to="/catalog/for-female" className="orange-text">
                  Для женщин
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog/for-female/falloimetators"
                  className="orange-text"
                >
                  {window.innerWidth <= 425 && <br />}
                  Фаллоимитаторы
                </Link>
              </li>
              <li className="black-text">Вагинальные пробки</li>
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

export default VaginalPlugs;
