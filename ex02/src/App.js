import { Route, Routes } from "react-router-dom";

/* import logo from './logo.svg'; */
import './App.css';
import Header from './compo/00.Header';
import Timeline from './compo/01.Timeline';
import Calendar from './compo/02.Calendar';
import Mypage from './compo/03.Mypage';
import Addbutton from './compo/04.Addbutton';
import Testpage from './compo/05.Testpage';

function App() {
  return (

    <>
    <Header></Header>
  

    <Routes>
      <Route path="/" element={<Timeline></Timeline>}></Route>
      <Route path="/Calendar" element={<Calendar></Calendar>}></Route>
      <Route path="/Mypage" element={<Mypage></Mypage>}></Route>
      <Route path="/Addbutton" element={<Addbutton></Addbutton>}></Route>
      <Route path="/Testpage" element={<Testpage></Testpage>}></Route>
    </Routes>

 
    
   </>
  );
}

export default App;
