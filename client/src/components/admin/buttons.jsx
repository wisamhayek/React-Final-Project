import React, { Fragment,useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

export function AddProduct() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <Tooltip title="Create Coupon">
       <IconButton color='primary' size="small" onClick={handleClickOpen}>
          Add Product
          <AddIcon />
        </IconButton>
      </Tooltip>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"}}>
          <TextField size="small" id="promotion-name" label="Promotion Name" variant="outlined" sx={{marginTop:"4px"}} />
          <TextField size="small" id="coupon-code-value" label="Coupon Code" variant="outlined" />
          <TextField size="small" id="quantity" label="Quantity" variant="outlined" />
          <TextField size="small" id="discound-percent" label="Percent %" variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant="contained">Add Product</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}


export function AddCoupon() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <Tooltip title="Create Coupon">
       <IconButton color='primary' size="small" onClick={handleClickOpen}>
          Create Coupon
          <AddIcon />
        </IconButton>
      </Tooltip>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Coupon</DialogTitle>
        <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"}}>
          <TextField size="small" id="promotion-name" label="Promotion Name" variant="outlined" sx={{marginTop:"4px"}} />
          <TextField size="small" id="coupon-code-value" label="Coupon Code" variant="outlined" />
          <TextField size="small" id="quantity" label="Quantity" variant="outlined" />
          <TextField size="small" id="discound-percent" label="Percent %" variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant="contained">Create Coupon</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}