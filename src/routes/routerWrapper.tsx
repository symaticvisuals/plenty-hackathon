import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FirstTimeDisclaimer from '../Pages/FirstTimeDisclaimer'
import Home from '../Pages/Home'

function Wrapper() {
  return (
   <Router>
        <Routes>
          <Route path='/' element={<FirstTimeDisclaimer/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
    </Router>
  )
}

export default Wrapper