import { Route, Routes } from "react-router-dom";

/* import logo from './logo.svg'; */
import './App.css';
import Header from './compo/00.Header';
import Main from './compo/01.Main';
import Calendar from './compo/02.Calendar';
import Timeline from './compo/03.Timeline';

function App() {
  return (

    <>
    <Header></Header>
  

    <Routes>
      <Route path="/" element={<Main></Main>}></Route>
      <Route path="/Calendar" element={<Calendar></Calendar>}></Route>
      <Route path="/Timeline" element={<Timeline></Timeline>}></Route>
    </Routes>

 
    
   </>
  );
}

export default App;
