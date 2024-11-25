import React from 'react';

const ChargingPort = ({ 
  portIndex, 
  inUse, 
  startTime, 
  stopTime, 
  fee, 
  startSession, 
  stopSession 
}) => {

  // Format time to readable string (e.g., 10:30 AM)
  const formatTime = (date) => {
    if (!date) return '';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="charging-port">
      <h3>Port {portIndex + 1}</h3>
      <div>
        {inUse ? (
          <>
            <p>Start Time: {formatTime(startTime)}</p>
            <p>Stop Time: {formatTime(stopTime)}</p>
            <p>Total Fee: ₱{fee}</p>
            <button onClick={() => stopSession(portIndex)}>Stop Session</button>
          </>
        ) : (
          <button onClick={() => startSession(portIndex)}>Start Session</button>
        )}
      </div>
    </div>
  );
};

export default ChargingPort;