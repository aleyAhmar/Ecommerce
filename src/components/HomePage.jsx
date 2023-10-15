import React from 'react'
import Header from './Header'
import Corousel from './Corousel'
import ContactStrip from './ContactStrip'


const HomePage = () => {
  return (
    <>
    <ContactStrip/>
    <Header/>
    <Corousel/>
    <h1>Home Page</h1>
    </>
  )
}

export default HomePage