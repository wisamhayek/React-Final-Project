import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Fragment } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "../../pages/login-signup.css";
import { GoogleLogin } from '@react-oauth/google';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs: "85%", md: "50%"},
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: "1rem",
  borderRadius: "1rem"
};

export default function LoginModal() {


    const {userContext, setUserContext} = useContext(UserContext)

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        setLogin(true);
    }

    const handleClose = () => {
        setOpen(false)
        setError('')
        setEmail('')
        setPassword('')
    }

    const [login, setLogin] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName]=useState("");
    const [errorHandle,setError] = useState(null)

    // Login / Signup with Google
    const handleGoogle =(e)=>{
      console.log(e);
      let userToken = e.credential;
      console.log(userToken);
      axios.post("http://localhost:2000/api/google/login",{
        userToken
        }).then((response)=>{
        console.log(response.data.message);
        setUserContext(response.data.user)
        localStorage.setItem('activeUser', JSON.stringify(response.data.user))
        localStorage.setItem('userToken', JSON.stringify(response.data.token))
        handleClose();
        }).catch((error)=>{
            setError(error.response.data.message)
            console.log(error);
        })
    }
    

    //Login
    const submitForm = (e) => {
        e.preventDefault();
        axios.post("http://localhost:2000/api/v1/users/login",{
        email,
        password
        }).then((response)=>{
        console.log(response.data.message);
        setUserContext(response.data.user)
        localStorage.setItem('activeUser', JSON.stringify(response.data.user))
        localStorage.setItem('userToken', JSON.stringify(response.data.token))
        handleClose();
        }).catch((error)=>{
            setError(error.response.data.message)
            console.log(error);
        })
    }

    //Signup
    const submitForm1 = (e) => {
        e.preventDefault();
        axios.post("http://localhost:2000/api/v1/users/signup",{
          name,
          email,
          password
        }).then((response)=>{
          console.log(response.data.message);
          setUserContext(response.data.user)
          localStorage.setItem('activeUser', JSON.stringify(response.data.user))
          localStorage.setItem('userToken', JSON.stringify(response.data.token))
          handleClose()
        }).catch((error)=>{
            setError(error.message)
        })
      }

    //------->Handle show password visibility Start<-----------
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(event.target.value);
        setPassword(event.target.value)
    };

    const handleClickShowPassword = () => {
        setValues({
        ...values,
        showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault(); 
    };
    //------->Handle show password visibility End<-----------
    const isInvalid = password === '' || email === '';
    const isInvalid1 = password === '' || email === '' || name === '';

  return (
    <div>
        
      <Button  color="inherit" onClick={handleOpen} sx={{display: {xs: "none", md: "flex"}}}>Login/Signup</Button>
      <Button  color="inherit" onClick={handleOpen} sx={{display: {xs: "flex", md: "none"}}}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >


        <Box sx={style}>
        <div className="loginPage">
        <div className="loginForm">
        <img src="https://logos-world.net/wp-content/uploads/2022/02/Dunder-Mifflin-Logo.png" alt="logo"/>
        {errorHandle && <p style={{color:"red"}}>{errorHandle}</p>}
        {login && 
        <Fragment>
        <TextField
            required
            id="outlined-required"
            className="emailInput"
            label="Enter your email address"
            value={email}
            onChange={({target})=>setEmail(target.value)}
        />
        <FormControl sx={{}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={password}
          className="passwordInput"
          onChange={handleChange('password')}
          endAdornment={
              <InputAdornment position="end">
              <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
              >
                  {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
              </InputAdornment>
          }
          label="Password"
          />
      </FormControl>
      <Button color="primary" disabled={isInvalid} className="loginButton" variant="contained" onClick={submitForm}
      >Log in</Button>
      <GoogleLogin
        onSuccess={credentialResponse => {
          // console.log(credentialResponse);
          handleGoogle(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
        <p>Already have an account? 
            <Button onClick={()=>{setLogin(false)}}>Signup</Button>
        </p>
      </Fragment>
      }
      {!login && 
    <Fragment>
         <TextField
            required
            id="outlined-required1"
            className="namelInput"
            label="Enter your full name"
            value={name}
            onChange={({target})=>setName(target.value)}
        />
        <TextField
            required
            id="outlined-required2"
            className="emailInput"
            label="Enter your email address"
            value={email}
            onChange={({target})=>setEmail(target.value)}
        />

        <FormControl sx={{}} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={password}
            className="passwordInput"
            onChange={handleChange('password')}
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                >
                    {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
                </InputAdornment>
            }
            label="Password"
            />
        </FormControl>
        <Button disabled={isInvalid1} className="loginButton" variant="contained" onClick={submitForm1}
        >Sign Up</Button>
        <GoogleLogin
          onSuccess={credentialResponse => {
            handleGoogle(credentialResponse)
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          text='signup_with'
          context='signup'
        />
         <Typography>Already have an account? 
            <Button onClick={()=>{setLogin(true)}}> Sign In</Button>
        </Typography>
    </Fragment>
      }
      </div>
      </div>
        </Box>
      </Modal>

    </div>
  );
}
