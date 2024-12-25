import React from "react";
import "./Address.css";

function Address() {
  return (
    <div className="address-container">
      <div className="office-info">
        <h2>Τα γραφεία μας</h2>
        <hr />
        <p>
          <strong>Διεύθυνση:</strong>
          <br />
          Σταδίου 29, Αθήνα 10559
        </p>
        <p>
          <strong>E-mail:</strong>
          <br />
          ntantades@yeka.gr
        </p>
        <p>
          <strong>Τηλέφωνο Επικοινωνίας:</strong>
          <br />
          210 325 8080/8090
        </p>
      </div>
      <div className="interactive-map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.34330998899446!2d23.730901538685835!3d37.98042790176907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3bad145a41%3A0x6db1fc0cbb58a00a!2sMinistry%20of%20Labor%20and%20Social%20Security!5e0!3m2!1sen!2sgr!4v1735140018054!5m2!1sen!2sgr" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          title="Map showing the Ministry of Labor and Social Security location"
        />
      </div>
    </div>
  );
}

export default Address;
