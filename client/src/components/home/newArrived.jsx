import { Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import axios from 'axios';

// import { newProducts } from '../../constants/metaData';
import Product from "./Product.jsx";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default function NewArrived() {

  const [related,setRelated] = useState([])

  function fetchNew(){
      //Fetch category and return/ use the first 4 products -> should return array of objects
      axios.get(`/api/v1/products/`)
      .then((response)=>{
          let first4 = response.data.splice(0,4);
          // console.log(first4);
          setRelated(first4);
      }).catch((error)=>{
          console.log(error);
      })
  }
  
  useEffect(()=>{
    fetchNew();
  },[]) 
  
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
        }}>Newly Arrived</Typography>
        <Container>
          {related.map((item) => (
            <Product item={item} key={item._id} />
          ))}
        </Container>
        </>
      )
}


// Working:
//     return (
//     <Box sx={{padding:"8px"}}>
//         <Typography textAlign={"center"} sx={{
//             margin:"auto",
//             backgroundColor:"#000000",
//             color:"white",
//             width:"fit-content",
//             borderRadius:"1rem",
//             padding:"8px",
//             marginBottom:"1rem",
//             marginTop:"1rem",
//             fontSize: "larger"
//             }}>Newly Arrived</Typography>
//         <Box sx={{display:"grid",gridTemplateColumns:{xs: "1fr 1fr", md:"1fr 1fr 1fr 1fr"},width:{xs:"100%",md:"80%"},margin:"auto",rowGap:"1rem",columnGap:{xs:"8px",md:"1%"}}}>
//         {newProducts.map((item,index) => (
//                 <Box key={index} sx={{width:"100%",borderRadius:"20px"}}>
//                 <img src={item.img} alt="product" style={{width:"100%",aspectRatio:"1/1",objectFit:"cover"}}/>
//                 <Typography width={{xs:"150px", md: "300px"}} noWrap={true} padding={"4px"} variant='h6' sx={{fontFamily:"-apple-system, BlinkMacSystemFont, sans-serif"}}>{item.title}</Typography>
//                 <div style={{display:"flex",flexDirection:"row",gap:"1rem",alignItems:"center",justifyContent:"space-around"}}>
//                     <Typography padding={"4px"} variant="body1" sx={{fontFamily:"-apple-system, BlinkMacSystemFont, sans-serif",fontSize:"large"}}>{item.price}$</Typography>
//                     <Button size="small" variant="contained">Add to Cart</Button>
//                 </div>
//             </Box>
//             ))}
//         </Box>
//     </Box>
//   )

// Old: 

// <Box sx={{width:"100%",height:"300px",borderRadius:"20px"}}>
//                 <img src={ProductImage1} alt="product" style={{width:"100%",aspectRatio:"1/1",objectFit:"cover"}}/>
//                 <Typography padding={"4px"} variant='h6'>Product Name</Typography>
//                 <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
//                     <Typography padding={"4px"} variant="body1">$$$$</Typography>
//                     <Button size="small" variant="contained">Add to Cart</Button>
//                 </div>
//             </Box>
//             <Box sx={{width:"100%",height:"300px",borderRadius:"20px"}}>
//                 <img src={ProductImage2} alt="product" style={{width:"100%",aspectRatio:"1/1",objectFit:"cover"}}/>
//                 <Typography padding={"4px"} variant='h6'>Product Name</Typography>
//                 <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
//                     <Typography padding={"4px"} variant="body1">$$$$</Typography>
//                     <Button size="small" variant="contained">Add to Cart</Button>
//                 </div>
//             </Box>
//             <Box sx={{width:"100%",height:"300px",borderRadius:"20px",display:{xs:"none",md:"block"}}}>
//                 <img src={ProductImage3} alt="product" style={{width:"100%",aspectRatio:"1/1",objectFit:"cover"}}/>
//                 <Typography padding={"4px"} variant='h6'>Product Name</Typography>
//                 <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
//                     <Typography padding={"4px"} variant="body1">$$$$</Typography>
//                     <Button size="small" variant="contained">Add to Cart</Button>
//                 </div>
//             </Box>
//             <Box sx={{width:"100%",height:"300px",borderRadius:"20px",display:{xs:"none",md:"block"}}}>
//                 <img src={ProductImage4} alt="product" style={{width:"100%",aspectRatio:"1/1",objectFit:"cover"}}/>
//                 <Typography padding={"4px"} variant='h6'>Product Name</Typography>
//                 <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
//                     <Typography padding={"4px"} variant="body1">$$$$</Typography>
//                     <Button size="small" variant="contained">Add to Cart</Button>
//                 </div>
//             </Box>