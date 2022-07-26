import * as React from 'react';
import { useState,useContext, useEffect } from 'react';
import { Fragment } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Divider } from '@mui/material';

import * as ROUTES from '../../constants/routes';
// import LoginModal from './modal';
import { UserContext } from '../../App';
import { HotelContext } from '../../App';


export default function NavBar() {

    const navigate = useNavigate();

    const {hotelContext, setHotelContext} = useContext(HotelContext)
    const {userContext, setUserContext} = useContext(UserContext)
    const [error, setError] = useState("")

    useEffect(()=>{
      var userActive = JSON.parse(localStorage.getItem('activeUser'));
      if(userActive){
        setUserContext(userActive)
      }else{
        setUserContext(null)
      }
    },[])

    
    const [state, setState] = useState({
        left: false,
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

    //Fetch all hotels from DB and set in global HotelContext
    function getHotels(){
      axios.get(`http://localhost:2000/api/v1/hotels/`)
      .then((response)=>{
        // console.log(response.data.message);
        // console.log(response.data.data);
        setHotelContext(response.data.data)
      }).catch((error)=>{
        setError(error.message)
      })
    }

    //Check if HotelContext is empty -> Fetch it to Global Context
    useEffect(()=>{
      if(hotelContext.length === 0){
        getHotels()  
      }
    },[])


    function logout(){
      setUserContext(null)
      localStorage.clear()
    }


    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                overflow: "scroll",
                padding:"1rem",
                backgroundColor: '#c8b7a6',
                height: "100vh",
                textAlign:"center"
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
          
            <Typography  sx={{textAlign: "center",padding: "1rem"}}>Hotels Logo</Typography>
            {/* <Button onClick={()=>{navigate(ROUTES.DASHBOARD)}}>Home</Button>
            <Button onClick={()=>{navigate(ROUTES.BOOK)}}>Book</Button> */}
            <Divider/>
            {hotelContext.map((hotel, index) => (
              <Card key={index} sx={{ maxWidth: 345, marginTop:"1rem"}}>
              <CardMedia
                component="img"
                height="140"
                image={hotel.imageurl[0]}
                alt="Wisamous Resort"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {hotel.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {hotel.description}
                </Typography>
              </CardContent>
              <CardActions sx={{alignItems: "center", justifyContent: "center"}}>
                {/* <Button size="small" onClick={()=>{navigate(ROUTES.BOOK)}}>Book</Button> */}
                <Button size="small" onClick={()=>{
                    // setTitle(hotel.name)
                    // setHotelContext(hotel)
                    // navigate(ROUTES.DISCOVER)
                }}>Learn More</Button>
              </CardActions>
            </Card>
            ))}
            <Divider sx={{marginTop:"1rem"}}/>
            <Button size="small" onClick={()=>{navigate(ROUTES.ADMIN)}}>Admin</Button>
        </Box>
      );

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#613a03"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:"center" }}>
            Hotel Chain Name
          </Typography>
          {userContext?.name && 
            <div style={{textAlign: "center"}}>
              <Typography sx={{display: {xs: "none", md: "block" } }} >{userContext.name}</Typography>
              <Button variant='contained' sx={{ bgcolor: "#7d94b5", padding: "4px"}} onClick={()=>{logout()}}>Logout</Button>
            </div>
          }
          {!userContext?.name && 
            <Fragment>
              {/* <LoginModal /> */}
            </Fragment>
          }
        </Toolbar>
      </AppBar>
    </Box>
    <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
    >
        {list('left')}
    </Drawer>
    </>
  );
}