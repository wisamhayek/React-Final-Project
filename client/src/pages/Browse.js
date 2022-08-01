import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import NavBar from '../components/navBar/navBar'
import ProductImage1 from '../assets/iphone 13.jpeg'
import ProductImage2 from '../assets/Bose 700.jpeg'
import ProductImage3 from '../assets/Samsung S22.jpeg'
import ProductImage4 from '../assets/Nikon D60.jpeg'
import SearchAppBar from '../components/navBar/search'
import Drawer from '@mui/material/Drawer';
import SortBy from '../components/browse/buttons'

export default function Browse() {

  //Side Menu Drawer
  const [state, setState] = useState({
    left: false,
});

const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    setState({ ...state, [anchor]: open });
};

//Drawer Design/List
const list = (anchor) => (
    <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
            overflow: "scroll",
            padding:"1rem",
            backgroundColor: '#1976d2',
            height: "100vh",
            textAlign:"center"
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography variant='h6' color={"white"}>Filter By</Typography>
      <Divider/>
      <Typography color={"white"}>Category</Typography>
      <Typography color={"white"}>Brand</Typography>
      <Typography color={"white"}>Price</Typography>
    </Box>
);


  return (
    <Fragment>
      <NavBar />
      <Box sx={{display:"grid",gridTemplateColumns:{xs:"100%" ,md:"20% 80%"}, margin:"auto",marginTop:"2%",maxWidth:{xs:"100%",md:"100%",lg:"fit-content"}}}>
        <Box className='sideMenu' sx={{display:{xs:"none" ,md:"block"}, margin:"auto",bgcolor:"#1976d2",width:"-webkit-fill-available",height:"-webkit-fill-available",padding:"1rem"}}>
          <Typography variant='h6' color={"white"}>Filter By</Typography>
          <Divider/>
          <Typography color={"white"}>Category</Typography>
          <Typography color={"white"}>Brand</Typography>
          <Typography color={"white"}>Price</Typography>
        </Box>
        <Box className='browse'>
          <Box className='searchFilter' sx={{display:"grid",gridTemplateColumns:"1fr 1fr",padding:"1rem"}}>
            <SearchAppBar />
            <Box sx={{display:"flex", flexDirection: "row", justifyContent: "flex-end"}}>
            <Button  sx={{display: {xs:"block", md:"none"}}} onClick={toggleDrawer('left', true)}>Filter</Button>
            <SortBy />
            {/* <Button >Sort By</Button> */}
            </Box>
            {/* <TextField id="search-input" label="Search" variant="outlined" size='small' sx={{width:"fit-content"}}/> */}
          </Box>
          <Box className='productGrid' sx={{display:"grid",gridTemplateColumns:{xs: "1fr 1fr", md:"1fr 1fr 1fr 1fr"},width:{xs:"-webkit-fill-available",md:"100%"},margin:"auto",rowGap:"1rem",columnGap:{xs:"0px",md:"1%"},padding:"4px"}}>
            <Box sx={{width:"200px",height:"300px",borderRadius:"20px"}}>
                <img src={ProductImage1} alt="product" style={{height:"200px",width:"200px"}}/>
                <Typography padding={"4px"} variant='h6'>Product Name</Typography>
                <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
                    <Typography padding={"4px"} variant="body1">$$$$</Typography>
                    <Button size="small" variant="contained">Add to Cart</Button>
                </div>
            </Box>
            <Box sx={{width:"200px",height:"300px",borderRadius:"20px"}}>
                <img src={ProductImage2} alt="product" style={{height:"200px",width:"200px"}}/>
                <Typography padding={"4px"} variant='h6'>Product Name</Typography>
                <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
                    <Typography padding={"4px"} variant="body1">$$$$</Typography>
                    <Button size="small" variant="contained">Add to Cart</Button>
                </div>
            </Box>
            <Box sx={{width:"200px",height:"300px",borderRadius:"20px"}}>
                <img src={ProductImage3} alt="product" style={{height:"200px",width:"200px"}}/>
                <Typography padding={"4px"} variant='h6'>Product Name</Typography>
                <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
                    <Typography padding={"4px"} variant="body1">$$$$</Typography>
                    <Button size="small" variant="contained">Add to Cart</Button>
                </div>
            </Box>
            <Box sx={{width:"200px",height:"300px",borderRadius:"20px"}}>
                <img src={ProductImage4} alt="product" style={{height:"200px",width:"200px"}}/>
                <Typography padding={"4px"} variant='h6'>Product Name</Typography>
                <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
                    <Typography padding={"4px"} variant="body1">$$$$</Typography>
                    <Button size="small" variant="contained">Add to Cart</Button>
                </div>
            </Box>
        </Box>
        </Box>
      </Box>
      <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </Fragment>
  )
}

// Make new SearchInput for the product grid
//Use the URL to get the category -> homepage navigate to category