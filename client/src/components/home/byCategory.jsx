import { Button, Typography } from '@mui/material'
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
            padding:"4px"
            }}>Browse By Category</Typography>
        <div className='categories' style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",width:"80%",margin:"auto"}}>
            {/* loop through the categories from database */}
            <Button variant="outlined" startIcon={<LaptopIcon fontSize='large' />} sx={{
                height:"200px",
                width:"200px",
                borderRadius:"50%",
                margin:"auto",
                }}>
                {/* <LaptopIcon fontSize='large'></LaptopIcon> */}
                {/* <Typography>Computers</Typography> */}
                Computers</Button>
            <Button variant="outlined" sx={{
                height:"200px",
                width:"200px",
                borderRadius:"50%",
                margin:"auto"
                }}>Electronics</Button>
            <Button variant="outlined" sx={{
                height:"200px",
                width:"200px",
                borderRadius:"50%",
                margin:"auto"
                }}>Electronics</Button>
            <Button variant="outlined" sx={{
                height:"200px",
                width:"200px",
                borderRadius:"50%",
                margin:"auto"
                }}>Electronics</Button>
            
        </div>
    </Fragment>
  )
}
