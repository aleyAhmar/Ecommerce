import React from 'react'
import Header from './Header'
import Corousel from './Corousel'
import ContactStrip from './ContactStrip'
import HomePageWelcome from './HomePageWelcome'
import Footer from './Footer'
import OurDomain from './OurDomain'



const HomePage = () => {
  return (
    <>
    <ContactStrip/>
    <Header/>
    <Corousel/>
    <HomePageWelcome/>
    <OurDomain/>
    <Footer/>
    </>
  )
}

export default HomePage