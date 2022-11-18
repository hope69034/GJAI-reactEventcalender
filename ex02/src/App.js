import { Route, Routes } from "react-router-dom";

/* import logo from './logo.svg'; */
import './App.css';
import Header from './compo/00.Header';
import Timeline from './compo/01.Timeline';
import Calendar from './compo/02.Calendar';
import Mypage from './compo/03.Mypage';
import AddButton from './compo/04.AddButton';

function App() {
  return (

    <>
    <Header></Header>
  

    <Routes>
      <Route path="/" element={<Timeline></Timeline>}></Route>
      <Route path="/Calendar" element={<Calendar></Calendar>}></Route>
      <Route path="/Mypage" element={<Mypage></Mypage>}></Route>
      <Route path="/AddButton" element={<AddButton></AddButton>}></Route>
    </Routes>

 
    
   </>
  );
}

export default App;
