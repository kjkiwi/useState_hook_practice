import React, { useState } from "react";

function App() {
  const [currentTime, displayTime] = useState("Time display");

  function showTime() {
    displayTime(new Date().toLocaleTimeString());
  }

  setInterval(showTime, 1000);

  return (
    <div className="container">
      <h2>{currentTime}</h2>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
