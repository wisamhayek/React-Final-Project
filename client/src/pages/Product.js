import { Box, Divider } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import NavBar from '../components/navBar/navBar'
import ImageSlider from '../components/product/imageSlider'
import Variants from '../components/product/variants.jsx'
import Description from '../components/product/description.jsx'
import RealtedProducts from '../components/product/realtedProducts.jsx'
import Footer from '../components/home/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Product() {

  const {id} = useParams()

  const [singleProduct, setProduct] =useState([])

  useEffect(()=>{
    if(id){
      axios.get(`/api/v1/products/${id}`)
      .then((response)=>{
        // console.log(response.data.data);
        setProduct(response.data.data)
      }).catch((error)=>{
        console.log(error);
    })
    }
  },[id])

  useEffect(()=>{
    document.title =`${singleProduct?.name}`;
  },[singleProduct])

  return (
    <Fragment >
      <NavBar />
      <Box sx={{display:"grid",gridTemplateColumns: {xs: "1fr", md:"1fr 1fr"},margin:"auto",marginTop:"2rem",maxWidth:{xs:"100%",md:"100%",lg:"fit-content"}}}>
        <ImageSlider item={singleProduct}/>
        <Variants item={singleProduct}/>
      </Box>
      <Divider />
      <Description item={singleProduct}/>
      <RealtedProducts item={singleProduct}/>
      <Footer />
    </Fragment>
  )
}
