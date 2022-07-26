import React, { useState, useEffect } from 'react'
import Product from '../../components/home/Product'
import axios from 'axios'
import { Typography } from '@mui/material';
// import { useParams } from 'react-router-dom'

export default function GridProducts({category, sortby}) {

    const [gridProducts, setGridProducts] =useState([]);
  
    useEffect(()=>{
      if(category){
        // console.log(category);
        axios.get(`/api/v1/products?category=${category}`)
        .then((response)=>{
        // console.log(response.data);
          setGridProducts(response.data)
        }).catch((error)=>{
          console.log(error);
      })
  
      }else{
        // console.log("no category chosen");
        axios.get(`/api/v1/products`)
        .then((response)=>{
          // console.log(response.data);
          setGridProducts(response.data)
        }).catch((error)=>{
          console.log(error);
      })
      }
    },[category])


    useEffect(() => {
        if (sortby === "Recently-Added") {
            // console.log("Recently Added");
            setGridProducts((prev) =>
            [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt) )
          );
        } else if (sortby === "Low-High") {
            // console.log("Low High");
            setGridProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
        } else if (sortby === "High-Low") {
            // console.log("High Low");
            setGridProducts((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
        }
      }, [sortby]);


  return (
    <>
    {gridProducts.length>0 ? 
    gridProducts?.map((item) => (
        <Product item={item} key={item.itemid} />
    ))
     : <Typography sx={{margin:"auto",textAling:"center"}}>No Products in this category</Typography>}
    {/* {gridProducts?.map((item) => (
        <Product item={item} key={item.itemid} />
    ))} */}
    </>
  )
}
