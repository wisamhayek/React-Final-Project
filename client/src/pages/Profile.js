import React, { Fragment, useEffect,useContext } from 'react'
import { UserContext } from '../App'
import { ProfileContext } from '../App'
import NavBar from '../components/navBar/navBar'
import ProfileMenu from '../components/profile/profileMenu'
import axios from 'axios'
import { Typography } from '@mui/material'
import LoginModal from '../components/navBar/loginModal';
import { Box } from '@mui/system'

export default function Profile() {

  const {userContext, setUserContext} = useContext(UserContext)
  const {profileContext, setProfileContext} = useContext(ProfileContext)

  const id = userContext?.id;

  useEffect(()=>{
    if(userContext?.id){
      axios.get(`/api/v1/profile/${id}`)
      .then((response)=>{
      // console.log(response.data.message);
      // console.log(response.data.data);
      setProfileContext(response.data.data)
      }).catch((error)=>{
          console.log(error);
      })
    }
  },[userContext])
  
  return (
    <Fragment>
      <NavBar />
      {userContext?.id &&
        <ProfileMenu />
      }
      {!userContext?.id && 
      <>
        <Typography variant="h5" sx={{margin:"auto",textAlign:"center",marginTop:"2rem"}}>You are not logged in</Typography>
        <Box sx={{width:"fit-content",margin:"auto",bgcolor:"#1976d2",borderRadius:"8px",marginTop:"1rem"}}>
          <LoginModal />
        </Box>
      </>
      }
    </Fragment>
  )
}
