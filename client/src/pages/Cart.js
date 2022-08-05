import { Typography } from '@mui/material'
import React, { Fragment } from 'react'
import NavBar from '../components/navBar/navBar'

export default function Cart() {
  return (
    <Fragment>
      <NavBar />
      <>
        <Typography>Add a stepper from MUI</Typography>
        <Typography>1st Step: cart summary</Typography>
        <Typography>2st Step: Stripe Checkout</Typography>
        <Typography>3rd Step: Confirmation Page</Typography>
      </>
    </Fragment>
    
  )
}
