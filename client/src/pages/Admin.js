import React, { Fragment, useState,useContext, useEffect } from 'react'
import NavBar from '../components/navBar/navBar'
import AdminMenu from '../components/admin/adminMenu'
import axios from 'axios'
import { UserContext } from '../App'
import { Typography } from '@mui/material'


export default function Admin() {
  const {userContext, setUserContext} = useContext(UserContext);
  const [isAdmin,setAdmin] = useState(false);
  const id = userContext?.id;

  function checkAdmin(userid){
    axios.get(`http://localhost:2000/api/v1/users/${userid}`)
        .then((response)=>{
        if(response.data.data.isAdmin === true){
          setAdmin(true)
        }else{
          setAdmin(false)
        }
        }).catch((error)=>{
            console.log(error);
        })
  }

    useEffect(()=>{
      if(userContext?.id){
        checkAdmin(id);
      }
      else{
        setAdmin(false);
      }
    },[userContext])

  return (
    <Fragment>
      <NavBar />
      {isAdmin && 
      <AdminMenu />}
      {!isAdmin && 
      <Typography variant={"h5"} sx={{margin:"auto",textAlign:"center",marginTop:"2rem"}}>You don't have admin privilages</Typography>}
    </Fragment>
  )
}
