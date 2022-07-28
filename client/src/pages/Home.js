import React, { Fragment } from 'react'
import NavBar from '../components/navBar/navBar'
import ImgSlider from '../components/home/imgSlider';
import ByCategory from '../components/home/byCategory';
import NewArrived from '../components/home/newArrived';

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <ImgSlider />
      <ByCategory />
      <NewArrived />
    </Fragment>
  )
}
