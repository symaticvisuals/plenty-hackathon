import React  from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import FirstTimeDisclaimer from '../Pages/FirstTimeDisclaimer'
import Home from '../Pages/Home'
import Cookies from 'js-cookie'
import MainLayout from '../Pages/MainLayout'
import Swap from '../Pages/Swap'
import Trade from '../Pages/Trade'
import Liquidity from '../Pages/Liquidity'
function Wrapper() {
  const [firstTimeDisclaimer] = React.useState(Cookies.get('firstTimeDisclaimer'));
  

  return (
    <Router>
      <Routes>
        {firstTimeDisclaimer === "true" && (
          <>
            <Route path="*" element={<MainLayout />}>
              <Route path="*" element={<Navigate to="/home" />} />
              <Route path="home" element={<Home />} />
              <Route path='trade' element={<Trade/>}>
                <Route path='*' element={<Swap />} />
                <Route path='liquidity' element={<Liquidity />} />
                </Route>
            </Route>
          </>
        )}
        {!firstTimeDisclaimer ? (
        <Route path="/" element={<FirstTimeDisclaimer />}></Route>
        ):<></>}
      </Routes>
    </Router>
  );
}

export default Wrapper