import React from 'react'
import Slides from './Slider'
import Products from './Products'
import Pride from './Pride'
import PopularBrand from './Popular_brand'
import Banner from './Banner'
import OwlSlider from './OwlSlider'

const Duplicat = ({setCartAnime}) => {
  return (
    <>
    <Slides />
    <Products  setCartAnime={setCartAnime}/>
    <Pride />
    <PopularBrand />
    <Banner />
    <OwlSlider />
    
    </>
  )
}

export default Duplicat