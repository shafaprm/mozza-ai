import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Input from "../components/Auth/Input.js";


const Login = () => {
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
        <Form>
          <Input title="Email" label="Enter your Email" />
          <Input title="Password" label="Enter your Password" />
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
