import React, { useState } from "react";
import "./Message.css";

function Message() {
  const [message, setMessage] = useState("");
  const maxMessageLength = 500;
  
  const handleMessageChange = (e) => {
    if (e.target.value.length <= maxMessageLength) {
      setMessage(e.target.value);
    }
  };

  return (
    <div className="message-container">
      <h2>Επικοινωνήστε μαζί μας</h2>
      <hr />
      <form>
        <p>
          <strong>Ονοματεπώνυμο (*)</strong>
          <br />
          <input type="text" name="fullname" required />
        </p>
        <p>
          <strong>E-mail (*)</strong>
          <br />
          <input type="email" name="email" required />
        </p>
        <p>
          <strong>Μήνυμα</strong>
          <br />
          <textarea
            name="message"
            value={message}
            onChange={handleMessageChange}
            maxLength={maxMessageLength}
            required
          />
          <div className="char-counter-message">
            {maxMessageLength - message.length} χαρακτήρες απομένουν
          </div>
        </p>
        <button type="submit" className="submit-btn">Αποστολή</button>
      </form>
    </div>
  );
}

export default Message;
