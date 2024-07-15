import React, { useState } from 'react';
import './USSDInterface.css';

function USSDInterface() {
  const [ussdCode, setUssdCode] = useState('');
  const [ussdResponse, setUssdResponse] = useState('');

  const handleUssdInput = (event) => {
    setUssdCode(event.target.value);
  };

  const sendUssdRequest = () => {
    // Here, you would typically make an API call to the USSD service
    // and update the ussdResponse state with the response
    setUssdResponse('Welcome to the USSD demo app!\nPlease enter your pin code:');
  };

  return (
    <div className="ussd-interface">
      <h1>USSD Interface</h1>
      <div className="ussd-input">
        <input
          type="text"
          value={ussdCode}
          onChange={handleUssdInput}
          placeholder="Enter USSD code"
        />
        <button onClick={sendUssdRequest}>Send</button>
      </div>
      <div className="ussd-response">
        <pre>{ussdResponse}</pre>
      </div>
    </div>
  );
}

export default USSDInterface;