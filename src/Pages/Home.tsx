import React from 'react'
import FrontPage from '../Components/FrontPage'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div className='min-h-screen bg-skin-bg-primary'>
      <Navbar/>
      <FrontPage/>
    </div>
  )
}

export default Home
