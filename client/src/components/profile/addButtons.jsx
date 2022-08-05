import React, { Fragment,useContext,useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { ProfileContext, UserContext } from '../../App';


export function AddShippingButton() {

    const {userContext, setUserContext} = useContext(UserContext)
    const {profileContext, setProfileContext} = useContext(ProfileContext)

    const provinces =["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"]

    const [ownerid, setID] = useState(userContext.id);
    const [name, setName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [province, setProvince] = useState('');

    const handleChange = (event) => {
      setProvince(event.target.value);
    };

    // Checkbox for shipping address Modal
    const [checked, setChecked] = useState(false);
    const handleCheckChange = (event) => {
      setChecked(event.target.checked);
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => setOpen(false);

    // Clear the field after updating
    function clearFields(){
      setName("");setAddress1("");setAddress2("");setCity("");setChecked(false);setZipcode("");setProvince("");
    }

    // Refresh the Profile Context after updating
    function refreshProfile(){
      axios.get(`http://localhost:2000/api/v1/profile/${ownerid}`)
      .then((response)=>{
        setProfileContext(response.data.data)
      }).catch((error)=>{
          console.log(error);
      })
    }

    function updateShipping(){
      axios.post("http://localhost:2000/api/v1/profile/shipping",{ownerid,name,address1,address2,city,zipcode,province,checked})
      .then((resp)=>{
        console.log(resp);
        clearFields();
        refreshProfile();
      }).catch((error)=>{
        console.log(error);
      })
    }

  return (
    <>
    <Button variant="contained" size='large' sx={{marginTop:"2rem"}} onClick={handleClickOpen}>Add Shipping Address</Button>
    <Dialog open={open} onClose={handleClose}> 
        <DialogTitle>Shipping Address</DialogTitle>
        <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"}}>
          <TextField value={name} size="small" id="full-name" label="Full Name" variant="outlined" sx={{marginTop:"8px"}} onChange={(e)=>{setName(e.target.value)}}/>
          <TextField value={address1} size="small" id="address-1" label="Address 1" variant="outlined" onChange={(e)=>{setAddress1(e.target.value)}}/>
          <TextField value={address2} size="small" id="address-2" label="Address 2" variant="outlined" onChange={(e)=>{setAddress2(e.target.value)}}/>
          <TextField value={city} size="small" id="city" label="City" variant="outlined" onChange={(e)=>{setCity(e.target.value)}}/>
          <TextField value={zipcode} size="small" id="zipcode" label="Zipcode" variant="outlined" onChange={(e)=>{setZipcode(e.target.value)}}/>
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
          <Button onClick={()=>{
            handleClose();
            updateShipping();
            }} variant="contained">ADD</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}


export function AddBillingButton() {

    const {userContext, setUserContext} = useContext(UserContext);
    const {profileContext, setProfileContext} = useContext(ProfileContext);

    const provinces =["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"];

    const [ownerid, setID] = useState(userContext.id);
    const [name, setName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [province, setProvince] = useState('');

    const handleChange = (event) => {
      setProvince(event.target.value);
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => setOpen(false);

    function clearFields(){
      setName("");setAddress1("");setAddress2("");setCity("");setZipcode("");setProvince("");
    }

    function refreshProfile(){
      axios.get(`http://localhost:2000/api/v1/profile/${ownerid}`)
      .then((response)=>{
        setProfileContext(response.data.data)
      }).catch((error)=>{
        console.log(error);
      })
    }

    function updateBilling(){
      axios.post("http://localhost:2000/api/v1/profile/billing",{ownerid,name,address1,address2,city,zipcode,province})
      .then((resp)=>{
        console.log(resp);
        clearFields();
        refreshProfile();
      }).catch((error)=>{
        console.log(error);
      })
    }

  return (
    <>
    <Button variant="contained" size='large' sx={{marginTop:"2rem"}} onClick={handleClickOpen}>Add Billing Address</Button>
    <Dialog open={open} onClose={handleClose}> 
        <DialogTitle>Billing Address</DialogTitle>
        <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px",width:"270px"}}>
        <TextField value={name} size="small" id="full-name" label="Full Name" variant="outlined" sx={{marginTop:"8px"}} onChange={(e)=>{setName(e.target.value)}}/>
          <TextField value={address1} size="small" id="address-1" label="Address 1" variant="outlined" onChange={(e)=>{setAddress1(e.target.value)}}/>
          <TextField value={address2} size="small" id="address-2" label="Address 2" variant="outlined" onChange={(e)=>{setAddress2(e.target.value)}}/>
          <TextField value={city} size="small" id="city" label="City" variant="outlined" onChange={(e)=>{setCity(e.target.value)}}/>
          <TextField value={zipcode} size="small" id="zipcode" label="Zipcode" variant="outlined" onChange={(e)=>{setZipcode(e.target.value)}}/>
          <InputLabel id="demo-simple-select-label">Province</InputLabel>
          <Select labelId="shipping-province" id="province" value={province} label="Province" onChange={handleChange} sx={{height:"40px"}}>
          {provinces.map((province,index)=>(
            <MenuItem key={index} value={province}>{province}</MenuItem>
          ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{
            handleClose();
            updateBilling();
            }} variant="contained">ADD</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}


export function EditShippingButton() {

  const {userContext, setUserContext} = useContext(UserContext)
  const {profileContext, setProfileContext} = useContext(ProfileContext)

  const provinces =["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"]

  let userShippingAddress = profileContext.profile.shippingAddress

  const [ownerid, setID] = useState(userContext.id);
  const [name, setName] = useState(userShippingAddress.name);
  const [address1, setAddress1] = useState(userShippingAddress.address1);
  const [address2, setAddress2] = useState(userShippingAddress.address2);
  const [city, setCity] = useState(userShippingAddress.city);
  const [zipcode, setZipcode] = useState(userShippingAddress.zipcode);
  const [province, setProvince] = useState(userShippingAddress.province);

  const handleChange = (event) => {
    setProvince(event.target.value);
  };

  // Checkbox for shipping address Modal
  const [checked, setChecked] = useState(false);
  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Clear the field after updating
  function clearFields(){
    setName("");setAddress1("");setAddress2("");setCity("");setChecked(false);setZipcode("");setProvince("");
  }

  // Refresh the Profile Context after updating
  function refreshProfile(){
    axios.get(`http://localhost:2000/api/v1/profile/${ownerid}`)
    .then((response)=>{
      setProfileContext(response.data.data)
    }).catch((error)=>{
        console.log(error);
    })
  }

  function updateShipping(){
    axios.post("http://localhost:2000/api/v1/profile/shipping",{ownerid,name,address1,address2,city,zipcode,province,checked})
    .then((resp)=>{
      console.log(resp);
      clearFields();
      refreshProfile();
    }).catch((error)=>{
      console.log(error);
    })
  }

return (
  <>
  <Button size='small' sx={{height:"fit-content",width:"fit-content"}} onClick={handleClickOpen}>Edit</Button>
  <Dialog open={open} onClose={handleClose}> 
      <DialogTitle>Edit Shipping Address</DialogTitle>
      <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"}}>
        <TextField value={name} size="small" id="full-name" label="Full Name" variant="outlined" sx={{marginTop:"8px"}} onChange={(e)=>{setName(e.target.value)}}/>
        <TextField value={address1} size="small" id="address-1" label="Address 1" variant="outlined" onChange={(e)=>{setAddress1(e.target.value)}}/>
        <TextField value={address2} size="small" id="address-2" label="Address 2" variant="outlined" onChange={(e)=>{setAddress2(e.target.value)}}/>
        <TextField value={city} size="small" id="city" label="City" variant="outlined" onChange={(e)=>{setCity(e.target.value)}}/>
        <TextField value={zipcode} size="small" id="zipcode" label="Zipcode" variant="outlined" onChange={(e)=>{setZipcode(e.target.value)}}/>
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
        <Button onClick={()=>{
          handleClose();
          updateShipping();
          }} variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  </>
)
}



export function DeleteShippingButton() {

  const {userContext, setUserContext} = useContext(UserContext)
  const {profileContext, setProfileContext} = useContext(ProfileContext)
  const [ownerid, setID] = useState(userContext.id);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Refresh the Profile Context after updating
  function refreshProfile(){
    axios.get(`http://localhost:2000/api/v1/profile/${ownerid}`)
    .then((response)=>{
      setProfileContext(response.data.data)
    }).catch((error)=>{
        console.log(error);
    })
  }

  function deleteShipping(){
    axios.delete("http://localhost:2000/api/v1/profile/shipping",{data: {ownerid:ownerid}})
    .then((resp)=>{
      console.log(resp);
      refreshProfile();
    }).catch((error)=>{
      console.log(error);
    })
  }

return (
  <>
  <Button size='small' sx={{height:"fit-content",width:"fit-content"}} onClick={handleClickOpen}>Delete</Button>
  <Dialog open={open} onClose={handleClose}> 
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"}}>
        <Typography>Are you sure you want to delete the shipping address? this action can't be reverted</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={()=>{
          handleClose();
          deleteShipping();
          }} variant="contained">Delete</Button>
      </DialogActions>
    </Dialog>
  </>
)
}



export function EditBillingButton() {

  const {userContext, setUserContext} = useContext(UserContext)
  const {profileContext, setProfileContext} = useContext(ProfileContext)

  const provinces =["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"]

  let userBillingAddress = profileContext.profile.billingAddress

  const [ownerid, setID] = useState(userContext.id);
  const [name, setName] = useState(userBillingAddress.name);
  const [address1, setAddress1] = useState(userBillingAddress.address1);
  const [address2, setAddress2] = useState(userBillingAddress.address2);
  const [city, setCity] = useState(userBillingAddress.city);
  const [zipcode, setZipcode] = useState(userBillingAddress.zipcode);
  const [province, setProvince] = useState(userBillingAddress.province);

  const handleChange = (event) => {
    setProvince(event.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Clear the field after updating
  function clearFields(){
    setName("");setAddress1("");setAddress2("");setCity("");setZipcode("");setProvince("");
  }

  // Refresh the Profile Context after updating
  function refreshProfile(){
    axios.get(`http://localhost:2000/api/v1/profile/${ownerid}`)
    .then((response)=>{
      setProfileContext(response.data.data)
    }).catch((error)=>{
        console.log(error);
    })
  }

  function updateBilling(){
    axios.post("http://localhost:2000/api/v1/profile/billing",{ownerid,name,address1,address2,city,zipcode,province})
    .then((resp)=>{
      console.log(resp);
      clearFields();
      refreshProfile();
    }).catch((error)=>{
      console.log(error);
    })
  }

return (
  <>
  <Button size='small' sx={{height:"fit-content",width:"fit-content"}} onClick={handleClickOpen}>Edit</Button>
  <Dialog open={open} onClose={handleClose}> 
      <DialogTitle>Edit Billing Address</DialogTitle>
      <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px",width:"270px"}}>
        <TextField value={name} size="small" id="full-name" label="Full Name" variant="outlined" sx={{marginTop:"8px"}} onChange={(e)=>{setName(e.target.value)}}/>
        <TextField value={address1} size="small" id="address-1" label="Address 1" variant="outlined" onChange={(e)=>{setAddress1(e.target.value)}}/>
        <TextField value={address2} size="small" id="address-2" label="Address 2" variant="outlined" onChange={(e)=>{setAddress2(e.target.value)}}/>
        <TextField value={city} size="small" id="city" label="City" variant="outlined" onChange={(e)=>{setCity(e.target.value)}}/>
        <TextField value={zipcode} size="small" id="zipcode" label="Zipcode" variant="outlined" onChange={(e)=>{setZipcode(e.target.value)}}/>
        <InputLabel id="demo-simple-select-label">Province</InputLabel>
        <Select labelId="shipping-province" id="province" value={province} label="Province" onChange={handleChange} sx={{height:"40px"}}>
        {provinces.map((province,index)=>(
          <MenuItem key={index} value={province}>{province}</MenuItem>
        ))}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={()=>{
          handleClose();
          updateBilling();
          }} variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  </>
)
}



export function DeleteBillingButton() {

  const {userContext, setUserContext} = useContext(UserContext)
  const {profileContext, setProfileContext} = useContext(ProfileContext)
  const [ownerid, setID] = useState(userContext.id);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Refresh the Profile Context after updating
  function refreshProfile(){
    axios.get(`http://localhost:2000/api/v1/profile/${ownerid}`)
    .then((response)=>{
      setProfileContext(response.data.data)
    }).catch((error)=>{
        console.log(error);
    })
  }

  function deleteBilling(){
    axios.delete("http://localhost:2000/api/v1/profile/billing",{data: {ownerid:ownerid}})
    .then((resp)=>{
      console.log(resp);
      refreshProfile();
    }).catch((error)=>{
      console.log(error);
    })
  }

return (
  <>
  <Button size='small' sx={{height:"fit-content",width:"fit-content"}} onClick={handleClickOpen}>Delete</Button>
  <Dialog open={open} onClose={handleClose}> 
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"}}>
        <Typography>Are you sure you want to delete the billing address? this action can't be reverted</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={()=>{
          handleClose();
          deleteBilling();
          }} variant="contained">Delete</Button>
      </DialogActions>
    </Dialog>
  </>
)
}