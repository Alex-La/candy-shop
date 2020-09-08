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

import PersonalArea from "../components/Auth/PersonalArea/PresonalArea";
import PersonalData from "../components/Auth/PersonalArea/PersonalData";

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

import ForFemale from "../components/Catalog/ForFemale/ForFemale";
import AnalToys from "../components/Catalog/ForFemale/AnalToys/AnalToys";
import AnalVibrators from "../components/Catalog/ForFemale/AnalToys/AnalVibrators";
import AnalPlugs from "../components/Catalog/ForFemale/AnalToys/AnalPlugs";
import AnalStimulatorsWithoutVibration from "../components/Catalog/ForFemale/AnalToys/AnalStimulatorsWithoutVibration";
import AnalDildos from "../components/Catalog/ForFemale/AnalToys/AnalDildos";
import AnalBeadsAndChains from "../components/Catalog/ForFemale/AnalToys/AnalBeadsAndChains";
import InflatableExpanders from "../components/Catalog/ForFemale/AnalToys/InflatableExpanders";
import GlassAndMetal from "../components/Catalog/ForFemale/AnalToys/GlassAndMetal";
import Fisting from "../components/Catalog/ForFemale/AnalToys/Fisting";
import Dildos from "../components/Catalog/ForFemale/Dildos/Dildos";
import AnalVaginalPhalluses from "../components/Catalog/ForFemale/Dildos/AnalVaginalPhalluses";
import VaginalPlugs from "../components/Catalog/ForFemale/Dildos/VaginalPlugs";
import Gigants from "../components/Catalog/ForFemale/Dildos/Gigants";
import BilateralPhalluses from "../components/Catalog/ForFemale/Dildos/BilateralPhalluses";
import ClassicDildos from "../components/Catalog/ForFemale/Dildos/ClassicDildos";
import RealisticPhalluses from "../components/Catalog/ForFemale/Dildos/RealisticPhalluses";
import GlassPhalluses from "../components/Catalog/ForFemale/Dildos/GlassPhalluses";
import GSpotStimulants from "../components/Catalog/ForFemale/Dildos/GSpotStimulants";

import Manufacturers from "../components/Manufacturers/Manufacturers";

const renderPrivateRoutes = () => {
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
      <Route path="/auth" render={() => <Redirect to="/personal" />} />
      <Route path="/personal" exact component={PersonalArea} />
      <Route path="/personal/profile" component={PersonalData} />
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
      <Route path="/catalog/for-female" component={ForFemale} />
      <Route exact path="/catalog/for-female/anal-toys" component={AnalToys} />
      <Route
        path="/catalog/for-female/anal-toys/anal-vibrators"
        component={AnalVibrators}
      />
      <Route
        path="/catalog/for-female/anal-toys/anal-plugs"
        component={AnalPlugs}
      />
      <Route
        path="/catalog/for-female/anal-toys/anal-stimulators-without-vibration"
        component={AnalStimulatorsWithoutVibration}
      />
      <Route
        path="/catalog/for-female/anal-toys/anal-dildos"
        component={AnalDildos}
      />
      <Route
        path="/catalog/for-female/anal-toys/anal-beads-and-chains"
        component={AnalBeadsAndChains}
      />
      <Route
        path="/catalog/for-female/anal-toys/inflatable-expanders"
        component={InflatableExpanders}
      />
      <Route
        path="/catalog/for-female/anal-toys/glass-and-metal"
        component={GlassAndMetal}
      />
      <Route path="/catalog/for-female/anal-toys/fisting" component={Fisting} />
      <Route
        exact
        path="/catalog/for-female/falloimetators"
        component={Dildos}
      />
      <Route
        path="/catalog/for-female/falloimetators/anal-vaginal-phalluses"
        component={AnalVaginalPhalluses}
      />
      <Route
        path="/catalog/for-female/falloimetators/vaginal-plugs"
        component={VaginalPlugs}
      />
      <Route
        path="/catalog/for-female/falloimetators/giants"
        component={Gigants}
      />
      <Route
        path="/catalog/for-female/falloimetators/bilateral-phalluses"
        component={BilateralPhalluses}
      />
      <Route
        path="/catalog/for-female/falloimetators/classic-dildos"
        component={ClassicDildos}
      />
      <Route
        path="/catalog/for-female/falloimetators/realistic-phalluses"
        component={RealisticPhalluses}
      />
      <Route
        path="/catalog/for-female/falloimetators/glass-phalluses"
        component={GlassPhalluses}
      />
      <Route
        path="/catalog/for-female/falloimetators/g-spot-stimulants-phalluses"
        component={GSpotStimulants}
      />

      <Route path="/catalog/manufacturer" component={Manufacturers} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default renderPrivateRoutes;
