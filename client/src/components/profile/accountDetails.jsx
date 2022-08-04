import { Box, Button, Typography } from '@mui/material'
import React, { Fragment,useContext, useState } from 'react'
import { UserContext } from '../../App'

export default function AccountDetails() {

  const {userContext, setUserContext} = useContext(UserContext)

  return (
    <Fragment>
    <Typography variant='h5' sx={{margin:"auto",textAlign:"center", marginBottom:"2rem"}}>Account Details</Typography>
    <Box sx={{marginLeft:"2rem",textAlign:"start", width:"fit-content"}}>
      <div style={{display:"grid",gridTemplateColumns: "1fr 1fr"}}>
        <div className='textFields'>
          <Typography variant='h6'>Name : </Typography>
          <Typography variant='h6'>Email :</Typography>
          <Typography variant='h6'>Password :</Typography>
        </div>
        <div className='rightFields'>
          <Typography variant='h6'>{userContext.name}</Typography>
          <Typography variant='h6'>{userContext.email}</Typography>
          <Typography variant='h6'>********</Typography>
        </div>
      </div>
    </Box>
    </Fragment>
  )
}

// Render if Mobile
// https://stackoverflow.com/questions/44480053/how-to-detect-if-screen-size-has-changed-to-mobile-in-react
