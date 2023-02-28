import React, { useState } from 'react';
import './PasswordEntry.css';

const PasswordEntry = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (password === '1234') { // replace with your desired password
      onPasswordCorrect();
    } else {
      setError('You have entered an incorrect password.');
    }
  };
  
  return (
    <div className="password-entry">
      <form onSubmit={handlePasswordSubmit}>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Enter</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default PasswordEntry;
