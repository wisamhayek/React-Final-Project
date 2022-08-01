import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import {AddShippingButton, AddBillingButton} from './addButtons.jsx';


export default function Addresses() {

  return (
    <Fragment>
    <Typography variant='h5' sx={{margin:"auto",textAlign:"center", marginBottom:"2rem"}}>Addresses</Typography>
    <Box sx={{width:"80%", margin:"auto",marginBottom:'2rem'}}>
      <Typography variant='h6' sx={{margin:"auto",textAlign:"start", marginBottom:"1rem"}}>Shipping Address :</Typography>
      <Box sx={{display: "flex",flexDirection:'row', width: "max-content", textAlign: "start"}}>
        <Box sx={{backgroundColor:"#dedede",width:"fit-content",padding:"2rem",borderRadius:"1rem"}}>
          <Typography>Wisam Hayek</Typography>
          <Typography >Address 1</Typography>
          <Typography >Address 2</Typography>
          <Typography >City, Zipcode</Typography>
          <Typography >Province</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",margin:"auto"}}>
          <Button size='small' sx={{height:"fit-content",width:"fit-content"}}>Edit</Button>
          <Button size='small' sx={{height:"fit-content",width:"fit-content"}}>Delete</Button>
        </Box>
      </Box>
      <AddShippingButton />
    <Typography variant='h6' sx={{margin:"auto",textAlign:"center", marginTop:"2rem"}}>--- OR ---</Typography>
    <Typography variant='h6' sx={{margin:"auto",textAlign:"start", marginTop:"2rem"}}>No shipping address found on file</Typography>
    </Box>

    <Divider/>
    <Box sx={{width:"80%", margin:"auto",marginTop:"2rem"}}>
      <Typography variant='h6' sx={{margin:"auto",textAlign:"start", marginBottom:"1rem"}}>Billing Address :</Typography>
      <Box sx={{display: "flex",flexDirection:'row', width: "max-content", textAlign: "start"}}>
        <Box sx={{backgroundColor:"#dedede",width:"fit-content",padding:"2rem",borderRadius:"1rem"}}>
          <Typography>Wisam Hayek</Typography>
          <Typography >Address 1</Typography>
          <Typography >Address 2</Typography>
          <Typography >City, Zipcode</Typography>
          <Typography >Province</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",margin:"auto"}}>
          <Button size='small' sx={{height:"fit-content",width:"fit-content"}}>Edit</Button>
          <Button size='small' sx={{height:"fit-content",width:"fit-content"}}>Delete</Button>
        </Box>
      </Box>
      <AddBillingButton />
    <Typography variant='h6' sx={{margin:"auto",textAlign:"center", marginTop:"2rem"}}>--- OR ---</Typography>
    <Typography variant='h6' sx={{margin:"auto",textAlign:"start", marginTop:"2rem"}}>No billing address found on file</Typography>
    </Box>
    </Fragment>
  )
}