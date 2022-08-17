import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

export default function AddShippingButton(props) {

    console.log(props.active);

    const provinces =["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"]
    const [province, setProvince] = useState('');

    const [open, setOpen] = useState(props.active);
    // let open = props.active;

    useEffect(()=>{
        setOpen(props.active)
    },[props])

    const handleClose = () => setOpen(false);

    const handleChange = (event) => {
        setProvince(event.target.value);
    };

    const [checked, setChecked] = useState(false);

    const handleCheckChange = (event) => {
        setChecked(event.target.checked);
    };

  return (
    <Dialog open={open} onClose={handleClose}> 
        <DialogTitle>Shipping Address</DialogTitle>
        <DialogContent>
          <TextField id="full-name" label="Full Name" variant="outlined" />
          <TextField id="address-1" label="Address 1" variant="outlined" />
          <TextField id="address-2" label="Address 2" variant="outlined" />
          <TextField id="city" label="City" variant="outlined" />
          <TextField id="zipcode" label="Zipcode" variant="outlined" />
          <TextField id="province" label="Province" variant="outlined" />
          <InputLabel id="demo-simple-select-label">Province</InputLabel>
          <Select labelId="shipping-province" id="select-province" value={province} label="Province" onChange={handleChange}>
          {provinces.map((province,index)=>(
            <MenuItem key={index} value={province}>{province}</MenuItem>
          ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant="contained">ADD</Button>
          <Button>billing same as shipping</Button>
          <Checkbox
            checked={checked}
            onChange={handleCheckChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </DialogActions>
      </Dialog>
  )
}
