import React from "react";

import masterCard from "../../assets/images/master-card.jpg";
import paypal from "../../assets/images/paypal.jpg";
import "../../assets/css/paymentMethod.css";

const PaymentMethod = () => {
  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment_method" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment_method"/> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment_method" /> Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment_method" /> Paypal
        </label>

        <img src={paypal} alt="" />
      </div>
      <div className="payment mt-5">
        <button>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
