import React from 'react';
import styled from 'styled-components';

const Input = ({ title, label, width, value }) => {
  return (
    <Container >
      <label style={{ fontSize: '13px', fontWeight: 500 }} htmlFor={title}>
        {title}
      </label>
      <InputBox style = {{width: width || "100%"}}type={title === 'Password' ? 'password' : 'text'} id={title} placeholder={label} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.input`
  height: 50%;
  margin-top: 8px;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: border-color 0.3s;
  background-color: #f2f4f7;
  padding: 0 15px;

  &:focus {
    border: 1px solid #000;
    outline: none;
  }
`;

export default Input;
