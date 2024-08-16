import React, { useState } from "react";
import "../../styles/EmailPopup.css"; // Make sure to create a corresponding CSS file for styling

function EmailPopup({ onClose }) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    onClose(); // Close the popup after submission
  };

  return (
    <div className="email-popup-overlay">
      <div className="email-popup">
        <button className="email-popup-close" onClick={onClose}>
          &times;
        </button>
        <h2>Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EmailPopup;
