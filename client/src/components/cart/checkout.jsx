import axios from 'axios';
import React from 'react';
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export default function CheckoutButton() {

  function stripePay(e){
      e.preventDefault()
      console.log("clicked");
      // axios.post("http://localhost:2000/create-checkout-session",{price,quantity})
      axios.post("http://localhost:2000/create-checkout-session")
      .then((resp)=>{
        if (resp.data.url) {
          window.location.href = resp.data.url;
        }
      }).catch((error)=>{
          console.log(error);
      })
  }

  return (
    <Button onClick={(e)=>{stripePay(e)}}>CHECKOUT NOW</Button>
  )
}
