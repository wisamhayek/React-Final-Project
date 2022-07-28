import { Box } from '@mui/system'
import React, { Fragment } from 'react'
import Image1 from '../../assets/home1.jpeg'
import Image2 from '../../assets/Nikon D60.jpeg'
import Image3 from '../../assets/Samsung S22.jpeg'
import Image4 from '../../assets/iphone 13.jpeg'

export default function ImageSlider() {
  return (
    <Fragment>
    <Box sx={{display:{xs: "none",md:"block"},margin:"auto"}}>
      <img src={Image4} alt="product" style={{width:"100%",maxWidth:"500px"}}/>
    </Box>
    <Box sx={{display:{xs: "block",md:"none"},margin:"auto"}}>
      <img src={Image4} alt="product" style={{width:"100%",maxWidth:"500px"}}/>
  </Box>
  </Fragment>
  )
}
