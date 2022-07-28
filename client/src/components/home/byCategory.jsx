import { Box, Button, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import LaptopIcon from '@mui/icons-material/Laptop';

export default function ByCategory() {
  return (
    <Fragment>
        <Typography textAlign={"center"} sx={{
            margin:"auto",
            backgroundColor:"#1976d2",
            color:"white",
            width:"fit-content",
            borderRadius:"1rem",
            padding:"4px",
            marginBottom:"1rem"
            }}>Browse By Category</Typography>
        <Box className='categories' sx={{display:"grid",gridTemplateColumns:{xs: "1fr 1fr", md:"1fr 1fr 1fr 1fr"},width:{xs:"100%",md:"80%"},margin:"auto",rowGap:"1rem",columnGap:{xs:"0px",md:"1%"},marginBottom:"2rem"}}>
            {/* loop through the categories from database */}
            <Button variant="outlined" startIcon={<LaptopIcon fontSize='large' />} sx={{
               height: {xs:"150px",md:"200px"},
               width: {xs:"150px",md:"200px"},
                borderRadius:"50%",
                margin:"auto",
                }}>
                {/* <LaptopIcon fontSize='large'></LaptopIcon> */}
                {/* <Typography>Computers</Typography> */}
            Computers</Button>
            <Button variant="outlined" sx={{
                height: {xs:"150px",md:"200px"},
                width: {xs:"150px",md:"200px"},
                borderRadius:"50%",
                margin:"auto"
            }}>Electronics</Button>
            <Button variant="outlined" sx={{
               height: {xs:"150px",md:"200px"},
               width: {xs:"150px",md:"200px"},
                borderRadius:"50%",
                margin:"auto"
            }}>Electronics</Button>
            <Button variant="outlined" sx={{
               height: {xs:"150px",md:"200px"},
               width: {xs:"150px",md:"200px"},
                borderRadius:"50%",
                margin:"auto"
            }}>Electronics</Button>
        </Box>
    </Fragment>
  )
}
