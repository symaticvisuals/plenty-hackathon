import React from 'react'
import AboutPlenty from '../Components/AboutPlenty'
import Faqs from '../Components/Faqs'
import Footer from '../Components/Footer'
import FrontPage from '../Components/FrontPage'
import Navbar from '../Components/Navbar'
import ToolsShowcase from '../Components/ToolsShowcase'

function Home() {
  return (
    <div className=''>
      {/* <Navbar/> */}
      <FrontPage/>
      <ToolsShowcase/>
      <AboutPlenty/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default Home
