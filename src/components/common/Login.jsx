import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #d8ddff;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8e9a1;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
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

const Login = () => {
  return (
    <Container>
      <LoginForm>
        <h2 style={{ marginBottom: "16px" }}>Login</h2>
        <Input type='text' placeholder='Username' />
        <Input type='password' placeholder='Password' />
        <Button type='submit'>Sign In</Button>
      </LoginForm>
    </Container>
  );
};

export default Login;
