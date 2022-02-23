import React, { useContext, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

import { MdKeyboardArrowDown } from "react-icons/md";
import { HiArrowCircleDown } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { tokenValues } from "../data/tokens";



interface SwapProps {
  selectedTokens: {
    from:Object,
    to:Object
  },
  setSelectedTokens: Function,
}
const tokenContext = React.createContext<SwapProps>({
  selectedTokens : {
    from: {
      name: "",
      icon: "",
    },
    to: {
      name: "",
      icon: "",
    },
  },
  setSelectedTokens: (
    from: {
      name: string;
      icon: string;
    },
    to: {
      name: string;
      icon: string;
    }
  ) => {}
 

});
const modalContext = React.createContext<{
  open: boolean;
  setOpen: Function;
}>({
  open: false,
  setOpen: () => {}
});
function Swap() {
  const [activeTab, setActiveTab] = useState(0);
  const [tokens, setTokens] = useState(tokenValues);
  const [selectedTokens, setSelectedTokens] = useState({
    from: tokens[0],
    to: tokens[1],
  });
  const [selectedToken1] = useState(tokens[0]);
  const [selectedToken2] = useState(tokens[1]);
  const [open, setOpen] = useState(false);
  
  return (
    <div className="flex items-center justify-center h-screen  max-h-screen overflow-hidden">
      <modalContext.Provider value={{ open, setOpen }}>
      <tokenContext.Provider value={{ selectedTokens,  setSelectedTokens }}>
        <SelectTokenModal />
      </tokenContext.Provider>
      </modalContext.Provider>
      <div className="flex flex-col">
        <div className="flex items-center">
          <h2 className="font-sans font-medium text-l text-skin-inverted-dark">
            Redirect to StableSwap
          </h2>
          <MdArrowForwardIos className="ml-2 text-skin-inverted-dark" />
        </div>
        <div className="mt-3 min-h-[40vh] bg-skin-main w-[24em] max-w-[24em] rounded-2xl border dark:border-0 shadow-md pt-8 px-4">
          <div className="flex gap-3">
            <div
              className={`px-4 pb-5 font-sans font-bold text-skin-inverted-dark cursor-pointer ${
                activeTab === 0
                  ? "border-b-2 border-primary text-skin-primary"
                  : ""
              }`}
              onClick={() => setActiveTab(0)}>
              <h3>Swap</h3>
            </div>
            <div
              className={`px-4 pb-5 font-sans font-bold text-skin-inverted-dark cursor-pointer ${
                activeTab === 1
                  ? "border-b-2 border-primary text-skin-primary"
                  : ""
              }`}
              onClick={() => setActiveTab(1)}>
              <h3>Liquidity</h3>
            </div>
          </div>

          <hr></hr>
          <div className="p-4 bg-skin-main-muted mt-4 border dark:border-0 flex rounded-lg justify-between items-center hover:ring-1 hover:ring-inverted-dark mb-1">
            <div className="p-2 bg-skin-main h-10 flex gap-2 items-center justify-center shadow-sm w-48 rounded-md" onClick={()=>{
              setOpen(true);
            }}> 
              <img src={selectedToken1.icon} className="object-contain w-6" />
              <p className="font-sans font-semibold text-skin-inverted-dark">
                {selectedToken1.name}
              </p>
              <MdKeyboardArrowDown className="text-skin-inverted-dark" />
            </div>
            <div className="flex-grow w-full">
              <input
                type="text"
                placeholder="0.0"
                className="text-right focus:border-0 h-full bg-transparent focus:outline-none overflow-hidden font-sans font-semibold text-skin-inverted-dark"
              />
            </div>
          </div>

          <div className="flex justify-center items-center text-3xl text-skin-inverted-dark mt-1">
            <div className="bg-skin-inverted z-20 absolute rounded-full">
              <HiArrowCircleDown className=" transform hover:rotate-180 duration-100 transition-all text-skin-inverted-dark" />
            </div>
          </div>
          <div className="p-4 bg-skin-main-muted  border dark:border-0 flex rounded-lg justify-between items-center hover:ring-1 hover:ring-inverted-dark">
            <div className="p-2 bg-skin-main h-10 flex gap-2 items-center justify-center shadow-sm w-auto rounded-md">
              <img src={selectedToken2.icon} className="object-contain w-6" />
              <p className="font-sans font-semibold text-skin-inverted-dark">
                {selectedToken2.name}
              </p>
              <MdKeyboardArrowDown className="text-skin-inverted-dark" />
            </div>
            <div className="flex-grow w-full">
              <input
                type="text"
                placeholder="0.0"
                className="text-right focus:border-0 h-full bg-transparent focus:outline-none overflow-hidden font-sans font-semibold text-skin-inverted-dark"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;

const SelectTokenModal = () => {
  const { open, setOpen } = useContext(modalContext);
  const {selectedTokens, setSelectedTokens} = React.useContext(tokenContext);
 
  return (
    <div
      className={`absolute  h-screen w-full bg-slate-800/60 z-50 flex items-center justify-center backdrop-blur-sm ${
        open === false ? "hidden" : ""
      }`}>
      <div className="w-[400px] h-[500px] bg-skin-main relative rounded-2xl py-8 px-8">
        <div className="flex items-center justify-between">
          <h4 className="font-sans font-semibold text-skin-inverted-dark">
            Select a token
          </h4>
          <MdOutlineClose
            className="text-xl text-skin-inverted-dark cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
        <div className="flex items-center px-3 py-2 rounded-md mt-2 border">
          <BsSearch className="text-skin-inverted-muted" />
          <input
            type="text"
            placeholder="Search"
            className="pl-5 focus:outline-none font-sans font-medium text-skin-inverted-dark"
          />
        </div>
        <hr className="mt-4 text-skin-inverted-dark"></hr>
        <div className="h-[340px] overflow-y-auto mt-3 flex flex-col">
          {tokenValues.map((token, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-4 px-3 py-2 rounded-md font-sans text-skin-inverted-dark hover:bg-slate-400/30">
                <img src={token.icon} className="object-contain w-6" />
                <h6>{token.name}</h6>
                </div>
          ))}
        </div>
      </div>
    </div>
  );
};
