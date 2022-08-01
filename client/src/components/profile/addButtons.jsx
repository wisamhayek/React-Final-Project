import React, { Fragment,useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';




export function AddShippingButton() {

    const provinces =["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"]

    const [province, setProvince] = useState('');

    const handleChange = (event) => {
        setProvince(event.target.value);
      };


    const [checked, setChecked] = useState(false);
    const handleCheckChange = (event) => {
        setChecked(event.target.checked);
    };


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

  return (
    <>
    <Button variant="contained" size='large' sx={{marginTop:"2rem"}} onClick={handleClickOpen}>Add Shipping Address</Button>
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
    </>
  )
}


export function AddBillingButton() {

    const provinces =["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"]

    const [province, setProvince] = useState('');

    const handleChange = (event) => {
        setProvince(event.target.value);
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

  return (
    <>
    <Button variant="contained" size='large' sx={{marginTop:"2rem"}} onClick={handleClickOpen}>Add Billing Address</Button>
    <Dialog open={open} onClose={handleClose}> 
        <DialogTitle>Billing Address</DialogTitle>
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant="contained">ADD</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}