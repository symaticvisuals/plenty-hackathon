import React, { useState } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom'

function Trade() {
     const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex items-center">
          <h2 className="font-sans font-medium text-l text-skin-inverted-dark">
            Redirect to StableSwap
          </h2>
          <MdOutlineArrowForwardIos className="ml-2 text-skin-inverted-dark" />
        </div>
        <div className="mt-3 min-h-[40vh] bg-skin-main w-[24em] max-w-[24em] rounded-2xl border dark:border-0 shadow-md pt-8 px-4">
          <div className="flex gap-3">
            <Link to="/trade">
              <div
                className={`px-4 pb-5 font-sans font-bold text-skin-inverted-dark cursor-pointer ${
                  activeTab === 0
                    ? "border-b-2 border-primary text-skin-primary"
                    : ""
                }`}
                onClick={() => setActiveTab(0)}>
                <h3>Swap</h3>
              </div>
            </Link>
            <Link to="/trade/liquidity">
              <div
                className={`px-4 pb-5 font-sans font-bold text-skin-inverted-dark cursor-pointer ${
                  activeTab === 1
                    ? "border-b-2 border-primary text-skin-primary"
                    : ""
                }`}
                onClick={() => {
                  setActiveTab(1);
                }}>
                <h3>Liquidity</h3>
              </div>
            </Link>
          </div>
          <hr></hr>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Trade
