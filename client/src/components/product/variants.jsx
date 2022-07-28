import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { Fragment } from 'react'
import ColorButton from './buttons'

export default function Variants() {
  return (
    <Fragment>
      <Box sx={{padding:"8px",display:"flex",flexDirection:"column",rowGap:"1rem"}}>

      {/* Title */}
      <Box>
        <Typography variant='h5'>Product Name</Typography>
        <Typography variant='caption' color={"gray"}>Category</Typography>
      </Box>
    
      {/* Variant 1 */}
      <Box sx={{display:"flex",flexDirection:"row", alignItems: "center",columnGap:"1rem"}}>
        <Typography variant="h6">Variant Options :</Typography>
        <Typography  variant='body1' color={"blue"}>The Choseen one</Typography>
      </Box>
      <Box sx={{display:"flex",flexDirection:"row",columnGap:"8px"}}>
        {/* <ColorButton color="black"/> */}
        <Button sx={{borderRadius:"50%",color:"white",bgcolor:"red",aspectRatio:"1/1"}}>Red</Button>
        <Button sx={{borderRadius:"50%",color:"white",bgcolor:"blue",aspectRatio:"1/1"}}>Blue</Button>
        <Button sx={{borderRadius:"50%",color:"white",bgcolor:"Black",aspectRatio:"1/1"}}>Black</Button>
        <Button sx={{borderRadius:"50%",color:"black",bgcolor:"white",aspectRatio:"1/1"}}>White</Button>
      </Box>

      {/* Variant 2 */}
      <Box sx={{display:"flex",flexDirection:"row", alignItems: "center",columnGap:"1rem",marginTop:"1rem"}}>
        <Typography variant="h6">Variant Options 2:</Typography>
        <Typography  variant='body1' color={"blue"}>The Choseen one</Typography>
      </Box>
      <Box sx={{display:"flex",flexDirection:"row",columnGap:"8px"}}>
        <Button sx={{borderRadius:"50%",color:"white",bgcolor:"gray",aspectRatio:"1/1"}}>256GB</Button>
        <Button sx={{borderRadius:"50%",color:"white",bgcolor:"gray",aspectRatio:"1/1"}}>512GB</Button>
        <Button sx={{borderRadius:"50%",color:"white",bgcolor:"gray",aspectRatio:"1/1"}}>1TB</Button>
      </Box>

      {/* Price & Cart */}
      <Box sx={{marginTop:"3rem",display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
        <Typography variant='h5'>$$$$</Typography>
        <Button variant='contained'>Add to Cart</Button>
      </Box>
      </Box>
    </Fragment>
  )
}


// Make reusable button for variants colors
// 
// Make the Variant buttons a RadioButton - Only choose one