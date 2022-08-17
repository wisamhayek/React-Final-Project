import { Box, Button, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { categories } from '../../constants/metaData';

export default function ByCategory() {

    const [categories,setCategories] = useState([])

    function fetchCategories(){
        //Fetch category and return/ use the first 4
        axios.get(`http://localhost:2000/api/v1/category`)
        .then((response)=>{
            let first4 = response.data.data.splice(0,4);
            // console.log(first4);
            setCategories(first4);
        }).catch((error)=>{
            console.log(error);
        })
    }
    
    useEffect(()=>{
        fetchCategories();
    },[]) 

  return (
    <Box sx={{padding:"8px"}}>
        
        <Typography textAlign={"center"} sx={{
            margin:"auto",
            // backgroundColor:"#1976d2",
            backgroundColor:"#000000",
            color:"white",
            width:"fit-content",
            borderRadius:"1rem",
            padding:"8px",
            marginBottom:"1rem",
            marginTop:"1rem",
            fontSize: "larger"
            }}>Browse By Category</Typography>
        <Box className='categories' sx={{display:"grid",gridTemplateColumns:{xs: "1fr 1fr", md:"1fr 1fr 1fr 1fr"},width:{xs:"100%",md:"80%"},margin:"auto",rowGap:"1rem",columnGap:{xs:"0px",md:"1%"}}}>
            {categories.map((item,index) => (
                <Link key={index} style={{ textDecoration: 'none' }} to={`browse/${item.title}`}>
                <Button  variant="outlined" sx={{
                    fontSize: "large",
                    color:"white",
                    height: {xs:"150px",md:"200px"},
                    width: {xs:"150px",md:"200px"},
                    borderRadius:"50%",
                    border:"0px",
                    margin:"auto",
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat:"no-repeat",
                }}>{item.title}</Button>
                </Link>
            ))}
        </Box>
    </Box>
  )
}