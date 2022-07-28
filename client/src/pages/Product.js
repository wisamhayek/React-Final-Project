import { Box, Divider } from '@mui/material'
import React, { Fragment } from 'react'
import NavBar from '../components/navBar/navBar'
import ImageSlider from '../components/product/imageSlider'
import Variants from '../components/product/variants.jsx'
import Description from '../components/product/description.jsx'
import RealtedProducts from '../components/product/realtedProducts.jsx'

export default function Product() {
  return (
    <Fragment>
      <NavBar />
      <Box sx={{display:"grid",gridTemplateColumns: {xs: "1fr", md:"1fr 1fr"},marginTop:"2rem"}}>
        <ImageSlider />
        <Variants />
      </Box>
      <Divider />
      <Description />
      <RealtedProducts />
    </Fragment>
  )
}
