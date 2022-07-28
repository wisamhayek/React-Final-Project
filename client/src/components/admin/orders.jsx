import React from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import { Fragment } from 'react'

export default function Orders() {
  return (
    <Fragment>
    <Typography variant='h5' sx={{margin:"auto",textAlign:"center", marginBottom:"2rem"}}>Orders</Typography>
    <Box sx={{marginLeft:{xs: "0px",md: "2rem"},textAlign:"start", width:"fit-content"}}>
      <div style={{display:"grid",gridTemplateColumns: "1fr 1fr",columnGap:"2rem"}}>
        <div className='textFields'>
          <Typography variant='h6'>Open orders : </Typography>
          <Typography variant='h6'>Shipped orders :</Typography>
          <Divider sx={{width:"200%"}}/>
          <Typography variant='h6'>Total order :</Typography>
        </div>
        <div className='rightFields'>
          <Typography variant='h6'>XX</Typography>
          <Typography variant='h6'>XX</Typography>
          <Typography variant='h6'>XX</Typography>
        </div>
      </div>
    </Box>
    <Box sx={{
      width: "fit-content",
      display:"flex",
      flexDirection: "row",
      columnGap: "1rem",
      margin: "auto",
      marginTop:"2rem"
    }}>
      <Button variant="contained">Open Orders</Button>
      <Button variant="contained">All Orders</Button>
    </Box>


    {/* Desktop View */}
    <Box sx={{margin:"auto",textAlign:"center",display: {xs: "none", md: "grid"},gridTemplateColumns:" 40% 60%", borderTop:"1px solid gray", borderBottom:"1px solid gray",marginTop:"2rem"}}>
      <div>
        <img style={{padding:"1rem"}} src="#" alt="product"/>
      </div>
      <div style={{display:"grid",textAlign:"start",padding:"1rem"}}>
        <div className='textFields'>
          <Typography variant='h6'>Order Number : XXXX</Typography>
          <Typography variant='h6'>Total Price : $$$</Typography>
          <Typography variant='h6'>Date : 11/11/2021</Typography>
          <Typography variant='h6'>Status : Pending</Typography>
          <Typography variant='h6'>User : Username</Typography>
        </div>
        <div style={{display:"flex",flexDirection:"row",columnGap:"1rem"}}>
          {/* If order shipped is not shipped yet - check from order database */}
          <Button variant="contained">Mark as Shipped</Button>
          <Button variant="contained">Cancel</Button>
          <Button variant="contained">Shipping Details</Button>
        </div>
      </div>
    </Box>

    {/* Mobile View */}
    <Box sx={{margin:"auto",textAlign:"start",display: {xs: "grid", md: "none"}, borderTop:"1px solid gray", borderBottom:"1px solid gray", marginTop:"2rem"}}>
      <div style={{display:"grid",marginBottom:"1rem"}}>
        <Typography variant='h6'>Order Number : XXXX</Typography>
        <Typography variant='h6'>Total Price : $$$</Typography>
        <Typography variant='h6'>Date : 11/11/2021</Typography>
        <Typography variant='h6'>Status : Pending</Typography>
        <Typography variant='h6'>User : Username</Typography>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
        <div>
          <img src="#" alt="product" style={{width:"200px",height:"200px"}}/>
        </div>
        <div style={{display:"flex",flexDirection:"column",rowGap:"4px"}} >
          <Button variant="contained">Track</Button>
          <Button variant="contained">Cancel</Button>
          <Button variant="contained">Invoice</Button>
        </div>
      </div>
    </Box>
    </Fragment>
  )
}
