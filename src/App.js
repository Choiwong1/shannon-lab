import React, { useState } from 'react';
import ChargingPort from './chargeringport.js';

const App = () => {
  
  const [ports, setPorts] = useState(
    Array(10).fill({
      inUse: false,
      startTime: null,
      stopTime: null,
      fee: 0,
    })
  );


  const startSession = (portIndex) => {
    const newPorts = [...ports];
    const currentTime = new Date();

    newPorts[portIndex] = {
      ...newPorts[portIndex],
      inUse: true,
      startTime: currentTime,
    };

    setPorts(newPorts);
  };


  const stopSession = (portIndex) => {
    const newPorts = [...ports];
    const currentTime = new Date();

    //Time
    const durationInMinutes =
      (currentTime - newPorts[portIndex].startTime) / (1000 * 60);
    const roundedHours = Math.ceil(durationInMinutes / 60); 
    const fee = roundedHours * 25; // ₱10 per hour

    newPorts[portIndex] = {
      ...newPorts[portIndex],
      inUse: false,
      stopTime: currentTime,
      fee,
    };

    setPorts(newPorts);
  };

  return (
    <div>
      <h1>Ellry Cafe Charging Ports</h1>
      <div className="port-list">
        {ports.map((port, index) => (
          <ChargingPort
            key={index}
            portIndex={index}
            inUse={port.inUse}
            startTime={port.startTime}
            stopTime={port.stopTime}
            fee={port.fee}
            startSession={startSession}
            stopSession={stopSession}
          />
        ))}
      </div>
    </div>
  );
};

export default App;