import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
  const [location, setLocation] = useState("");

  const handleDetectLocation = () => {
    axios
      .get(
        "`http://maps.googleapis.com/maps/api/geocode/json?address=Dallas&sensor=false`"
      )
      .then((response) => {
        const { city, region, country_name } = response.data;
        setLocation(`${city}, ${region}, ${country_name}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission with location state
  };

  return (
    <Container>
      <RegistrationForm onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: "16px" }}>Register Your Shop</h2>
        <Input type='text' placeholder='Shop Name' />
        <Input type='text' placeholder='Address' />
        <Input type='text' placeholder='Registration Certificate Number' />
        <Button type='button' onClick={handleDetectLocation}>
          Detect Location
        </Button>
        <Input type='number' placeholder='Number of Products' />
        <Input type='file' accept='image/*' />
        <Button type='submit'>Register</Button>
        {location && <p>Your location: {location}</p>}
      </RegistrationForm>
    </Container>
  );
};

export default Registration;
