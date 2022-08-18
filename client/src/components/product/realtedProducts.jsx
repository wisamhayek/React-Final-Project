import { Typography } from '@mui/material'
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
// import ProductImage1 from '../../assets/iphone 13.jpeg'
// import ProductImage2 from '../../assets/Bose 700.jpeg'
// import ProductImage3 from '../../assets/Samsung S22.jpeg'
// import ProductImage4 from '../../assets/Nikon D60.jpeg'

import styled from "styled-components";

// import { newProducts } from '../../constants/metaData';
import Product from "../home/Product.jsx";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

// Doesn;t have enough time to load and show result on page

export default function RelatedProduct({item}) {

    const [related,setRelated] = useState([])

    function fetchRelated(){
        //Fetch category and return/ use the first 4 products -> should return array of objects
        axios.get(`/api/v1/products/?category=${item.category}`)
        .then((response)=>{
            let first4 = response.data.splice(0,4);
            // console.log(first4);
            setRelated(first4);
        }).catch((error)=>{
            console.log(error);
        })
    }
    
    useEffect(()=>{
        fetchRelated();
    },[item])

    return (
        <>
        <Typography textAlign={"center"} sx={{
            margin:"auto",
            backgroundColor:"#000000",
            color:"white",
            width:"fit-content",
            borderRadius:"1rem",
            padding:"8px",
            marginBottom:"1rem",
            marginTop:"2rem",
            fontSize: "larger"
        }}>Related Products</Typography>
        <Container>
          {related?.map((item) => (
            <Product item={item} key={item._id} />
          ))}
        </Container>
        </>
      )
  }



//   return (
//     <Box sx={{padding:"8px",maxWidth:{xs:"100%",md:"100%",lg:"fit-content"}}}>
//         <Typography textAlign={"center"} sx={{
//             margin:"auto",
//             backgroundColor:"#1976d2",
//             color:"white",
//             width:"fit-content",
//             borderRadius:"1rem",
//             padding:"4px",
//             marginBottom:"1rem"
//             }}>Related Products</Typography>
//         <Box sx={{display:"grid",gridTemplateColumns:{xs: "1fr 1fr", md:"1fr 1fr 1fr 1fr"},width:{xs:"100%",md:"80%"},margin:"auto",marginTop:"2rem",rowGap:"1rem",columnGap:{xs:"0px",md:"1%"},maxWidth:{xs:"100%",md:"100%",lg:"60%"}}}>
//             <Box sx={{width:"100%",height:"300px",borderRadius:"20px"}}>
//                 <img src={ProductImage1} alt="product" style={{width:"100%",aspectRatio:"1/1"}}/>
//                 <Typography padding={"4px"} variant='h6'>Product Name</Typography>
//                 <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
//                     <Typography padding={"4px"} variant="body1">$$$$</Typography>
//                     <Button size="small" variant="contained">Add to Cart</Button>
//                 </div>
//             </Box>
//             <Box sx={{width:"100%",height:"300px",borderRadius:"20px"}}>
//                 <img src={ProductImage2} alt="product" style={{width:"100%",aspectRatio:"1/1"}}/>
//                 <Typography padding={"4px"} variant='h6'>Product Name</Typography>
//                 <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
//                     <Typography padding={"4px"} variant="body1">$$$$</Typography>
//                     <Button size="small" variant="contained">Add to Cart</Button>
//                 </div>
//             </Box>
//             <Box sx={{width:"100%",height:"300px",borderRadius:"20px",display:{xs:"none",md:"block"}}}>
//                 <img src={ProductImage3} alt="product" style={{width:"100%",aspectRatio:"1/1"}}/>
//                 <Typography padding={"4px"} variant='h6'>Product Name</Typography>
//                 <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
//                     <Typography padding={"4px"} variant="body1">$$$$</Typography>
//                     <Button size="small" variant="contained">Add to Cart</Button>
//                 </div>
//             </Box>
//             <Box sx={{width:"100%",height:"300px",borderRadius:"20px",display:{xs:"none",md:"block"}}}>
//                 <img src={ProductImage4} alt="product" style={{width:"100%",aspectRatio:"1/1"}}/>
//                 <Typography padding={"4px"} variant='h6'>Product Name</Typography>
//                 <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
//                     <Typography padding={"4px"} variant="body1">$$$$</Typography>
//                     <Button size="small" variant="contained">Add to Cart</Button>
//                 </div>
//             </Box>
//         </Box>
//     </Box>
//   )
