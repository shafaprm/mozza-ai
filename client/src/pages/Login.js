import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHttp } from "../hooks/http-hook.js";
import { AuthContext } from "../context/auth-context.js";
import { useNavigate } from "react-router-dom";


import Input from "../components/Auth/Input.js";

const Login = () => {
  const [fieldValue, setFieldValue] = useState({
    email: '',
    password: '',
  })

  const { isLoading, errorMessage, sendRequest, resetError } = useHttp();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();


  const handleInputChange = (name, value) => {
    setFieldValue((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const isFormComplete = () => {
    return Object.values(fieldValue).every((value) => value.trim() !== '');
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if(!isFormComplete()) return;

    try{
      const loginData = {
        email: fieldValue.email,
        password: fieldValue.password,
      };

      const data = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      // const data = await sendRequest(
      //   "http://localhost:5000/api/auth/register/login",
      //   "POST",
      //   JSON.stringify({
      //     email : fieldValue.email,
      //     password : fieldValue.password
      //   }),{'Content-Type' : 'application/json'}
      // );

      authContext.loginHandler(data.id, data.token);
      navigate("/conversation", { replace: true });
    }catch(err){
      console.log(err);
    }
  }

  return (
    <Container>
      <Wrapper>
        <h1
          style={{
            marginBottom: "7px",
            fontFamily: "PlayfairDisplay",
            fontSize: "45px",
            fontWeight: 500,
          }}
        >
          Welcome Back
        </h1>
        <p style={{ fontSize: "13px", marginBottom: "45px" }}>
          Enter your email and password to access your account
        </p>
        <Form onSubmit = {submitHandler}>
          <Input title="Email" label="Enter your Email" onInputChange = {handleInputChange} name = "email"/>
          <Input title="Password" label="Enter your Password" onInputChange = {handleInputChange} name = "password"/>
          <button
            style={{
              backgroundColor: "#000",
              border: "none",
              color: "#fff",
              width: "100%",
              borderRadius: "10px",
              height: "47px",
              cursor: "pointer",
              margin: "20px 0",
            }}
          >
            Sign In
          </button>
        </Form>
        <span
          style={{
            fontSize: "13px",
            fontWeight: 400,
            border: "none",
            backgroundColor: "#fff"
          }}
        >
          Dont have an account?{" "}
          <Link
            style={{ textDecoration: "none", fontWeight: 600, color: "#000", cursor: 'pointer' }}
            to = '/register'
          >
            Sign Up
          </Link>
        </span>
      </Wrapper>
    </Container>
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden; /* Prevents unwanted horizontal scroll */
`;

const Wrapper = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export default Login;
