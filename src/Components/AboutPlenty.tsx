import React, { useState } from "react";
import { GrMedium } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import aboutPlenty from '../assets/images/aboutPlenty.svg';
function AboutPlenty() {
  const [socials] = useState([
    {
      name: "Medium",
      Icon: <GrMedium />,
      link: "https://",
    },
    {
      name: "Discord",
      Icon: <FaDiscord />,
      link: "https://",
    },
    {
      name: "Telegram",
      Icon: <FaTelegramPlane />,
      link: "https://",
    },
    {
      name: "Twitter",
      Icon: <FaTwitter />,
      link: "https://",
    },
  ]);
  return (
    <div className="bg-skin-main min-h-[30vh] px-14 py-14 my-10 pl-[10vw] flex items-center justify-center">
      <div className="flex justify-center">
        <div className="flex text-left md:text-center justify-center">
          <div className="font-sans text-skin-inverted-dark">
            <h3 className=" text-3xl font-bold">About Plenty</h3>
            <p className="mt-3 w-2/3 md:w-full">
              Plenty is expanding DeFi use cases on Tezos towards a full scale
              decentralized financial ecosystem. Empowering traders, liquidity
              providers & developers to participate in an open financial
              marketplace.
            </p>
            <div className="flex items-center justify-left md:justify-center mt-5">
              {socials.map((social, index) => (
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-skin-primary-muted p-2 text-2xl bg-slate-300 rounded-md text-slate-600 mr-4 hover:text-skin-primary"
                  key={index}>
                  <div>{social.Icon}</div>
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden  w-full flex items-center justify-center">
            <img src={aboutPlenty} alt="" className="objecy-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPlenty;

const Socials = () => {};
