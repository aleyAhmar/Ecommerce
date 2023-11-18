import React from 'react'
import Header from './Header'
import Corousel from './Corousel'
import ContactStrip from './ContactStrip'
import HomePageWelcome from './HomePageWelcome'



const HomePage = () => {
  return (
    <>
    <ContactStrip/>
    <Header/>
    <Corousel/>
    <HomePageWelcome/>
    {/* <h1>Home Page</h1> */}
    </>
  )
}

export default HomePage