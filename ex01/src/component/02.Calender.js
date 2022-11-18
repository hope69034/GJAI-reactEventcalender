//react event calender
import { Eventcalendar } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

//import
import { Link } from "react-router-dom";
import React, { useState } from 'react';

/* src */
/* import rect1 from "../img/rect1.png";
import sh1 from "../img/sh1.jpg";
import png2 from "../img/png2.png"; */





const Calender = () => {

  const [events, setEvents] = useState([{
    start: new Date(2020, 2, 18, 8, 0),
    end: new Date(2020, 2, 18, 17, 0),
    title: 'My First Event'
  }, {
    start: new Date(2020, 2, 18, 9, 0),
    end: new Date(2020, 2, 20, 13, 0),
    title: 'My Second Event'
  }]);

  return (

  <>

  <h1>calender page</h1>
  <Eventcalendar data={events} />;
  
  </>
  )

}

export default Calender;