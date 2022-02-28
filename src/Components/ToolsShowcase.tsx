import React from "react";

import { MdOutlineSwapVert } from "react-icons/md";
import { IoIosWater } from "react-icons/io";
import { FaTruckMonster } from "react-icons/fa";
import { GiStakesFence } from "react-icons/gi";
import { Link } from "react-router-dom";
function ToolsShowcase() {
  const [toolsData] = React.useState([
    {
      name: "Swap",
      Icon: <MdOutlineSwapVert />,
      describe:
        "Swap tokens instantly with high liquidity and audited smart contracts.",
      buttonValue: "Enter Exchange",
    },
    {
      name: "Pool",
      Icon: <IoIosWater />,
      describe:
        "Add liquidity for any trading pair and start earning trading fees.",
      buttonValue: "Add Liquidity",
    },
    {
      name: "Farm",
      Icon: <FaTruckMonster />,
      describe:
        "Earn PLENTY and other tokens by staking Plenty Liquidity Provider tokens in a farm.",
      buttonValue: "Enter Farms",
    },
    {
      name: "Stake",
      Icon: <GiStakesFence />,
      describe: "Stake PLENTY, receive xPLENTY. Rewards are compounding.",
      buttonValue: "Enter Stacking",
    },
  ]);

  return (
    <div className="mt-10">
      <h2 className="text-skin-inverted-dark text-3xl font-sans font-semibold">
        Plenty Defi on Tezos
      </h2>
      <div className="grid grid-cols-4 gap-4 px-8 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
        {toolsData.map((toolsData, index) => (
          <div
            className="mt-12 cursor-pointer p-3 px-6 py-5 w-full  min-h-[20vh] bg-skin-main rounded-xl flex flex-col items-center border justify-center dark:border-none dark:shadow-slate-800  hover:shadow-lg"
            key={index}>
            <div className="flex items-center mt-4">
              <div className="p-2 rounded-md  text-skin-primary bg-skin-primary-muted">
                {toolsData.Icon}
              </div>
              <h6 className="font-sans ml-2 text-skin-inverted-dark font-semibold">
                {toolsData.name}
              </h6>
            </div>
            <hr className="mt-8 w-full dark:border-slate-700" />
            <p className="font-sans text-skin-inverted-dark my-8 mb-10">
              {toolsData.describe}
            </p>
            <Link to="/trade" className="w-full">
              <button className="w-full bg-skin-primary py-3 font-sans mt-2 text-skin-inverted font-medium rounded-md">
                {toolsData.buttonValue}
              </button>
            </Link>
          </div>
        ))}
        {/* Tool 2 */}
      </div>
    </div>
  );
}

export default ToolsShowcase;
