import { Box, Button, Typography } from '@mui/material'
import React, { Fragment } from 'react'

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';


export default function Payments() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();


  return (
    <Fragment>
    <Typography variant='h5' sx={{margin:"auto",textAlign:"center", marginBottom:"2rem"}}>Payments</Typography>
    <Box sx={{width:"80%", margin:"auto"}}>
      <Typography variant='h6' sx={{margin:"auto",textAlign:"start", marginBottom:"1rem"}}>Saved Cards :</Typography>
      <Box sx={{display: "flex",flexDirection:'row'}}>
        <Typography sx={{backgroundColor:"#dedede",width:"fit-content",padding:"1rem",borderRadius:"1rem"}}>XXX-1234</Typography>
        <Button size='small'>Delete</Button>
      </Box>
    <Button variant="contained" size='large' sx={{marginTop:"2rem"}} onClick={handleClickOpen}>Add Card</Button>
    <Typography variant='h6' sx={{margin:"auto",textAlign:"center", marginTop:"2rem"}}>--- OR ---</Typography>
    <Typography variant='h6' sx={{margin:"auto",textAlign:"start", marginTop:"2rem"}}>You don't have any cards on file</Typography>
    </Box>
    <Dialog open={open} onClose={handleClose}> 
        <DialogTitle>Add New Card</DialogTitle>
        <DialogContent>
          <PaymentInputsWrapper {...wrapperProps} styles={{fieldWrapper:{margin:'0px'}}}>
            <svg {...getCardImageProps({ images })} />
            <input {...getCardNumberProps()} />
            <input {...getExpiryDateProps()} />
            <input {...getCVCProps()} />
          </PaymentInputsWrapper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant="contained">ADD</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

// Credit Card Validator
// https://github.com/medipass/react-payment-inputs#paymentinputswrapper-props