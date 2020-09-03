import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Main from "../components/Main/Main";

import Search from "../components/Search/Search";

import ProcessingPolicy from "../components/Info/ProcessingPolicy/ProcessingPolicy";
import Dilvery from "../components/Info/Delivery/Delivery";
import Refund from "../components/Info/Refund/Refund";
import Privacy from "../components/Info/Privacy/Privacy";
import Contacts from "../components/Info/Contacts/Contacts";
import Info from "../components/Info/Info";

import Responses from "../components/Responses/Responses";
import NewResponse from "../components/Responses/NewResponse";

import Auth from "../components/Auth/SignIn/Auth";
import Register from "../components/Auth/SignIn/Register";
import ForgotPassword from "../components/Auth/SignIn/ForgotPassword";

import Catalog from "../components/Catalog/Catalog/Catalog";

import AllForSex from "../components/Catalog/AllForSex/AllForSex";
import CosmeticsWithPheromones from "../components/Catalog/AllForSex/CosmeticsWithPheromones/CosmeticsWithPheromones";
import PerfumesAndLubricantsForFemale from "../components/Catalog/AllForSex/CosmeticsWithPheromones/PerfumesAndLubricantsForFemale";
import PerfumesAndLubricantsForMale from "../components/Catalog/AllForSex/CosmeticsWithPheromones/PerfumesAndLubricantsForMale";
import PheromoneConcentrates from "../components/Catalog/AllForSex/CosmeticsWithPheromones/PheromoneConcentrates";
import BodyCareProductsCosmetics from "../components/Catalog/AllForSex/CosmeticsWithPheromones/BodyCareProductsCosmetics";
import PleasantTrifles from "../components/Catalog/AllForSex/PleasantTrifles/PleasantTrifles";
import Vape from "../components/Catalog/AllForSex/PleasantTrifles/Vape";
import ExcitatoryAgents from "../components/Catalog/AllForSex/PleasantTrifles/ExcitatoryAgents";
import Darsonval from "../components/Catalog/AllForSex/PleasantTrifles/Darsonval";
import ChristmasDecorations from "../components/Catalog/AllForSex/PleasantTrifles/ChristmasDecorations";
import IntimateHygiene from "../components/Catalog/AllForSex/PleasantTrifles/IntimateHygiene";
import MasksAntiseptics from "../components/Catalog/AllForSex/PleasantTrifles/MasksAntiseptics";
import Condoms from "../components/Catalog/AllForSex/PleasantTrifles/Condoms";
import Souvenirs from "../components/Catalog/AllForSex/PleasantTrifles/Souvenirs";
import BatteriesAndAccessories from "../components/Catalog/AllForSex/PleasantTrifles/BatteriesAndAccessories";
import EroticLiterature from "../components/Catalog/AllForSex/PleasantTrifles/EroticLiterature";
import EroticGames from "../components/Catalog/AllForSex/PleasantTrifles/EroticGames";
import EroticSets from "../components/Catalog/AllForSex/PleasantTrifles/EroticSets";
import SexFurnitureAndSwings from "../components/Catalog/AllForSex/SexFurnitureAndSwings/SexFurnitureAndSwings";
import SexSwings from "../components/Catalog/AllForSex/SexFurnitureAndSwings/SexSwings";
import SexMachines from "../components/Catalog/AllForSex/SexFurnitureAndSwings/SexMachines";
import SexFurniture from "../components/Catalog/AllForSex/SexFurnitureAndSwings/SexFurniture";
import Lubricants from "../components/Catalog/AllForSex/Lubricants/Lubricants";
import AnalLubricants from "../components/Catalog/AllForSex/Lubricants/AnalLubricants";
import Exciting from "../components/Catalog/AllForSex/Lubricants/Exciting";
import MassageOilsAndCandles from "../components/Catalog/AllForSex/Lubricants/MassageOilsAndCandles";
import WaterBased from "../components/Catalog/AllForSex/Lubricants/WaterBased";
import SilconeBased from "../components/Catalog/AllForSex/Lubricants/SilconeBased";
import Prolongators from "../components/Catalog/AllForSex/Lubricants/Prolongators";

// import ForFemale from "../components/Catalog/ForFemale/ForFemale";

import Manufacturers from "../components/Manufacturers/Manufacturers";

const renderPublicRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/info" exact component={Info} />
      <Route path="/info/pdp" component={ProcessingPolicy} />
      <Route path="/info/delivery" component={Dilvery} />
      <Route path="/info/refund" component={Refund} />
      <Route path="/info/privacy" component={Privacy} />
      <Route path="/info/contacts" component={Contacts} />
      <Route path="/responses" exact component={Responses} />
      <Route path="/responses/new" component={NewResponse} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/auth/forgot-password" component={ForgotPassword} />
      <Route path="/register" component={Register} />
      <Route path="/search" component={Search} />
      <Route path="/catalog" exact component={Catalog} />
      <Route path="/catalog/all-for-sex" exact component={AllForSex} />
      <Route
        path="/catalog/all-for-sex/cosmetics-with-pheromones"
        exact
        component={CosmeticsWithPheromones}
      />
      <Route
        path="/catalog/all-for-sex/cosmetics-with-pheromones/perfumes-and-lubricants-for-female"
        component={PerfumesAndLubricantsForFemale}
      />
      <Route
        path="/catalog/all-for-sex/cosmetics-with-pheromones/perfumes-and-lubricants-for-male"
        component={PerfumesAndLubricantsForMale}
      />
      <Route
        path="/catalog/all-for-sex/cosmetics-with-pheromones/pheromone-concentrates"
        component={PheromoneConcentrates}
      />
      <Route
        path="/catalog/all-for-sex/cosmetics-with-pheromones/body-care-products-cosmetics"
        component={BodyCareProductsCosmetics}
      />
      <Route
        path="/catalog/all-for-sex/pleasant-trifles"
        exact
        component={PleasantTrifles}
      />
      <Route
        path="/catalog/all-for-sex/pleasant-trifles/vape"
        component={Vape}
      />
      <Route
        path="/catalog/all-for-sex/pleasant-trifles/excitatory-agents"
        component={ExcitatoryAgents}
      />
      <Route
        path="/catalog/all-for-sex/pleasant-trifles/darsonval"
        component={Darsonval}
      />
      <Route
        path="/catalog/all-for-sex/pleasant-trifles/christmas-decorations"
        component={ChristmasDecorations}
      />
      <Route
        path="/catalog/all-for-sex/pleasant-trifles/intimate-hygiene"
        component={IntimateHygiene}
      />
      <Route
        path="/catalog/all-for-sex/pleasant-trifles/masks-antiseptics"
        component={MasksAntiseptics}
      />
      <Route
        path="/catalog/all-for-sex/pleasant-trifles/condoms"
        component={Condoms}
      />
      <Route
        path="/catalog/all-for-sex/pleasant-trifles/souvenirs"
        component={Souvenirs}
      />
      <Route
        path="/catalog/all-for-sex/pleasant-trifles/batteries-and-accessories"
        component={BatteriesAndAccessories}
      />
      <Route
        path="/catalog/all-for-sex/pleasant-trifles/erotic-literature"
        component={EroticLiterature}
      />
      <Route
        path="/catalog/all-for-sex/pleasant-trifles/erotic-games"
        component={EroticGames}
      />
      <Route
        path="/catalog/all-for-sex/pleasant-trifles/erotic-sets"
        component={EroticSets}
      />
      <Route
        path="/catalog/all-for-sex/sex-furniture-and-swings"
        exact
        component={SexFurnitureAndSwings}
      />
      <Route
        path="/catalog/all-for-sex/sex-furniture-and-swings/sex-swings"
        component={SexSwings}
      />
      <Route
        path="/catalog/all-for-sex/sex-furniture-and-swings/sex-machines"
        component={SexMachines}
      />
      <Route
        path="/catalog/all-for-sex/sex-furniture-and-swings/sex-furniture"
        component={SexFurniture}
      />
      <Route
        path="/catalog/all-for-sex/lubricants"
        exact
        component={Lubricants}
      />
      <Route
        path="/catalog/all-for-sex/lubricants/anal-lubricants"
        component={AnalLubricants}
      />
      <Route
        path="/catalog/all-for-sex/lubricants/exciting"
        component={Exciting}
      />
      <Route
        path="/catalog/all-for-sex/lubricants/massage-oils-and-candles"
        component={MassageOilsAndCandles}
      />
      <Route
        path="/catalog/all-for-sex/lubricants/water-based"
        component={WaterBased}
      />
      <Route
        path="/catalog/all-for-sex/lubricants/silicone-based"
        component={SilconeBased}
      />
      <Route
        path="/catalog/all-for-sex/lubricants/prolongators"
        component={Prolongators}
      />
      <Route path="/catalog/manufacturer" component={Manufacturers} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default renderPublicRoutes;
