import React from "react";
import Plhrwmh_Arxikh_Buttons from './Plhrwmh_Arxikh_Buttons';
import "./Plhrwmh_Arxikh.css"

export default function Plhrwmh_Arxikh_Container() {
    return (
    <div className="plhrwmh-container">
      {/* Τίτλος */}
      <div className="plhrwmh title">
        Πληρωμές
        </div>

      {/* Εικόνα */}
      <div className="plhrwmh-content">
        <img src="/payment.webp" alt="Payment" className="payment-img" />
      </div>

      {/* Κουμπιά */}
      <div className="plhrwmh-buttons-container">
        <Plhrwmh_Arxikh_Buttons />
      </div>
    </div>
  );
};
