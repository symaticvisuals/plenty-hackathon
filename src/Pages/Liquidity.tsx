import React, { useContext, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

import { MdKeyboardArrowDown } from "react-icons/md";
import { HiArrowCircleDown } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { tokenValues } from "../data/tokens";
import { IoMdAddCircle } from "react-icons/io";

interface SwapProps {
  selectedTokens: {
    accepted: String;
    from: Object;
    to: Object;
  };
  setSelectedTokens: Function;
}
const tokenContext = React.createContext<SwapProps>({
  selectedTokens: {
    accepted: "from" || "to",
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
    accepted: boolean,
    from: {
      name: string;
      icon: string;
    },
    to: {
      name: string;
      icon: string;
    }
  ) => {},
});
const modalContext = React.createContext<{
  open: boolean;
  setOpen: Function;
}>({
  open: false,
  setOpen: () => {},
});
function Liquidity() {
  const [activeTab, setActiveTab] = useState(0);
  const [tokens] = useState(tokenValues);
  const [selectedTokens, setSelectedTokens] = useState({
    accepted: "from",
    from: tokens[0],
    to: tokens[1],
  });
 
  const [open, setOpen] = useState(false);

  return (
    <div>
      <modalContext.Provider value={{ open, setOpen }}>
        <tokenContext.Provider value={{ selectedTokens, setSelectedTokens }}>
          <SelectTokenModal />
        </tokenContext.Provider>
      </modalContext.Provider>

      <div className="p-4 bg-skin-main-muted mt-4 border dark:border-0 flex rounded-lg justify-between items-center hover:ring-1 hover:ring-inverted-dark mb-1">
        <div
          className="p-2 bg-skin-main h-10 flex gap-2 items-center justify-center shadow-sm w-48 rounded-md"
          onClick={() => {
            setSelectedTokens({
              accepted: "from",
              from: selectedTokens.from,
              to: selectedTokens.to,
            });
            setOpen(true);
          }}>
          <img
            src={selectedTokens.from.icon}
            alt="token"
            className="object-contain w-6"
          />
          <p className="font-sans font-semibold text-skin-inverted-dark">
            {selectedTokens.from.name}
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
          <IoMdAddCircle className="transition-all text-skin-inverted-dark" />
        </div>
      </div>
      <div className="p-4 bg-skin-main-muted  border dark:border-0 flex rounded-lg justify-between items-center hover:ring-1 hover:ring-inverted-dark">
        <div
          className="p-2 bg-skin-main h-10 flex gap-2 items-center justify-center shadow-sm w-48 rounded-md"
          onClick={() => {
            setSelectedTokens({
              accepted: "to",
              from: selectedTokens.from,
              to: selectedTokens.to,
            });
            setOpen(true);
          }}>
          <img
            src={selectedTokens.to.icon}
            alt="token2"
            className="object-contain w-6"
          />
          <p className="font-sans font-semibold text-skin-inverted-dark">
            {selectedTokens.to.name}
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
      <div className="text-left font-sans p-2 py-3 pt-5">
        <p className="text-skin-inverted-dark text-xs">
          When you add liquidity, you will receive pool tokens representing your
          position. These tokens automatically earn fees proportional to your
          share of the pool, and can be redeemed at any time.
        </p>
      </div>
      <button className="mt-4 mb-4 w-full bg-skin-primary text-skin-inverted font-sans font-semibold text-l hover:bg-skin-primary-dark hover:text-skin-inverted py-4 rounded-lg">
        Liquidity
      </button>
    </div>
  );
}

export default Liquidity;

const SelectTokenModal = () => {
  const { open, setOpen } = useContext(modalContext);
  const { selectedTokens, setSelectedTokens } = React.useContext(tokenContext);

  return (
    <div
      className={`absolute  h-screen w-full bg-slate-800/60 z-50 top-0 left-0 flex items-center justify-center backdrop-blur-sm ${
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
            className="pl-5 focus:outline-none font-sans font-medium text-skin-inverted-dark bg-transparent"
          />
        </div>
        <hr className="mt-4 text-skin-inverted-dark"></hr>
        <div className="h-[340px] overflow-y-auto mt-3 flex flex-col">
          {tokenValues.map((token, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-4 px-3 py-2 rounded-md font-sans text-skin-inverted-dark hover:bg-slate-400/30"
              onClick={() => {
                selectedTokens.accepted === "from"
                  ? setSelectedTokens({ ...selectedTokens, from: token })
                  : setSelectedTokens({ ...selectedTokens, to: token });
                setOpen(false);
              }}>
              <img
                src={token.icon}
                alt="tokenIcon"
                className="object-contain w-6"
              />
              <h6>{token.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
