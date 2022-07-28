import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import AddShippingButton from './forms';


export default function Addresses() {

  const provinces =["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"]
  const [province, setProvince] = useState('');

  //Shipping Address Form
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setProvince(event.target.value);
  };

  const [checked, setChecked] = useState(false);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

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
    <Button variant="contained" size='large' sx={{marginTop:"2rem"}} onClick={handleClickOpen}>Add Shipping Address</Button>
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
    <Button variant="contained" size='large' sx={{marginTop:"2rem"}} onClick={handleClickOpen}>Add Billing Address</Button>
    <Typography variant='h6' sx={{margin:"auto",textAlign:"center", marginTop:"2rem"}}>--- OR ---</Typography>
    <Typography variant='h6' sx={{margin:"auto",textAlign:"start", marginTop:"2rem"}}>No billing address found on file</Typography>
    </Box>

    {/* <AddShippingButton active={open}/> */}
    <Dialog open={open} onClose={handleClose}> 
        <DialogTitle>Shipping Address</DialogTitle>
        <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"}}>
          <TextField size="small" id="full-name" label="Full Name" variant="outlined" sx={{marginTop:"4px"}} />
          <TextField size="small" id="address-1" label="Address 1" variant="outlined" />
          <TextField size="small" id="address-2" label="Address 2" variant="outlined" />
          <TextField size="small" id="city" label="City" variant="outlined" />
          <TextField size="small" id="zipcode" label="Zipcode" variant="outlined" />
          {/* <TextField id="province" label="Province" variant="outlined" /> */}
          <InputLabel id="demo-simple-select-label">Province</InputLabel>
          <Select labelId="shipping-province" id="province" value={province} label="Province" onChange={handleChange} sx={{height:"40px"}}>
          {provinces.map((province,index)=>(
            <MenuItem key={index} value={province}>{province}</MenuItem>
          ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Typography>Same for Billing
            <Checkbox
              checked={checked}
              onChange={handleCheckChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Typography>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant="contained">ADD</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

// Add Dialog or Modal for Button to add/update addresses
// Make the forms in seprate .jsx file should be easier to hanlde