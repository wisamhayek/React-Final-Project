import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from "styled-components";
import { mobile } from "../../constants/responsive";

const Container = styled.div`
  height: 40vh;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: white
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  color: white
  ${mobile({ textAlign: "center" })}  
`;


const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  ${mobile({ width: "80%" })}  
`;


const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #ff6600;
  color: white;
`;

export default function Newsletter() {

  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};
