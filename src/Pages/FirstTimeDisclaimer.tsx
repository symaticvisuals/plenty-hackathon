import React from 'react'
import PlentyLogo from "../assets/images/plenty-beta-logo.svg";
function FirstTimeDisclaimer() {
  return (
    <div className="flex items-center justify-center h-screen bg-skin-body-fill">
      <div className="w-[27em] h-auto flex flex-col items-center justify-center  py-8 box-border px-7 bg-white rounded-2xl">
        <img src={PlentyLogo} alt={"Plenty"} className="w-32" />
        <hr className="w-full mt-4 bg-skin-body-hr"></hr>
        <form>
          <div className="flex items-center text-left mt-4">
            <input
              type="checkbox"
              className="form-checkbox rounded-sm border-2 border-border-checkbox  text-skin-border-checkbox text-fill-red p-2 focus:ring-offset-0 focus:ring-offset-white focus:outline-none"
            />
            <label className="p-4 rounded-md bg-skin-bg-light ml-2 font-sans text-skin-body-text">
              I understand that I am using this product in beta at my own risk.
              Any losses incurred due to my actions are my own responsibility.
            </label>
          </div>
          <div className="flex items-center text-left mt-4">
            <input
              type="checkbox"
              className="form-checkbox rounded-sm border-2 border-border-checkbox  text-skin-border-checkbox text-fill-red p-2 focus:ring-offset-0 focus:ring-offset-white focus:outline-none "
            />
            <label className="p-4 rounded-md bg-skin-bg-light ml-2 font-sans text-skin-body-text">
              I understand that this product is still in beta. I am
              participating at my own risk.
            </label>
          </div>
        </form>
        <button className="py-3 w-full bg-[#e6e7ea] font-sans font-semibold text-skin-body-text mt-4 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default FirstTimeDisclaimer