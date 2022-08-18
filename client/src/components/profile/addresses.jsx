import { Box, Divider, Typography } from '@mui/material'
import React, { Fragment,useContext } from 'react'
import { ProfileContext } from '../../App.js';
import {AddShippingButton, AddBillingButton, EditShippingButton, DeleteShippingButton, EditBillingButton, DeleteBillingButton} from './addButtons.jsx';


export default function Addresses() {

  const {profileContext, setProfileContext} = useContext(ProfileContext)

  return (
    <Fragment>
    <Typography variant='h5' sx={{margin:"auto",textAlign:"center", marginBottom:"2rem"}}>Addresses</Typography>
    <Box sx={{width:"80%", margin:"auto",marginBottom:'2rem'}}>
      <Typography variant='h6' sx={{margin:"auto",textAlign:"start", marginBottom:"1rem"}}>Shipping Address :</Typography>
      {profileContext?.profile?.shippingAddress && 
      <Box sx={{display: "flex",flexDirection:'row', width: "max-content", textAlign: "start"}}>
        <Box sx={{backgroundColor:"#dedede",width:"fit-content",padding:"2rem",borderRadius:"1rem"}}>
          <Typography>{profileContext.profile.shippingAddress.name}</Typography>
          <Typography>{profileContext.profile.shippingAddress.address1}</Typography>
          <Typography>{profileContext.profile.shippingAddress.address2}</Typography>
          <Typography>{profileContext.profile.shippingAddress.city}, {profileContext.profile.shippingAddress.zipcode}</Typography>
          <Typography>{profileContext.profile.shippingAddress.province}</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",margin:"auto"}}>
          <EditShippingButton />
          <DeleteShippingButton />
        </Box>
      </Box>
      }
    {!profileContext?.profile?.shippingAddress && 
    <>
      <Typography variant='h6' sx={{margin:"auto",textAlign:"start", marginTop:"2rem"}}>No shipping address found on file</Typography>
      <AddShippingButton />
    </>
    }
    </Box>

    <Divider/>
    <Box sx={{width:"80%", margin:"auto",marginTop:"2rem"}}>
      <Typography variant='h6' sx={{margin:"auto",textAlign:"start", marginBottom:"1rem"}}>Billing Address :</Typography>
      {profileContext?.profile?.billingAddress && 
      <Box sx={{display: "flex",flexDirection:'row', width: "max-content", textAlign: "start"}}>
        <Box sx={{backgroundColor:"#dedede",width:"fit-content",padding:"2rem",borderRadius:"1rem"}}>
        <Typography>{profileContext.profile.billingAddress.name}</Typography>
          <Typography>{profileContext.profile.billingAddress.address1}</Typography>
          <Typography>{profileContext.profile.billingAddress.address2}</Typography>
          <Typography>{profileContext.profile.billingAddress.city}, {profileContext.profile.billingAddress.zipcode}</Typography>
          <Typography>{profileContext.profile.billingAddress.province}</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",margin:"auto"}}>
          <EditBillingButton />
          <DeleteBillingButton />
        </Box>
      </Box>
      }
    {!profileContext?.profile?.billingAddress &&
    <>
      <Typography variant='h6' sx={{margin:"auto",textAlign:"start", marginTop:"2rem"}}>No billing address found on file</Typography>
      <AddBillingButton />
    </>
    }
    </Box>
    </Fragment>
  )
}