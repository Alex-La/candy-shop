import React from "react";

import UserContext from "../context/UserContext";

import { useQuery } from "@apollo/react-hooks";
import ME_QUERY from "../graphql/queries/me";

import Preloader from "../components/assets/Preloader/Preloader";
import ProductModal from "../components/assets/ProductModal/ProductModal";

import renderPrivateRoutes from "./renderPrivateRoutes";
import renderPublicRoutes from "./renderPublicRoutes";

const Routes = () => {
  const { data, loading } = useQuery(ME_QUERY);

  const { me } = data || {};

  if (loading) return <Preloader />;

  return (
    <UserContext.Provider value={me}>
      <ProductModal />
      {me ? renderPrivateRoutes(me) : renderPublicRoutes()}
    </UserContext.Provider>
  );
};

export default Routes;
