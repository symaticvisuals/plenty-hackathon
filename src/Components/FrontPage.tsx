import React from "react";
import { CgDollar, CgArrowsExchangeV } from "react-icons/cg";
import { GiCapitol } from "react-icons/gi";
import { HiTruck } from "react-icons/hi";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
function FrontPage() {
  const [pageBar, ] = React.useState([
    {
      name: "Price",
      Icon: <CgDollar />,
      value: "0.151",
    },
    {
      name: "Market Cap",
      Icon: <GiCapitol />,
      value: "4,338,241",
    },
    {
      name: "Total minted",
      Icon: <CgArrowsExchangeV />,
      value: "33,322,588",
    },
    {
      name: "Total burned",
      Icon: <HiTruck />,
      value: "795,165",
    },
    {
      name: "Circulating Supply",
      Icon: <MdOutlineLocalFireDepartment />,
      value: "28,757,124",
    },
    {
      name: "New PLENTY/Block",
      Icon: <IoIosTimer />,
      value: "30",
    },
  ]);
  return (
    <div className="bg-skin-main-muted h-auto">
      <div className="min-h-[65vh]  bg-skin-primary dark:bg-skin-main-muted flex flex-col justify-center items-center bg-frontpage bg-cover md:bg-contain bg-bottom sm:min-h-[50vh] bg-no-repeat py-8">
        <h4 className="font-sans text-xl text-skin-body-logo-frontpage">
          Total Value Locked
        </h4>
        <h1 className="font-sans text-5xl font-bold text-skin-body-logo-frontpage mt-2 sm:text-4xl">
          $6,059,989
        </h1>
        <h4 className="w-2/3 font-mulish text-xl text-skin-body-logo-frontpage font-light mt-2 sm:text-lg">
          Trade tokens and earn interest by staking. There is plenty of DeFi to
          explore on Tezos.
        </h4>
        <button className="bg-white py-3 px-4 mt-3 rounded-md font-sans font-semibold text-skin-fill-frontpage hover:animate-pulse">
          Enter App
        </button>
      </div>
      <div className="flex items-center justify-around bg-skin-main py-2">
        <div className="px-8 grid grid-cols-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full">
          {pageBar.map((pageBar, index) => (
            <FrontPageBar pageBar={pageBar} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
interface pageBarProps {
  pageBar: {
    name: string;
    Icon: React.ReactElement;
    value: string;
  };
}
const FrontPageBar = ({ pageBar }: pageBarProps) => {
  return (
    <div className="flex items-start my-4">
      <div className="mr-2">
        <div className="p-2 rounded-md text-skin-primary bg-skin-primary-muted">
          {pageBar.Icon}
        </div>
      </div>
      <div className="flex flex-col">
        <h5 className="font-sans text-skin-inverted-dark text-left font-semibold ">
          {pageBar.value}
        </h5>
        <div>
          <h1 className="font-mulish text-xs font-medium text-skin-inverted-muted text-left">
            {pageBar.name}
          </h1>
        </div>
      </div>
    </div>
  );
};
