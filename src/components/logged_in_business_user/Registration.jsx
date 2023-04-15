import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { registerShop } from "../../Redux/Actions/shopActions";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7cac9;
`;

const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8e9a1;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border-radius: 4px;
  border: none;
  background-color: #ffffff;
  font-size: 16px;
  color: #555555;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border-radius: 4px;
  border: none;
  background-color: #ffd8be;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #ffbfa1;
  }
`;

const Registration = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const handleDetectLocation = () => {
    // API call to get location
    setLocation("Dallas, Texas, USA");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch the action to register shop with the form data and location
    dispatch(
      registerShop({
        name,
        address,
        registrationNumber,
        location,
        phone,
      })
    );
  };

  return (
    <Container>
      <RegistrationForm onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: "16px" }}>Register Your Shop</h2>
        <Input
          type='text'
          placeholder='Shop Name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          type='text'
          placeholder='Address'
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <Input
          type='text'
          placeholder='Registration Certificate Number'
          value={registrationNumber}
          onChange={(event) => setRegistrationNumber(event.target.value)}
        />
        <Button type='button' onClick={handleDetectLocation}>
          Detect Location
        </Button>
        <Input
          type='text'
          placeholder='Phone Number'
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <Button type='submit'>Register</Button>
      </RegistrationForm>
    </Container>
  );
};

export default Registration;
