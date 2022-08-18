import { Box, Button, Divider, FormControl, FormControlLabel,  InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import NavBar from '../components/navBar/navBar'
// import SearchAppBar from '../components/navBar/search'
import Drawer from '@mui/material/Drawer';

import { useParams } from 'react-router-dom'
import GridProducts from '../components/browse/gridProducts'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Browse() {

  const navigate = useNavigate();

  const {cat} = useParams()

  useEffect(()=>{
    document.title ='Browse';
  },[])

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

  const [categories,setCategories] = useState([])
  // const [selectedValue, setSelectedValue] = useState(cat);

  function fetchCategories(){
    //Fetch category and return/ use the first 4
    axios.get(`/api/v1/category`)
    .then((response)=>{
        let data = response.data.data;
        setCategories(data);
    }).catch((error)=>{
        console.log(error);
    })
}

useEffect(()=>{
    fetchCategories();
},[]) 

// useEffect(()=>{
//   setSelectedValue(cat);
// },[cat]) 

const handleChangeCategory = (event) => {
  // console.log(event.target.value);
  navigate(`/browse/${event.target.value}`)
  // setSelectedValue(event.target.value);
};

function clearFilter() {
  // setSelectedValue("");
  navigate(`/browse/`)
};

  //Drawer Design/List
  const list = (anchor) => (
      <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
              overflow: "scroll",
              padding:"1rem",
              // backgroundColor: '#1976d2',
              backgroundColor: '#000000',
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
        <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
              color='white'
              value={cat}
              onChange={handleChangeCategory}
            >
            {categories?.map((item,index) => (
              <FormControlLabel key={index} sx={{color:"white"}} value={item.title} control={<Radio sx={{color:"white"}} />} label={item.title} />
            ))}    
            </RadioGroup>
          </FormControl>
          <Button onClick={()=>{clearFilter()}}>Clear Filters</Button>
      </Box>
  );


  
  const [sortby, setSortby] = useState('');

  const handleChange = (event) => {
    setSortby(event.target.value);
  };


  return (
    <Fragment>
      <NavBar />
      <Box sx={{display:"grid",gridTemplateColumns:{xs:"100%" ,md:"20% 80%"}, margin:"auto",marginTop:"2%",maxWidth:{xs:"100%",md:"100%",lg:"1280px"}}}>
        <Box className='sideMenu' sx={{display:{xs:"none" ,md:"block"}, margin:"auto",bgcolor:"#000000",width:"-webkit-fill-available",height:"-webkit-fill-available",padding:"1rem"}}>
          <Typography variant='h6' color={"white"}>Filter By</Typography>
          <Divider sx={{borderWidth:"1px",borderColor:"white"}}/>
          <Typography sx={{marginTop:"1rem"}} color={"white"}>Category</Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
              color='white'
              // value={selectedValue ? selectedValue: ""}
              value={cat ? cat: ""}
              onChange={handleChangeCategory}
            >
              {/* <FormControlLabel sx={{color:"white"}} value="" control={<Radio sx={{color:"white"}} />} label="none" /> */}
            {categories?.map((item,index) => (
              <FormControlLabel key={index} sx={{color:"white"}} value={item.title} control={<Radio sx={{color:"white"}} />} label={item.title} />
            ))}    
            </RadioGroup>
          </FormControl>
          <Button onClick={()=>{clearFilter()}}>Clear Filters</Button>
        </Box>
        <Box className='browse'>
          <Box className='searchFilter' sx={{display:"grid",padding:"1rem"}}>
          {/* <Box className='searchFilter' sx={{display:"grid",gridTemplateColumns:"1fr 1fr",padding:"1rem"}}> */}
            {/* <SearchAppBar /> */}
            <Box sx={{display:"flex", flexDirection: "row", justifyContent: "flex-end"}}>
              <Button  sx={{display: {xs:"block", md:"none"}}} onClick={toggleDrawer('left', true)}>Filter</Button>
              {/* <SortBy /> */}
              <FormControl sx={{ m: 1, minWidth: 100,maxWidth:160 }} size="small">
                <InputLabel id="demo-select-small">Sort</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={sortby}
                  label="Sort"
                  onChange={handleChange}
                >
                  <MenuItem value={"Low-High"}>Price Low-High</MenuItem>
                  <MenuItem value={"High-Low"}>Price High-Low</MenuItem>
                  <MenuItem value={"Recently-Added"}>Recently Added</MenuItem>
                </Select>
              </FormControl>
              {/* <Button >Sort By</Button> */}
            </Box>
          </Box>
          <Box className='productGrid' sx={{display:"grid",gridTemplateColumns:{xs: "1fr", md:"1fr 1fr 1fr"},width:{xs:"-webkit-fill-available",md:"100%"},margin:"auto",rowGap:"1rem",columnGap:{xs:"0px",md:"1%"},padding:"10px"}}>
          <GridProducts category={cat ? cat : ""} sortby={sortby}/>
          {/* <GridProducts category={selectedValue ? selectedValue : ""} sortby={sortby}/> */}
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