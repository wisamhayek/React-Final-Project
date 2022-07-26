import { Box, Button, Typography } from '@mui/material'
import { borderTop } from '@mui/system'
import React, { Fragment } from 'react'

export default function OrderHistory() {
  return (
    <Fragment>
    <Typography variant='h5' sx={{margin:"auto",textAlign:"center",marginBottom: "2rem"}}>Order History</Typography>

    {/* Desktop View */}
    <Box sx={{margin:"auto",textAlign:"center",display: {xs: "none", md: "grid"},gridTemplateColumns:" 40% 60%", borderTop:"1px solid gray", borderBottom:"1px solid gray"}}>
      <div>
        <img src="#" alt="image"/>
      </div>
      <div style={{display:"grid"}}>
        <div className='textFields'>
          <Typography variant='h6'>Order Number : XXXX</Typography>
          <Typography variant='h6'>Total Price : $$$</Typography>
          <Typography variant='h6'>Date : 11/11/2021</Typography>
          <Typography variant='h6'>Status : Pending</Typography>
        </div>
        <div className='buttons'>
          <Button>Track</Button>
          <Button>Cancel</Button>
          <Button>Invoice</Button>
        </div>
      </div>
    </Box>

    {/* Mobile View */}
    <Box sx={{margin:"auto",textAlign:"start",display: {xs: "grid", md: "none"}, borderTop:"1px solid gray", borderBottom:"1px solid gray"}}>
      <div style={{display:"grid"}}>
        <Typography variant='h6'>Order Number : XXXX</Typography>
        <Typography variant='h6'>Total Price : $$$</Typography>
        <Typography variant='h6'>Date : 11/11/2021</Typography>
        <Typography variant='h6'>Status : Pending</Typography>
      </div>

    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
      <div>
        <img src="#" alt="product" style={{width:"200px",height:"200px"}}/>
      </div>
      <div className='buttons' style={{display:"grid"}} >
        <Button>Track</Button>
        <Button>Cancel</Button>
        <Button>Invoice</Button>
      </div>
    </div>
    </Box>
    </Fragment>
  )
}
