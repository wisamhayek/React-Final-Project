import { Box, Button, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import ProductImage1 from '../../assets/iphone 13.jpeg'
import ProductImage2 from '../../assets/Bose 700.jpeg'
import ProductImage3 from '../../assets/Samsung S22.jpeg'
import ProductImage4 from '../../assets/Nikon D60.jpeg'

export default function RelatedProduct() {
  return (
    <Box sx={{padding:"8px"}}>
        <Typography textAlign={"center"} sx={{
            margin:"auto",
            backgroundColor:"#1976d2",
            color:"white",
            width:"fit-content",
            borderRadius:"1rem",
            padding:"4px",
            marginBottom:"1rem"
            }}>Related Products</Typography>
        <Box sx={{display:"grid",gridTemplateColumns:{xs: "1fr 1fr", md:"1fr 1fr 1fr 1fr"},width:{xs:"100%",md:"80%"},margin:"auto",rowGap:"1rem",columnGap:{xs:"0px",md:"1%"}}}>
            <Box sx={{width:"100%",height:"300px",borderRadius:"20px"}}>
                <img src={ProductImage1} alt="product" style={{width:"100%",aspectRatio:"1/1"}}/>
                <Typography padding={"4px"} variant='h6'>Product Name</Typography>
                <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
                    <Typography padding={"4px"} variant="body1">$$$$</Typography>
                    <Button size="small" variant="contained">Add to Cart</Button>
                </div>
            </Box>
            <Box sx={{width:"100%",height:"300px",borderRadius:"20px"}}>
                <img src={ProductImage2} alt="product" style={{width:"100%",aspectRatio:"1/1"}}/>
                <Typography padding={"4px"} variant='h6'>Product Name</Typography>
                <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
                    <Typography padding={"4px"} variant="body1">$$$$</Typography>
                    <Button size="small" variant="contained">Add to Cart</Button>
                </div>
            </Box>
            <Box sx={{width:"100%",height:"300px",borderRadius:"20px",display:{xs:"none",md:"block"}}}>
                <img src={ProductImage3} alt="product" style={{width:"100%",aspectRatio:"1/1"}}/>
                <Typography padding={"4px"} variant='h6'>Product Name</Typography>
                <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
                    <Typography padding={"4px"} variant="body1">$$$$</Typography>
                    <Button size="small" variant="contained">Add to Cart</Button>
                </div>
            </Box>
            <Box sx={{width:"100%",height:"300px",borderRadius:"20px",display:{xs:"none",md:"block"}}}>
                <img src={ProductImage4} alt="product" style={{width:"100%",aspectRatio:"1/1"}}/>
                <Typography padding={"4px"} variant='h6'>Product Name</Typography>
                <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
                    <Typography padding={"4px"} variant="body1">$$$$</Typography>
                    <Button size="small" variant="contained">Add to Cart</Button>
                </div>
            </Box>
        </Box>
    </Box>
  )
}
