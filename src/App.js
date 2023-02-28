import React, { useState } from 'react';
import PasswordEntry from './PasswordEntry';
import Lab from './Lab';
import './App.css';

const App = () => {
  const [inLab, setInLab] = useState(false);
  const [remainingTime, setRemainingTime] = useState(10 * 60); // 10 minutes
  
  const handlePasswordCorrect = () => {
    setInLab(true);
  };
  
  const handleExitLab = () => {
    setInLab(false);
    setRemainingTime(10 * 60); // reset remaining time
  };
  
  return (
    <div className="app">
      {!inLab && (
        <div className="door">
          <div className="lock" />
          <PasswordEntry onPasswordCorrect={handlePasswordCorrect} />
        </div>
      )}
      {inLab && <Lab onExit={handleExitLab} initialTime={remainingTime} />}
      {remainingTime <= 0 && (
        <div className="error">You have exhausted your allocated time.</div>
      )}
    </div>
  );
};

export default App;

