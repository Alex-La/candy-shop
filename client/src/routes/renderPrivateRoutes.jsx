import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Main from "../components/Main/Main";

import Search from "../components/Search/Search";
import Cart from "../components/Cart/Cart";
import Make from "../components/Cart/Make/Make";

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
import SexProductsForFemale from "../components/Catalog/ForFemale/SexProductsForFemale/SexProductsForFemale";
import BreastPumpsAndStimulants from "../components/Catalog/ForFemale/SexProductsForFemale/BreastPumpsAndStimulants";
import ClitorisPumps from "../components/Catalog/ForFemale/SexProductsForFemale/ClitorisPumps";
import ClitoralStimulants from "../components/Catalog/ForFemale/SexProductsForFemale/ClitoralStimulants";
import VibrationEgg from "../components/Catalog/ForFemale/SexProductsForFemale/VibratingEgg";
import VaginalBalls from "../components/Catalog/ForFemale/SexProductsForFemale/VaginalBalls";
import Vibrators from "../components/Catalog/ForFemale/Vibrators/Vibrators";
import HiTech from "../components/Catalog/ForFemale/Vibrators/HiTech";
import AnalVaginalVibrators from "../components/Catalog/ForFemale/Vibrators/AnalVaginalVibrators";
import BigVibrators from "../components/Catalog/ForFemale/Vibrators/BigVibrators";
import VibrationKits from "../components/Catalog/ForFemale/Vibrators/VibrationKits";
import VibrationStimulantsAndVibrationBullets from "../components/Catalog/ForFemale/Vibrators/VibrationStimulantsAndVibrationBullets";
import Waterproof from "../components/Catalog/ForFemale/Vibrators/Waterproof";
import Rotating from "../components/Catalog/ForFemale/Vibrators/Rotating";
import BilateralVibrators from "../components/Catalog/ForFemale/Vibrators/BilateralVibrators";
import ForTwo from "../components/Catalog/ForFemale/Vibrators/ForTwo";
import Classic from "../components/Catalog/ForFemale/Vibrators/Classic";
import ComputerType from "../components/Catalog/ForFemale/Vibrators/ComputerType";
import RealisticVibrators from "../components/Catalog/ForFemale/Vibrators/RealisticVibrators";
import WithRadioControl from "../components/Catalog/ForFemale/Vibrators/WithRadioControl";
import WithClitorisStimulator from "../components/Catalog/ForFemale/Vibrators/WithClitorisStimulator";
import GSpotStimulantsVibrators from "../components/Catalog/ForFemale/Vibrators/GSpotStimulantsVibrators";

import ForMale from "../components/Catalog/ForMale/ForMale";
import Vaginas from "../components/Catalog/ForMale/Vaginas";
import VacuumPumps from "../components/Catalog/ForMale/VacuumPumps";
import ProstateMassagers from "../components/Catalog/ForMale/ProstateMassagers";
import Masturbators from "../components/Catalog/ForMale/Masturbators";
import NozzlesAndExtensions from "../components/Catalog/ForMale/NozzlesAndExtensions";
import SexDolls from "../components/Catalog/ForMale/SexDolls";
import CockRings from "../components/Catalog/ForMale/CockRings";

import ForPairs from "../components/Catalog/ForPairs/ForPairs";
import BdsmProducts from "../components/Catalog/ForPairs/BdsmProducts/BdsmProducts";
import StrapOnsPhalloprostheses from "../components/Catalog/ForPairs/StrapOnsPhalloprostheses/StrapOnsPhalloprostheses";
import OtherBdsmProducts from "../components/Catalog/ForPairs/BdsmProducts/OtherBdsmProducts";
import IntimateJewelry from "../components/Catalog/ForPairs/BdsmProducts/IntimateJewelry";
import Whips from "../components/Catalog/ForPairs/BdsmProducts/Whips";
import MasksGags from "../components/Catalog/ForPairs/BdsmProducts/MasksGags";
import MedicalFetish from "../components/Catalog/ForPairs/BdsmProducts/MedicalFetish";
import HandcuffsCollars from "../components/Catalog/ForPairs/BdsmProducts/HandcuffsCollars";
import Electrostimulators from "../components/Catalog/ForPairs/BdsmProducts/Electrostimulators";
import Beltless from "../components/Catalog/ForPairs/StrapOnsPhalloprostheses/Beltless";
import FemaleStrapon from "../components/Catalog/ForPairs/StrapOnsPhalloprostheses/FemaleStrapon";
import MaleStrapon from "../components/Catalog/ForPairs/StrapOnsPhalloprostheses/MaleStrapon";
import PantiesAndAttachments from "../components/Catalog/ForPairs/StrapOnsPhalloprostheses/PantiesAndAttachments";
import Falloprostheses from "../components/Catalog/ForPairs/StrapOnsPhalloprostheses/Falloprostheses";

import Clothes from "../components/Catalog/Clothes/Clothes";
import BeautyAccessories from "../components/Catalog/Clothes/BeautyAccessories";
import BikinisAndSets from "../components/Catalog/Clothes/BikinisAndSets";
import BodysuitsAndJumpsuits from "../components/Catalog/Clothes/BodysuitsAndJumpsuits";
import BigSizes from "../components/Catalog/Clothes/BigSizes";
import BustierAndBra from "../components/Catalog/Clothes/BustierAndBra";
import GameCostumes from "../components/Catalog/Clothes/GameCostumes";
import CorsetsAndGrace from "../components/Catalog/Clothes/CorsetsAndGrace";
import Swimwear from "../components/Catalog/Clothes/Swimwear";
import MensUnderwear from "../components/Catalog/Clothes/MensUnderwear";
import VinylClothing from "../components/Catalog/Clothes/VinylClothing";
import LatexClothing from "../components/Catalog/Clothes/LatexClothing";
import GlovesAndAccessories from "../components/Catalog/Clothes/GlovesAndAccessories";
import ShirtsAndBabyDollar from "../components/Catalog/Clothes/ShirtsAndBabyDollar";
import PantiesShorts from "../components/Catalog/Clothes/PantiesShorts";
import RobesAndNegligees from "../components/Catalog/Clothes/RobesAndNegligees";
import StockingsAndTights from "../components/Catalog/Clothes/StockingsAndTights";
import EroticShoes from "../components/Catalog/Clothes/EroticShoes";
import EroticDress from "../components/Catalog/Clothes/EroticDress";

import Manufacturers from "../components/Manufacturers/Manufacturers";
import AdminPanel from "../components/AdminPanel/AdminPanel";

const renderPrivateRoutes = (me) => {
  return (
    <Switch>
      {me.role === "admin" && (
        <Route path="/admin-panel" component={AdminPanel} />
      )}
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
      <Route exact path="/carts" component={Cart} />
      <Route path="/carts/make" component={Make} />
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
      <Route
        exact
        path="/catalog/for-female/sex-products-for-female"
        component={SexProductsForFemale}
      />
      <Route
        path="/catalog/for-female/sex-products-for-female/vaginal-balls"
        component={VaginalBalls}
      />
      <Route
        path="/catalog/for-female/sex-products-for-female/vibrating-egg"
        component={VibrationEgg}
      />
      <Route
        path="/catalog/for-female/sex-products-for-female/clitoral-stimulants"
        component={ClitoralStimulants}
      />
      <Route
        path="/catalog/for-female/sex-products-for-female/clitoris-pumps"
        component={ClitorisPumps}
      />
      <Route
        path="/catalog/for-female/sex-products-for-female/breast-pumps-and-stimulants"
        component={BreastPumpsAndStimulants}
      />
      <Route exact path="/catalog/for-female/vibrators" component={Vibrators} />
      <Route path="/catalog/for-female/vibrators/hi-tech" component={HiTech} />
      <Route
        path="/catalog/for-female/vibrators/anal-vaginal-vibrators"
        component={AnalVaginalVibrators}
      />
      <Route
        path="/catalog/for-female/vibrators/big-vibrators"
        component={BigVibrators}
      />
      <Route
        path="/catalog/for-female/vibrators/vibration-kits"
        component={VibrationKits}
      />
      <Route
        path="/catalog/for-female/vibrators/vibration-stimulators-and-vibration-bullets"
        component={VibrationStimulantsAndVibrationBullets}
      />
      <Route
        path="/catalog/for-female/vibrators/waterproof"
        component={Waterproof}
      />
      <Route
        path="/catalog/for-female/vibrators/rotating"
        component={Rotating}
      />
      <Route
        path="/catalog/for-female/vibrators/bilateral-vibrators"
        component={BilateralVibrators}
      />
      <Route path="/catalog/for-female/vibrators/for-two" component={ForTwo} />
      <Route path="/catalog/for-female/vibrators/classic" component={Classic} />
      <Route
        path="/catalog/for-female/vibrators/computer-type"
        component={ComputerType}
      />
      <Route
        path="/catalog/for-female/vibrators/realistic-vibrators"
        component={RealisticVibrators}
      />
      <Route
        path="/catalog/for-female/vibrators/with-radio-control"
        component={WithRadioControl}
      />
      <Route
        path="/catalog/for-female/vibrators/with-clitoris-stimulator"
        component={WithClitorisStimulator}
      />
      <Route
        path="/catalog/for-female/vibrators/g-spot-stimulants-vibrators"
        component={GSpotStimulantsVibrators}
      />
      <Route exact path="/catalog/for-male" component={ForMale} />
      <Route path="/catalog/for-male/vaginas" component={Vaginas} />
      <Route path="/catalog/for-male/vacuum-pumps" component={VacuumPumps} />
      <Route
        path="/catalog/for-male/prostate-massagers"
        component={ProstateMassagers}
      />
      <Route path="/catalog/for-male/masturbators" component={Masturbators} />
      <Route
        path="/catalog/for-male/nozzles-and-extensions"
        component={NozzlesAndExtensions}
      />
      <Route path="/catalog/for-male/sex-dolls" component={SexDolls} />
      <Route path="/catalog/for-male/cock-rings" component={CockRings} />
      <Route exact path="/catalog/for-pairs" component={ForPairs} />
      <Route
        exact
        path="/catalog/for-pairs/bdsm-products"
        component={BdsmProducts}
      />
      <Route
        exact
        path="/catalog/for-pairs/strap-ons-phalloprostheses"
        component={StrapOnsPhalloprostheses}
      />
      <Route
        path="/catalog/for-pairs/bdsm-products/other-bdsm-products"
        component={OtherBdsmProducts}
      />
      <Route
        path="/catalog/for-pairs/bdsm-products/intimate-jewelry"
        component={IntimateJewelry}
      />
      <Route path="/catalog/for-pairs/bdsm-products/whips" component={Whips} />
      <Route
        path="/catalog/for-pairs/bdsm-products/masks-gags"
        component={MasksGags}
      />
      <Route
        path="/catalog/for-pairs/bdsm-products/medical-fetish"
        component={MedicalFetish}
      />
      <Route
        path="/catalog/for-pairs/bdsm-products/handcuffs-collars"
        component={HandcuffsCollars}
      />
      <Route
        path="/catalog/for-pairs/bdsm-products/electrostimulators"
        component={Electrostimulators}
      />{" "}
      <Route
        path="/catalog/for-pairs/strap-ons-phalloprostheses/beltless"
        component={Beltless}
      />
      <Route
        path="/catalog/for-pairs/strap-ons-phalloprostheses/female-strapon"
        component={FemaleStrapon}
      />
      <Route
        path="/catalog/for-pairs/strap-ons-phalloprostheses/male-strapon"
        component={MaleStrapon}
      />
      <Route
        path="/catalog/for-pairs/strap-ons-phalloprostheses/panties-and-attachments"
        component={PantiesAndAttachments}
      />
      <Route
        path="/catalog/for-pairs/strap-ons-phalloprostheses/falloprostheses"
        component={Falloprostheses}
      />
      <Route exact path="/catalog/erotic-clothes" component={Clothes} />
      <Route
        path="/catalog/erotic-clothes/beauty-accessories"
        component={BeautyAccessories}
      />
      <Route
        path="/catalog/erotic-clothes/bikinis-and-sets"
        component={BikinisAndSets}
      />
      <Route
        path="/catalog/erotic-clothes/bodysuits-and-jumpsuits"
        component={BodysuitsAndJumpsuits}
      />
      <Route path="/catalog/erotic-clothes/big-sizes" component={BigSizes} />
      <Route
        path="/catalog/erotic-clothes/bustier-and-bra"
        component={BustierAndBra}
      />
      <Route
        path="/catalog/erotic-clothes/game-costumes"
        component={GameCostumes}
      />
      <Route
        path="/catalog/erotic-clothes/corsets-and-grace"
        component={CorsetsAndGrace}
      />
      <Route path="/catalog/erotic-clothes/swimwear" component={Swimwear} />
      <Route
        path="/catalog/erotic-clothes/mens-underwear"
        component={MensUnderwear}
      />
      <Route
        path="/catalog/erotic-clothes/vinyl-clothing"
        component={VinylClothing}
      />
      <Route
        path="/catalog/erotic-clothes/latex-clothing"
        component={LatexClothing}
      />
      <Route
        path="/catalog/erotic-clothes/gloves-and-accessories"
        component={GlovesAndAccessories}
      />
      <Route
        path="/catalog/erotic-clothes/shirts-and-baby-dollar"
        component={ShirtsAndBabyDollar}
      />
      <Route
        path="/catalog/erotic-clothes/panties-shorts"
        component={PantiesShorts}
      />
      <Route
        path="/catalog/erotic-clothes/robes-and-negligees"
        component={RobesAndNegligees}
      />
      <Route
        path="/catalog/erotic-clothes/stockings-and-tights"
        component={StockingsAndTights}
      />
      <Route
        path="/catalog/erotic-clothes/erotic-shoes"
        component={EroticShoes}
      />
      <Route
        path="/catalog/erotic-clothes/erotic-dress"
        component={EroticDress}
      />
      <Route path="/catalog/manufacturer" component={Manufacturers} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default renderPrivateRoutes;
