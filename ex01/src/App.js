
// import
import { Route, Routes } from "react-router-dom";
import "./App.css";
 
// import compo
import Header from "./component/00.Header.js";
import DesktopMonthView from "./component/01.DesktopMonthView";
import MobileMonthView from "./component/02.MobileMonthView";
import Responsive from "./component/03.Responsive";
import ContentCustomization from "./component/04.ContentCustomization";
import FullEventCustomization from "./component/05.FullEventCustomization";
import CustomizingTheHeader from "./component/06.CustomizingTheHeader";
import CustomEventTooltip from "./component/07.CustomEventTooltip";


// function
function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<DesktopMonthView></DesktopMonthView>}></Route>
        <Route path="/MobileMonthView" element={<MobileMonthView></MobileMonthView>}></Route>
        <Route path="/Responsive" element={<Responsive></Responsive>}></Route>
        <Route path="/ContentCustomization" element={<ContentCustomization></ContentCustomization>}></Route>
        <Route path="/FullEventCustomization" element={<FullEventCustomization></FullEventCustomization>}></Route>
        <Route path="/CustomizingTheHeader" element={<CustomizingTheHeader></CustomizingTheHeader>}></Route>
        <Route path="/CustomEventTooltip" element={<CustomEventTooltip></CustomEventTooltip>}></Route>
      </Routes>
      
      
    </>
  );
}

export default App;
