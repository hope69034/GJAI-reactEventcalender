
// import
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import compo
import Header from "./component/00.Header.js";
import Main from "./component/01.Main";
import Calender from "./component/02.Calender";
import Scheduling from "./component/03.Scheduling";
import Timeline from "./component/04.Timeline";
import Agenda from "./component/05.Agenda";

// function
function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/Calender" element={<Calender></Calender>}></Route>
        <Route path="/Scheduling" element={<Scheduling></Scheduling>}></Route>
        <Route path="/Timeline" element={<Timeline></Timeline>}></Route>
        <Route path="/Agenda" element={<Agenda></Agenda>}></Route>
      </Routes>

      
    </>
  );
}

export default App;
