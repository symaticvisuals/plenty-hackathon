import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

function MainLayout() {

  return (
    <div className="h-auto bg-skin-main-muted">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout