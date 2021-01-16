import "./App.css";
import Header from "./components/Header";
import Accessories from "./assets/Desktop-Accessories.jpg";
import Model5 from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

import Item from "./components/Item";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="appItems__container">
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money back guarantee"
          descLink=""
          backgroundImage={SolarPanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Model S"
          desc="Starting at $69,420"
          descLink=""
          backgroundImage={Model5}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImage={Model3}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        />{" "}
        <Item
          title="MODEL X"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImage={ModelX}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="MODEL Y"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImage={ModelY}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          descLink=""
          backgroundImage={SolarRoof}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />{" "}
        <Item
          title="Accessories"
          desc=""
          descLink=""
          backgroundImage={Accessories}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          // rightBtnTxt="LEARN MORE"
          // rightBtnLink=""
          twoButtons="false"
        />
      </div>
    </div>
  );
}

export default App;
