import  { useContext, useState } from "react";
import PlentyLogo from "../assets/images/plenty-beta-logo.svg";
import LogoWhite from "../assets/images/logo-white.svg";

import {MdOutlineMenu} from "react-icons/md";
import {IoMdAdd} from "react-icons/io";
import { MdSettings } from "react-icons/md";
import { changeMode } from "../App";
import { Link, Navigate } from "react-router-dom";

function Navbar() {
  const {mode,setMode} = useContext(changeMode);
    const [navigationtabs] = useState([
      {
        name: "Trade",
        link: "trade",
      },
      {
        name: "Earn",
        link: "trade",
      },
      {
        name: "Vote",
        link: "trade",
      },
      {
        name: "More",
        link: "trade",
      },
    ]);
  return (
    <div className="flex items-center justify-between py-4 px-8 w-full border-b dark:border-0 bg-skin-main dark:bg-skin-background-main fixed z-50">
      <div className="flex items-center justify-start w-full">
        
          <img
            src={mode === "dark" ? LogoWhite : PlentyLogo}
            alt="Plenty Logo"
            className="w-20 mr-8" onClick={
              () => {
                <Navigate to="/home" />
              }
            }></img>
        
        <div className="w-[1px] h-6 bg-skin-body-hr mr-8 md:hidden"></div>
        <div className="flex items-center mr-8 md:hidden">
          {navigationtabs.map((navigationtab, index) => (
            <>
              <NavigationTabs
                key={index}
                name={navigationtab.name}
                link={navigationtab.link}
              />
            </>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end w-full">
        <button className="flex items-center mr-8 py-3 px-4 rounded-lg bg-skin-button-primary text-skin-text-inverted  font-sans font-semibold md:hidden text-sm">
          <IoMdAdd className="mr-1" />
          Connect Wallet
        </button>
        <div className="w-[1px] h-6 bg-skin-body-hr mr-8 md:hidden"></div>
        <MdSettings
          className=" text-2xl text-skin-icon-fill md:hidden cursor-pointer tranform active:rotate-180 transition-all duration-100 "
          onClick={() => {
            setMode(mode === "dark" ? "" : "dark");
          }}
        />
        <MdOutlineMenu className=" text-2xl text-skin-icon-fill md:block lg:hidden xl:hidden 2xl:hidden 3xl:hidden" />
      </div>
    </div>
  );
}



function NavigationTabs({name, link}) {
    return (
      <Link to={link} className="">
      <div className="flex items-center mr-8 cursor-pointer ">
        <h5 className="font-sans text-skin-body-text">{name}</h5>

       
      </div>
      </Link>
    );
}
export default Navbar;
