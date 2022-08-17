import { Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react'
import NavBar from '../components/navBar/navBar'


export default function Checkout() {

    const [message, setMessage] = useState("");

    useEffect(() => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);
  
      if (query.get("success")) {
        setMessage("Order placed! You will receive a confirmation email shortly.");
      }
      if (query.get("canceled")) {
        setMessage(
          "Order canceled -- continue to shop around and checkout when you're ready."
        );
      }
    }, []);

  return (
    <Fragment>
        <NavBar />
        <Typography variant='h3' sx={{textAlign: 'center', margin: 'auto',marginTop: '2rem'}}>{message}</Typography>
    </Fragment>
  )
}
