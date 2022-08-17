import { Box, Button, Typography } from '@mui/material'
import React, { Fragment,useContext,useEffect,useState } from 'react'

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { ProfileContext, UserContext } from '../../App';
import axios from 'axios';
import { DeletePaymnetButton } from './addButtons';



export default function Payments() {

  const [open, setOpen] = useState(false);

  const {userContext, setUserContext} = useContext(UserContext)
  const {profileContext, setProfileContext} = useContext(ProfileContext)

  const [ownerid] = useState(userContext.id);
  const [name,setName] = useState('');
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    meta,
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  const { erroredInputs } = meta;
  const isInvalid = erroredInputs.cardNumber || erroredInputs.expiryDate || erroredInputs.cvc || cardNumber === "" || expiry === "" || cvc === "";

  function clearFields(){
    setName("");setCardNumber("");setExpiry("");setCvc("");
  }

  function refreshProfile(){
    axios.get(`http://localhost:2000/api/v1/profile/${ownerid}`)
    .then((response)=>{
      setProfileContext(response.data.data)
    }).catch((error)=>{
        console.log(error);
    })
  }


  function updatePayment(){
    axios.post("http://localhost:2000/api/v1/profile/payment",{ownerid,name,cardNumber,expiry,cvc})
    .then((resp)=>{
      console.log(resp);
      clearFields();
      refreshProfile();
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <Fragment>
    <Typography variant='h5' sx={{margin:"auto",textAlign:"center", marginBottom:"2rem"}}>Payments</Typography>
    {profileContext?.profile.paymentMethod && 
    <Box sx={{width:"80%", margin:"auto"}}>
      <Typography variant='h6' sx={{margin:"auto",textAlign:"start", marginBottom:"1rem"}}>Saved Cards :</Typography>
      <Box sx={{display: "flex",flexDirection:'row'}}>
        <Typography sx={{backgroundColor:"#dedede",width:"fit-content",padding:"1rem",borderRadius:"1rem"}}>XXX-{profileContext.profile.paymentMethod.last4}</Typography>
        <DeletePaymnetButton />
      </Box>
    <Button variant="contained" size='large' sx={{marginTop:"2rem"}} onClick={handleClickOpen}>Add Card</Button>
    </Box>
    }
    {!profileContext?.profile.paymentMethod && 
    <Box sx={{width:"80%", margin:"auto"}}>
    <Typography variant='h6' sx={{margin:"auto",textAlign:"start",width:"80%"}}>You don't have any cards on file</Typography>
    <Button variant="contained" size='large' sx={{marginTop:"2rem"}} onClick={handleClickOpen}>Add Card</Button>
    </Box>
    }
    <Dialog open={open} onClose={handleClose}> 
        <DialogTitle>Add New Card</DialogTitle>
        <DialogContent sx={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        <TextField value={name} size="small" id="name-on-card" label="Name On Card" variant="outlined" sx={{marginTop:"8px"}} onChange={(e)=>{setName(e.target.value)}}/>
          <PaymentInputsWrapper {...wrapperProps} styles={{fieldWrapper:{margin:'0px'}}}>
            <svg {...getCardImageProps({ images })} />
            {/* <input {...getCardNumberProps({ onChange: (e)=>{setCardNumber(e.target.value) },onBlur:(e)=>{console.log(e);} ,onError: ()=>{serCardError(true)} })} value={cardNumber} /> */}
            <input {...getCardNumberProps({ onChange: (e)=>{setCardNumber(e.target.value) } })} value={cardNumber} />
            <input {...getExpiryDateProps({ onChange: (e)=>{setExpiry(e.target.value) } })} value={expiry}/>
            <input {...getCVCProps({ onChange: (e)=>{setCvc(e.target.value) } })} value={cvc}/>
          </PaymentInputsWrapper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={isInvalid} onClick={()=>{
            handleClose();
            updatePayment();
            }} variant="contained">ADD</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

// Credit Card Validator
// https://github.com/medipass/react-payment-inputs#paymentinputswrapper-props