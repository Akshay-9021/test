import React, { useState, useEffect } from 'react';
import './Lab.css';

const Lab = ({ onExit, initialTime }) => {
  const [remainingTime, setRemainingTime] = useState(initialTime);
  
  useEffect(() => {
    if (remainingTime > 0) {
      const intervalId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
      
      return () => {
        clearInterval(intervalId);
      };
    } else {
      onExit();
    }
  }, [remainingTime, onExit]);
  
  const handleExitClick = () => {
    onExit();
  };
  
  return (
    <div className="lab">
      <div className="time-remaining">Time remaining: {remainingTime} seconds</div>
      <button onClick={handleExitClick}>Exit</button>
    </div>
  );
};

export default Lab;
