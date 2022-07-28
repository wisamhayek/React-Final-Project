import React, { useState } from 'react'
import { Button} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SliderImage from '../../assets/home1.jpeg'
import Image1 from '../../assets/home1.jpeg'
import Image2 from '../../assets/Nikon D60.jpeg'
import Image3 from '../../assets/Samsung S22.jpeg'
import Image4 from '../../assets/iphone 13.jpeg'
import { Box } from '@mui/system';

export default function ImgSlider() {

  const [active,setActive] = useState(0)
  const images =[Image1,Image2,Image3,Image4]

  function nextSlide(){
    if(active === images.length-1){
      setActive(0)
    }else{
      setActive(active+1)
    }
  }

  function prevSlide(){
    console.log(active);
    console.log(images.length);
    if(active === 0){
      setActive(images.length-1)
    }else{
      setActive(active-1)
    }
  }


  return (
    <div className='imageSliderGrid' style={{display: "grid",gridTemplateColumns: "10% 80% 10%",height: "70vh",maxHeight:"70hv",marginTop:"2rem",marginBottom:"2rem"}}>
    <div className='leftButton' style={{margin:"auto"}}>
    <Button sx={{minWidth:"30px",p:"0"}} onClick={()=>{prevSlide()}}>
        <ChevronLeftIcon fontSize='large'></ChevronLeftIcon>
    </Button>
    </div>
    <Box sx={{display:{xs:"none",md:"block"},width:"100%",height:"100%"}}>
      <img src={images[active]} alt="sliderimage" style={{
        margin:"auto",
        textAlign:"center",
        backgroundColor:"#0a7cd4",
        width: "100%",
        // aspectRatio:"16/9",
        // height:"100%",
        maxHeight:"70vh"
      }}/>
    </Box>

    <Box sx={{display:{xs:"block",md:"none"},width:"100%",height:"100%"}}>
      <img src={images[active]} alt="sliderimage" style={{
        margin:"auto",
        textAlign:"center",
        backgroundColor:"#0a7cd4",
        width: "100%",
        height:"100%"
      }}/>
    </Box>
    
    <div className='rightButton' style={{margin:"auto"}}>
    <Button sx={{minWidth:"30px",p:"0"}} onClick={()=>{nextSlide()}}>
        <ChevronRightIcon fontSize='large'></ChevronRightIcon>
    </Button>
    </div>
    </div>
  )
}


// Fix Image Slider Position (Width/Height) - icons move up and down
// Add under slider Dots to show how many available