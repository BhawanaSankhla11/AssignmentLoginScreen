import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 360px;
  padding: 20px;
  background: #ffe6e6;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const InputField = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ForgotPasswordLink = styled.a`
  text-decoration: none;
  color: #0077cc;
  font-size: 14px;
  margin-top: 10px;
  display: block;
`;

const RegisterLink = styled.a`
  text-decoration: none;
  color: #0077cc;
  font-size: 14px;
  margin-top: 10px;
  display: block;
`;

function Login() {
  return (
    <LoginContainer>
      <LoginForm>
        <h2>Login</h2>
        <InputField type="text" placeholder="Enter Email" />
        <InputField type="password" placeholder="Enter Password" />
        <SubmitButton type="submit">Login</SubmitButton>
        <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
        <RegisterLink href="#">Register</RegisterLink>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
