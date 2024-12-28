import React from "react";
import Plhrwmh_Arxikh_Buttons from './Plhrwmh_Arxikh_Buttons';

export default function Plhrwmh_Arxikh_Container() {
    return (
    <div className="plhrwmh-container">
      <h1 className="plhrwmh-title">Πληρωμές</h1>
      <div className="plhrwmh-content">
        <img src="/payment.webp" alt="Payment" className="payment-img" />
      </div>
      <Plhrwmh_Arxikh_Buttons/>
    </div>
  );
};

