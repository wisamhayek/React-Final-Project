import { Box, Button, Typography } from '@mui/material'
// import { borderTop } from '@mui/system'
import React, { Fragment, useContext } from 'react'
import { ProfileContext } from '../../App'

export default function OrderHistory() {

  const {profileContext, setProfileContext} = useContext(ProfileContext)

  return (
    <Fragment>
    <Typography variant='h5' sx={{margin:"auto",textAlign:"center",marginBottom: "2rem"}}>Order History</Typography>

    {profileContext?.profile.orders && 
    <>
    {/* Desktop View */}
    <Box sx={{margin:"auto",textAlign:"center",display: {xs: "none", md: "grid"},gridTemplateColumns:" 40% 60%", borderTop:"1px solid gray", borderBottom:"1px solid gray"}}>
      <div>
        <img style={{padding:"1rem"}} src="#" alt="product"/>
      </div>
      <div style={{display:"grid",textAlign:"start",padding:"1rem"}}>
        <div className='textFields'>
          <Typography variant='h6'>Order Number : XXXX</Typography>
          <Typography variant='h6'>Total Price : $$$</Typography>
          <Typography variant='h6'>Date : 11/11/2021</Typography>
          <Typography variant='h6'>Status : Pending</Typography>
        </div>
        <div style={{display:"flex",flexDirection:"row",columnGap:"1rem"}}>
          <Button variant="contained">Track</Button>
          <Button variant="contained">Cancel</Button>
          <Button variant="contained">Invoice</Button>
        </div>
      </div>
    </Box>

    {/* Mobile View */}
    <Box sx={{margin:"auto",textAlign:"start",display: {xs: "grid", md: "none"}, borderTop:"1px solid gray", borderBottom:"1px solid gray"}}>
      <div style={{display:"grid",marginBottom:"1rem"}}>
        <Typography variant='h6'>Order Number : XXXX</Typography>
        <Typography variant='h6'>Total Price : $$$</Typography>
        <Typography variant='h6'>Date : 11/11/2021</Typography>
        <Typography variant='h6'>Status : Pending</Typography>
      </div>

    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
      <div>
        <img src="#" alt="product" style={{width:"200px",height:"200px"}}/>
      </div>
      <div style={{display:"flex",flexDirection:"column",rowGap:"4px"}} >
        <Button variant="contained">Track</Button>
        {/* Cannot cancel if shipped - check from order database */}
        <Button variant="contained">Cancel</Button>
        <Button variant="contained">Invoice</Button>
      </div>
    </div>
    </Box>
    </>
    }

    {!profileContext?.profile.orders &&
      <Typography variant='h5' sx={{margin:"auto",textAlign:"start", marginTop:"2rem"}}>No orders found on file</Typography>
    }
    </Fragment>
  )
}
