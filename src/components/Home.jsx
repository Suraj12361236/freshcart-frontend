import React from 'react'
import Navbar from '../pages/Navbar'
import HeroSlider from '../pages/HeroSlider'
import Categories from '../pages/Categories'
import BannerSection from '../pages/Variety'
import PopularProducts from '../pages/Popularproduct'
import DailyBestSells from '../pages/DailyBestSells'
import Footer from '../pages/Footer'
import FeatureSection from '../pages/Featuressection'


function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider/>
      <Categories/>
      <BannerSection/>
      <PopularProducts/>
      <DailyBestSells/>
      <FeatureSection/>
      <Footer/>


    </>
  )
}

export default Home
