import React from 'react'
import { Button} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function ImgSlider() {
  return (
    <div className='imageSliderGrid' style={{display: "grid",gridTemplateColumns: "10% 80% 10%",height: "70vh",marginTop:"2rem"}}>
    <div className='leftButton' style={{margin:"auto"}}>
    <Button>
        <ChevronLeftIcon fontSize='large'></ChevronLeftIcon>
    </Button>
    </div>
    <div className='ImageSlider' style={{
    margin:"auto",
    textAlign:"center",
    backgroundColor:"#0a7cd4",
    width: "100%",
    height:"100%"
    }}>
    Image
    </div>
    <div className='rightButton' style={{margin:"auto"}}>
    <Button>
        <ChevronRightIcon fontSize='large'></ChevronRightIcon>
    </Button>
    </div>
    </div>
  )
}
