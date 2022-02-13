import  { useState } from "react";
import PlentyLogo from "../assets/images/plenty-beta-logo.svg";
import {
  // MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import {MdOutlineMenu} from "react-icons/md";
import {IoMdAdd} from "react-icons/io";
import { MdSettings } from "react-icons/md";

function Navbar() {
    const [navigationtabs, ]= useState([
        {
            name:"Trade"
        },
        {
            name:"Earn"
        },
        {
            name:"Vote"
        },
        {
            name:"More"
        }
    ])
  return (
    <div className="flex items-center justify-between py-4 px-8 w-full border-b">
      <div className="flex items-center justify-start w-full">
        <img src={PlentyLogo} alt="Plenty Logo" className="w-20 mr-8"></img>
        <div className="w-[1px] h-6 bg-skin-body-hr mr-8 md:hidden"></div>
        <div className="flex items-center mr-8 md:hidden">
          {navigationtabs.map((navigationtab, index) => (
            <>
              <NavigationTabs key={index} name={navigationtab.name} />
            </>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end w-full">
        <button className="flex items-center mr-8 py-3 px-4 rounded-lg bg-skin-button-primary text-skin-text-inverted  font-sans font-semibold md:hidden">
          <IoMdAdd className="mr-1 text-lg" />
          Connect Wallet
        </button>
        <div className="w-[1px] h-6 bg-skin-body-hr mr-8 md:hidden"></div>
        <MdSettings className=" text-2xl text-skin-icon-fill md:hidden" />
        <MdOutlineMenu className=" text-2xl text-skin-icon-fill md:block lg:hidden xl:hidden 2xl:hidden 3xl:hidden" />
      </div>
    </div>
  );
}



function NavigationTabs({name}) {
    return (
      <div className="flex items-center mr-8 ">
        <h5 className="font-sans text-skin-body-text">{name}</h5>
        <MdOutlineKeyboardArrowDown />
      </div>
    );
}
export default Navbar;
