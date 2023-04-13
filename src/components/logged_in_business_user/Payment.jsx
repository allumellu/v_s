import React, { useState } from "react";
import axios from "axios";
import { FaCreditCard } from "react-icons/fa";
import "./Payment.css";

const Payment = (props) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post("/api/payment", {
        cardNumber,
        cardHolderName,
        expiryMonth,
        expiryYear,
        cvv,
        amount: props.totalAmount,
      });
      props.onPaymentSuccess(response.data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='payment-container'>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='cardNumber'>Card Number</label>
          <input
            type='text'
            id='cardNumber'
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='cardHolderName'>Card Holder Name</label>
          <input
            type='text'
            id='cardHolderName'
            value={cardHolderName}
            onChange={(event) => setCardHolderName(event.target.value)}
          />
        </div>
        <div className='form-row'>
          <div className='form-control'>
            <label htmlFor='expiryMonth'>Expiry Month</label>
            <input
              type='text'
              id='expiryMonth'
              value={expiryMonth}
              onChange={(event) => setExpiryMonth(event.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='expiryYear'>Expiry Year</label>
            <input
              type='text'
              id='expiryYear'
              value={expiryYear}
              onChange={(event) => setExpiryYear(event.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='cvv'>CVV</label>
            <input
              type='text'
              id='cvv'
              value={cvv}
              onChange={(event) => setCvv(event.target.value)}
            />
          </div>
        </div>
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
        <button className='pay-btn' type='submit'>
          <FaCreditCard /> Pay {props.totalAmount} INR
        </button>
      </form>
    </div>
  );
};

export default Payment;
