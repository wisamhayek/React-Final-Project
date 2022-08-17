import React, { Fragment } from 'react'
import NavBar from '../components/navBar/navBar'
// import ImgSlider from '../components/home/imgSlider';
import ByCategory from '../components/home/byCategory';
import NewArrived from '../components/home/newArrived';
import Slider from '../components/home/slider';
import Newsletter from "../components/home/Newsletter.jsx";
import Footer from "../components/home/Footer.jsx";


export default function Home() {
  return (
    <Fragment>
      <NavBar />
      {/* <ImgSlider /> */}
      <Slider />
      <ByCategory />
      <NewArrived />
      <Newsletter />
      <Footer />
    </Fragment>
  )
}
