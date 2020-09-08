import React, { useEffect, useState } from 'react';
import './App.css';
import Time from './Time.js';

const App = () => {

  
  let now = new Date();
  let eventDate = new Date(2023, 7, 22, 21, -2); // year, month-1, (day, hour, minute)

  let currentTime = now.getTime();
  console.log("currentTime" + " " +currentTime);
  let eventTime = eventDate.getTime();
  console.log("eventTime" + " " + eventTime);

  let remTime = eventTime - currentTime;
  console.log("remTime" + " " + remTime);

  let s = Math.floor(remTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  h = (h < 10 ) ? "0" + h : h;
  m = (m < 10 ) ? "0" + m : m;
  s = (s < 10 ) ? "0" + s : s;

  let countDays = d;
  let countHours = h;
  let countMinutes = m;
  let countSeconds = s;
  const [ days, setDays ] = useState(countDays);
  const [ hours, setHours ] = useState(countHours);
  const [ minutes, setMinutes ] = useState(countMinutes);
  const [ seconds, setSeconds ] = useState(countSeconds);

  const countDownApp = () => {
    countDays = d;
    setDays(countDays);

    countHours = h;
    setHours(countHours);

    countMinutes = m;
    setMinutes(countMinutes)

    countSeconds = s;
    setSeconds(countSeconds);
   
  }

  // return `${d} ${h} ${m} ${s}`

setTimeout(countDownApp, 500);

  // useEffect(() => {
  //   setInterval(() => {
  //     countdownApp();
  //      }, 500);
  // })



  return (
    
    <div className="App">
      <header className="App-header">
      <table class="big">
      <tr class="info">
          <td colspan="4" > Damilotun Countdown</td>
      </tr>
      <tr class="info">
          <td id="days">{days}</td>
          <td id="hours">{hours}</td>
          <td id="minutes">{minutes}</td>
          <td id="seconds">{seconds}</td>
      </tr>
      <tr>
          <td >Days</td>
          <td>Hours</td>
          <td>Minutes</td>
          <td>Seconds</td>
      </tr>
  </table>
  <button onClick={countDownApp} >Get Time</button>
  <Time />
      </header>
    </div>
  );
}


export default App;
